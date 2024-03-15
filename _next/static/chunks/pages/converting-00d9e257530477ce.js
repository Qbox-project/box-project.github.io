(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[763],{6979:function(e,o,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/converting",function(){return s(6660)}])},6660:function(e,o,s){"use strict";s.r(o),s.d(o,{__toc:function(){return l}});var r=s(1527),n=s(7154),i=s(5424),t=s(1890);let l=[{depth:3,value:"Check your job grades in qbx_core/shared/jobs.lua.",id:"check-your-job-grades-in-qbx_coresharedjobslua"},{depth:3,value:"Configure ox_inventory and convert your database.",id:"configure-ox_inventory-and-convert-your-database"},{depth:3,value:"Qbox has multicharacter built into qbx_core.",id:"qbox-has-multicharacter-built-into-qbx_core"},{depth:3,value:"Qbox has a queue system built into qbx_core.",id:"qbox-has-a-queue-system-built-into-qbx_core"},{depth:3,value:"Modify your players table",id:"modify-your-players-table"},{depth:3,value:"Configure multijob/multigang",id:"configure-multijobmultigang"},{depth:2,value:"Migrating a resource from QBCore to Qbox",id:"migrating-a-resource-from-qbcore-to-qbox"},{depth:3,value:"Common replacements",id:"common-replacements"}];function _createMdxContent(e){let o=Object.assign({h1:"h1",h3:"h3",code:"code",p:"p",a:"a",ul:"ul",li:"li",h2:"h2",ol:"ol",pre:"pre",span:"span"},(0,i.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{children:"Converting from QBCore"}),"\n",(0,r.jsxs)(t.Rg,{children:[(0,r.jsxs)(o.h3,{id:"check-your-job-grades-in-qbx_coresharedjobslua",children:["Check your job grades in ",(0,r.jsx)(o.code,{children:"qbx_core/shared/jobs.lua"}),"."]}),(0,r.jsx)(o.p,{children:"In Qbox, job grades are numbers without quotations, whereas in QBCore they are strings."}),(0,r.jsx)(o.h3,{id:"configure-ox_inventory-and-convert-your-database",children:"Configure ox_inventory and convert your database."}),(0,r.jsxs)(o.p,{children:["Back it up first! (",(0,r.jsx)(o.a,{href:"https://overextended.dev/ox_inventory/Frameworks/qb",children:"see ox_inventory documentation"}),")"]}),(0,r.jsx)(o.h3,{id:"qbox-has-multicharacter-built-into-qbx_core",children:"Qbox has multicharacter built into qbx_core."}),(0,r.jsx)(o.p,{children:"If you want to keep using your own multicharacter resource, configure qbx_core accordingly.\nOtherwise you can disable or delete your old multicharacter resource."}),(0,r.jsx)(o.h3,{id:"qbox-has-a-queue-system-built-into-qbx_core",children:"Qbox has a queue system built into qbx_core."}),(0,r.jsxs)(o.p,{children:["If you want to keep using your own queue system, specify ",(0,r.jsx)(o.code,{children:'set qbx:enablequeue "false"'})," inside your cfg file.\nOtherwise you can disable or delete your old queue system."]}),(0,r.jsxs)(o.h3,{id:"modify-your-players-table",children:["Modify your ",(0,r.jsx)(o.code,{children:"players"})," table"]}),(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Add to the ",(0,r.jsx)(o.code,{children:"players"})," table to add the new column ",(0,r.jsx)(o.code,{children:"last_logged_out"})]}),"\n",(0,r.jsxs)(o.li,{children:["Change the collation of players.citizenid column to ",(0,r.jsx)(o.code,{children:"utf8mb4_unicode_ci"})," you may also need to change citizenid columns to this collation in other tables\nif they have a foreign key constraint to the players table."]}),"\n"]}),(0,r.jsx)(o.h3,{id:"configure-multijobmultigang",children:"Configure multijob/multigang"}),(0,r.jsxs)(o.p,{children:["Qbox has a multijob/gang system built into core that cannot be disabled. By default, players may only be in one job & gang. This can be overriden by setting ",(0,r.jsx)(o.code,{children:"qbx:max_jobs_per_player"})," and ",(0,r.jsx)(o.code,{children:"qbx:max_gangs_per_player"})," in server.cfg.\nDo not use an external multijob/gang resource that isn't guaranteed by the developer to be Qbox compatible.\nUsing incompatible multijobs or resources which modify core's database tables may lead to data corruption. First, double check that the player.citizenid column in your database has collation ",(0,r.jsx)(o.code,{children:"utf8mb4_unicode_ci"}),". If not, change it.\nThen, run qbx_core.sql to create the new player_groups table. Start the server and type ",(0,r.jsx)(o.code,{children:"convertjobs"})," into the txAdmin console once the server is running to populate the player_groups table.\nThis needs to be done even if you don't already have a multijob/gang system."]})]}),"\n",(0,r.jsx)(o.h2,{id:"migrating-a-resource-from-qbcore-to-qbox",children:"Migrating a resource from QBCore to Qbox"}),"\n",(0,r.jsx)(t.UW,{type:"info",children:(0,r.jsx)(o.p,{children:"This is optional as Qbox has 99% compatibility with existing QB scripts"})}),"\n",(0,r.jsx)(o.p,{children:"Within Qbox, the core object no longer exists.\nInstead, the data can be accessed via a combination of export functions and imported modules."}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"Import the needed modules from qbx_core to supply replacement functions for ones from QBCore;"}),"\n",(0,r.jsx)(o.li,{children:"Replace calls to QBCore one by one with calls to the imported modules and exported functions. Both can be used at the same time, so conversion can be done partially, or over time."}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"common-replacements",children:"Common replacements"}),"\n",(0,r.jsx)(o.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(o.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Functions. "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Functions."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayerData"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" QBX.PlayerData "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"-- requires importing the playerdata module"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Functions."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlate"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(vehicle) "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" qbx."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"getVehiclePlate"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(vehicle) "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"-- requires importing the lib module"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Jobs "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetJobs"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Gangs "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetGangs"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Vehicles "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetVehiclesByName"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Weapons "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetWeapons"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Locations "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetLocations"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Items "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.ox_inventory:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Items"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"exports["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qb-core'"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"KeyPressed"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"hideTextUI"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"exports["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qb-core'"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"HideText"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"hideTextUI"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"exports["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qb-core'"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"DrawText"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(text, position) "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"showTextUI"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(text, { position "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" position })"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"exports["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qb-core'"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"ChangeText"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(text, position) "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"hideTextUI"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"() lib."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"showTextUI"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(text, { position "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" position })"})]})]})})]})}o.default=(0,n.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:o}=Object.assign({},(0,i.a)(),e.components);return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/converting.mdx",route:"/converting",title:"Converting from QBCore",headings:l},pageNextRoute:"/converting"})}},function(e){e.O(0,[154,774,888,179],function(){return e(e.s=6979)}),_N_E=e.O()}]);