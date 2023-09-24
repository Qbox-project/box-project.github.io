(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[887],{6134:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/core/import",function(){return r(9287)}])},967:function(e,n,r){"use strict";var o=r(1527);r(959);var s=r(6125),t=r(2349);let i={logo:(0,o.jsx)("div",{style:{paddingLeft:"50px",lineHeight:"38px",background:"url(/qbox-duck.png) no-repeat left",backgroundSize:"38px",fontWeight:550},children:"Qbox"}),project:{link:"https://github.com/Qbox-project"},chat:{link:"https://discord.gg/qbox"},docsRepositoryBase:"https://github.com/Qbox-project/qbox-docs",footer:{text:"Qbox Project"},primaryHue:{dark:200,light:200},head:function(){let{asPath:e}=(0,t.useRouter)(),{frontMatter:n,title:r}=(0,s.ZR)(),i=n.description||"Documentation for the Qbox Project";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,o.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/qbox-duck.ico"}),(0,o.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,o.jsx)("meta",{name:"description",content:i}),(0,o.jsx)("meta",{name:"og:title",content:r}),(0,o.jsx)("meta",{name:"og:description",content:i}),(0,o.jsx)("meta",{name:"og:url",content:"https://qbox-docs.vercel.app".concat(e)})]})},useNextSeoProps:function(){let{asPath:e}=(0,t.useRouter)(),n=e.replace(/[-_]/g," ").split("/"),r="#"!==n[1][0]&&n[1]||"Qbox",o=n[n.length-1],s=/[a-z]/.test(o)&&/[A-Z]/.test(o)?o:"%s";return{titleTemplate:"".concat(s," - ").concat(o===r?"Documentation":r.replace(/(^\w|\s\w)/g,e=>e.toUpperCase()))}}};n.Z=i},9287:function(e,n,r){"use strict";r.r(n),r.d(n,{__toc:function(){return c}});var o=r(1527),s=r(3630),t=r(6125),i=r(967);r(4552);var a=r(6119);let c=[{depth:2,value:"Format",id:"format"},{depth:2,value:"Example",id:"example"}];function l(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",code:"code",pre:"pre",span:"span"},(0,a.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{children:"Import"}),"\n",(0,o.jsx)(n.p,{children:"In the core you will find an import.lua file."}),"\n",(0,o.jsx)(n.p,{children:"This file is used to import a module system into your resource."}),"\n",(0,o.jsx)(n.p,{children:"You can use it to manage certain modules from any resource."}),"\n",(0,o.jsx)(n.h2,{id:"format",children:"Format"}),"\n",(0,o.jsx)(n.p,{children:"The format for the modules has four ways to specify them:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"'module_name'"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"'side:module_name'"}),", ",(0,o.jsx)(n.code,{children:"side"})," can be ",(0,o.jsx)(n.code,{children:"client"}),", ",(0,o.jsx)(n.code,{children:"server"})," or ",(0,o.jsx)(n.code,{children:"shared"}),", if it's neither of them it defaults to shared."]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"'resource_name:module_name'"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"'resource_name:side:module_name'"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"These four ways allow you to specify any module you want, as long as it's in a modules folder inside the specified resource.\nIt defaults to the resource it's loaded in if no resource is specified, meaning it will load it from yourResourceName/modules/"}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(n.p,{children:["You have a resource named 'test' and in that resource you have a folder called ",(0,o.jsx)(n.code,{children:"modules"})," (mandatory for the modules to be found)."]}),"\n",(0,o.jsxs)(n.p,{children:["Inside the modules folder you have a file named ",(0,o.jsx)(n.code,{children:"hack.lua"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"You can load this inside another resource you have, for example one named 'test_hack'."}),"\n",(0,o.jsx)(n.p,{children:"You can add the following to your fxmanifest.lua to then add the module in there:"}),"\n",(0,o.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,o.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"shared_script"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@qbx-core/import.lua'"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"module"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'test:hack'"})]})]})}),"\n",(0,o.jsx)(n.p,{children:"or"}),"\n",(0,o.jsx)(n.p,{children:"To specify multiple modules"}),"\n",(0,o.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,o.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"shared_script"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@qbx-core/import.lua'"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"modules"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'test:hack'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,o.jsx)(n.p,{children:"That code will now load the hack.lua inside the test/modules/ folder into the test_hack resource as it's own script."}),"\n",(0,o.jsx)(n.p,{children:"That means you can use it like any other script you have in your own resource."})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/resources/core/import.mdx",route:"/resources/core/import",pageMap:[{kind:"Meta",data:{index:"Introduction",resources:"Resources",converting:"Converting from QB",contributors:"Contributing",developers:"Developer's Guide",faq:"FAQ",about:{title:"About",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"MdxPage",name:"contributors",route:"/contributors"},{kind:"MdxPage",name:"converting",route:"/converting"},{kind:"MdxPage",name:"developers",route:"/developers"},{kind:"MdxPage",name:"faq",route:"/faq"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"resources",route:"/resources",children:[{kind:"Meta",data:{core:"Core"}},{kind:"Folder",name:"core",route:"/resources/core",children:[{kind:"Meta",data:{functions:"Functions",events:"Events",import:"Import"}},{kind:"Folder",name:"events",route:"/resources/core/events",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/resources/core/events/client"},{kind:"MdxPage",name:"server",route:"/resources/core/events/server"}]},{kind:"Folder",name:"functions",route:"/resources/core/functions",children:[{kind:"Meta",data:{client:"Client",server:"Server",shared:"Shared"}},{kind:"MdxPage",name:"client",route:"/resources/core/functions/client"},{kind:"MdxPage",name:"server",route:"/resources/core/functions/server"},{kind:"MdxPage",name:"shared",route:"/resources/core/functions/shared"}]},{kind:"MdxPage",name:"import",route:"/resources/core/import"}]},{kind:"MdxPage",name:"core",route:"/resources/core"}]},{kind:"MdxPage",name:"resources",route:"/resources"}],flexsearch:{codeblocks:!0},title:"Import",headings:c},pageNextRoute:"/resources/core/import",nextraLayout:t.ZP,themeConfig:i.Z};n.default=(0,s.j)(d)}},function(e){e.O(0,[791,774,888,179],function(){return e(e.s=6134)}),_N_E=e.O()}]);