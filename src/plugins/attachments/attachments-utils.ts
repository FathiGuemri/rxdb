import { newRxError } from '../../rx-error';
import type {
    RxAttachmentWriteData,
    RxStorageInstance,
    WithDeletedAndAttachments
} from '../../types';

export function ensureSchemaSupportsAttachments(doc: any) {
    const schemaJson = doc.collection.schema.jsonSchema;
    if (!schemaJson.attachments) {
        throw newRxError('AT1', {
            link: 'https://pubkey.github.io/rxdb/rx-attachment.html'
        });
    }
}

export function assignMethodsToAttachment(attachment: any) {
    Object
        .entries(attachment.doc.collection.attachments)
        .forEach(([funName, fun]) => {
            Object.defineProperty(attachment, funName, {
                get: () => (fun as any).bind(attachment)
            });
        });
}

/**
 * Fill up the missing attachment.data of the newDocument
 * so that the new document can be send to somehwere else
 * which could then recieve all required attachments data
 * that it did not have before.
 */
export async function fillWriteDataForAttachmentsChange<RxDocType>(
    primaryPath: string,
    storageInstance: RxStorageInstance<RxDocType, any, any, any>,
    newDocument: WithDeletedAndAttachments<RxDocType>,
    originalDocument?: WithDeletedAndAttachments<RxDocType>
): Promise<WithDeletedAndAttachments<RxDocType>> {

    if (
        !newDocument._attachments ||
        (
            originalDocument &&
            !originalDocument._attachments
        )
    ) {
        throw new Error('_attachments missing');
    }

    const docId: string = (newDocument as any)[primaryPath];
    const originalAttachmentsIds = new Set(
        originalDocument && originalDocument._attachments
            ? Object.keys(originalDocument._attachments)
            : []
    );
    await Promise.all(
        Object
            .entries(newDocument._attachments)
            .map(async ([key, value]) => {
                if (
                    !originalAttachmentsIds.has(key) &&
                    !(value as RxAttachmentWriteData).data
                ) {

                    console.log('attahcment missing: ' + key);

                    console.dir({
                        docId,
                        key,
                        digest: value.digest
                    });

                    const attachmentDataString = await storageInstance.getAttachmentData(
                        docId,
                        key,
                        value.digest
                    );
                    (value as RxAttachmentWriteData).data = attachmentDataString;
                }
            })
    );

    return newDocument;
}
