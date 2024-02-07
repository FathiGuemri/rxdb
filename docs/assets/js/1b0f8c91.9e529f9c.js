"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[5296],{6308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var a=n(7624),i=n(4552);const c={title:"Backup",slug:"backup.html"},s="\ud83d\udce5 Backup Plugin",r={id:"backup",title:"Backup",description:"With the backup plugin you can write the current database state and ongoing changes into folders on the filesystem.",source:"@site/docs/backup.md",sourceDirName:".",slug:"/backup.html",permalink:"/backup.html",draft:!1,unlisted:!1,editUrl:"https://github.com/pubkey/rxdb/tree/master/docs-src/docs/backup.md",tags:[],version:"current",frontMatter:{title:"Backup",slug:"backup.html"},sidebar:"tutorialSidebar",previous:{title:"Cleanup",permalink:"/cleanup.html"},next:{title:"Transactions, Conflicts and Revisions",permalink:"/transactions-conflicts-revisions.html"}},o={},l=[{value:"import",id:"import",level:2},{value:"one-time backup",id:"one-time-backup",level:2},{value:"live backup",id:"live-backup",level:2},{value:"writeEvents$",id:"writeevents",level:2},{value:"Import backup",id:"import-backup",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"-backup-plugin",children:"\ud83d\udce5 Backup Plugin"}),"\n",(0,a.jsx)(t.p,{children:"With the backup plugin you can write the current database state and ongoing changes into folders on the filesystem.\nThe files are written in plain json together with their attachments."}),"\n",(0,a.jsx)(t.p,{children:"This is useful to:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Consume the database content with other software that cannot replicate with RxDB"}),"\n",(0,a.jsx)(t.li,{children:"Write a backup of the database to a remote server by mounting the backup folder on the other server."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"import",children:"import"}),"\n",(0,a.jsx)(t.p,{children:"The backup plugin works only in node.js, not in browser.\nThis means we have to import it to RxDB before it can be used."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import { addRxPlugin } from 'rxdb';\nimport { RxDBBackupPlugin } from 'rxdb/plugins/backup';\naddRxPlugin(RxDBBackupPlugin);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"one-time-backup",children:"one-time backup"}),"\n",(0,a.jsxs)(t.p,{children:["Write the whole database to the filesystem ",(0,a.jsx)(t.strong,{children:"once"}),".\nWhen called multiple times, it will continue from the last checkpoint and not start all over again."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const backupOptions = {\n    // if false, a one-time backup will be written\n    live: false,\n    // the folder where the backup will be stored\n    directory: '/my-backup-folder/,\n    // if true, attachments will also be saved\n    attachments: true\n}\nconst backupState = myDatabase.backup(backupOptions);\nawait backupState.awaitInitialBackup();\n\n// call again to run from the last checkpoint\nconst backupState2 = myDatabase.backup(backupOptions);\nawait backupState2.awaitInitialBackup();\n"})}),"\n",(0,a.jsx)(t.h2,{id:"live-backup",children:"live backup"}),"\n",(0,a.jsxs)(t.p,{children:["When ",(0,a.jsx)(t.code,{children:"live: true"})," is set, the backup will write all ongoing changes to the backup directory."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const backupOptions = {\n    // set live: true to have an ongoing backup\n    live: true,\n    directory: '/my-backup-folder/,\n    attachments: true\n}\nconst backupState = myDatabase.backup(backupOptions);\n\n// you can still await the initial backup write, but further changes will still be processed.\nawait backupState.awaitInitialBackup();\n"})}),"\n",(0,a.jsx)(t.h2,{id:"writeevents",children:"writeEvents$"}),"\n",(0,a.jsxs)(t.p,{children:["You can listen to the ",(0,a.jsx)(t.code,{children:"writeEvents$"})," Observable to get notified about written backup files."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const backupOptions = {\n    live: false,\n    directory: '/my-backup-folder/,\n    attachments: true\n}\nconst backupState = myDatabase.backup(backupOptions);\n\nconst subscription = backupState.writeEvents$.subscribe(writeEvent => console.dir(writeEvent));\n/*\n> {\n    collectionName: 'humans',\n    documentId: 'foobar',\n    files: [\n        '/my-backup-folder/foobar/document.json'\n    ],\n    deleted: false\n}\n*/\n"})}),"\n",(0,a.jsx)(t.h2,{id:"import-backup",children:"Import backup"}),"\n",(0,a.jsx)(t.p,{children:"It is currently not possible to import from a written backup. If you need this functionality, please make a pull request."})]})}function p(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>s});var a=n(1504);const i={},c=a.createContext(i);function s(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);