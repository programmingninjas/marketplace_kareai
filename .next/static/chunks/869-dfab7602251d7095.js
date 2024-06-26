"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[869],{97528:function(e,t,r){r.d(t,{Z:function(){return m}});var a=r(57437),n=r(2265),s=r(74697),i=r(42873),l=r(14392),o=r(42421),d=r(87138),c=r(89857),f=r(66648),u=()=>{let{isOpen:e,toggleSidebar:t}=(0,c.A)(),[r,u]=(0,n.useState)(!1);return(0,a.jsxs)("div",{className:"h-screen shadow-md flex flex-col font-sans text-base transition-all duration-300 ".concat(e?"w-64":""),children:[(0,a.jsx)("div",{className:"flex items-center justify-between p-4 mt-10",children:(0,a.jsxs)("div",{className:"flex justify-between items-center w-full",children:[(0,a.jsx)(d.default,{href:"/",children:(0,a.jsx)(f.default,{width:100,height:50,src:"/logo.jpg",alt:"Logo",className:"h-8 mr-2 ".concat(e?"block":"hidden")})}),(0,a.jsx)("button",{onClick:t,className:"focus:outline-none",children:e?(0,a.jsx)(s.Z,{className:"w-6 h-6 text-zinc-900"}):(0,a.jsx)(i.Z,{className:"w-6 h-6 text-zinc-900"})})]})}),(0,a.jsxs)("nav",{className:"flex-1 px-4 py-8 space-y-4 ".concat(e?"block":"hidden"),children:[(0,a.jsxs)("a",{href:"#chats",className:"flex items-center text-zinc-900",children:[(0,a.jsx)("svg",{className:"w-6 h-6 mr-3",fill:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M3 3v15h15v4.5l6-6-6-6v4.5H5V3H3zm15 12.5l3 3V15h-3v.5zm-9-7.5v2h12v-2H9zm0 4v2h6v-2H9zm-2-9V3H3v4.5L9 3zm-2 9v2H5v-2h2zm0-4v2H5v-2h2zm-2-4v2H5v-2h2zm12-1.5v2h2v-2h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2z"})}),"Chats"]}),(0,a.jsxs)("a",{href:"#reports",className:"flex items-center text-zinc-900",children:[(0,a.jsx)("svg",{className:"w-6 h-6 mr-3",fill:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h7v2h4v-2h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H3V7h18v10zm-8-7h-2v2H9v2h2v2h2v-2h2v-2h-2V10z"})}),"Reports"]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("button",{onClick:()=>{u(!r)},className:"flex items-center justify-between text-zinc-900 focus:outline-none",children:[(0,a.jsxs)("span",{className:"flex items-center",children:[(0,a.jsx)("svg",{className:"w-6 h-6 mr-3",fill:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M12 2a10 10 0 0110 10v3l-2.29 2.29c-.63.63-1.71.18-1.71-.71v-1h-12v1c0 .89-1.08 1.34-1.71.71L2 15v-3a10 10 0 0110-10zm0-2C5.48 0 0 5.48 0 12v4c0 1.1.9 2 2 2h5v3c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-3h5c1.1 0 2-.9 2-2v-4c0-6.52-5.48-12-12-12zm1 14H9v-2h2v-2H9v-2h2V6h2v2h2v2h-2v2h2v2h-2v2zm-7-2v-2h2v2H6zm0-4v-2h2v2H6z"})}),"A.I Agents"]}),r?(0,a.jsx)(l.Z,{className:"w-5 h-5"}):(0,a.jsx)(o.Z,{className:"w-5 h-5"})]}),r&&(0,a.jsxs)("div",{className:"mt-2 space-y-2 pl-6",children:[(0,a.jsx)("input",{type:"text",placeholder:"Find a Agent",className:"w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"}),(0,a.jsx)("a",{href:"#favorite-agents",className:"block text-zinc-800",children:"Favorite Agents (0)"}),(0,a.jsx)("a",{href:"#popular-agents",className:"block text-zinc-800",children:"Popular Agents (5)"}),(0,a.jsx)("a",{href:"#recent-agents",className:"block text-zinc-800",children:"Recent Agents (9)"})]})]})]})]})},m=e=>{let{children:t}=e;return(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(u,{}),(0,a.jsx)("main",{className:"flex-1",children:t})]})}},61575:function(e,t,r){var a=r(57437),n=r(2265),s=r(60282);t.Z=e=>{let{messages:t}=e,[r,i]=(0,n.useState)(0);return(0,n.useEffect)(()=>{if(t&&t.length>0){let e=setInterval(()=>{i(r=>r<t.length-1?r+1:(clearInterval(e),r))},4e3);return()=>clearInterval(e)}},[t]),(0,a.jsxs)("div",{className:"flex flex-col items-center mt-52 justify-center space-x-2",children:[(0,a.jsx)(s.Z,{className:"h-8 w-8 animate-spin text-[#540F66]"}),t&&t.length>0?t[r]:"Loading..."]})}},35265:function(e,t,r){r.d(t,{Qd:function(){return d},UQ:function(){return o},o4:function(){return c},vF:function(){return f}});var a=r(57437),n=r(2265),s=r(64756),i=r(42421),l=r(49354);let o=s.fC,d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.ck,{ref:t,className:(0,l.cn)("border-b",r),...n})});d.displayName="AccordionItem";let c=n.forwardRef((e,t)=>{let{className:r,children:n,...o}=e;return(0,a.jsx)(s.h4,{className:"flex",children:(0,a.jsxs)(s.xz,{ref:t,className:(0,l.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all  [&[data-state=open]>svg]:rotate-180",r),...o,children:[n,(0,a.jsx)(i.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});c.displayName=s.xz.displayName;let f=n.forwardRef((e,t)=>{let{className:r,children:n,...i}=e;return(0,a.jsx)(s.VY,{ref:t,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...i,children:(0,a.jsx)("div",{className:(0,l.cn)("pb-4 pt-0",r),children:n})})});f.displayName=s.VY.displayName},89733:function(e,t,r){r.d(t,{z:function(){return d}});var a=r(57437),n=r(2265),s=r(71538),i=r(12218),l=r(49354);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground",destructive:"bg-destructive text-destructive-foreground",outline:"border border-input bg-background",secondary:"bg-secondary text-secondary-foreground",ghost:"",link:"text-primary underline-offset-4"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:r,variant:n,size:i,asChild:d=!1,...c}=e,f=d?s.g7:"button";return(0,a.jsx)(f,{className:(0,l.cn)(o({variant:n,size:i,className:r})),ref:t,...c})});d.displayName="Button"},48185:function(e,t,r){r.d(t,{Ol:function(){return l},SZ:function(){return d},Zb:function(){return i},aY:function(){return c},ll:function(){return o}});var a=r(57437),n=r(2265),s=r(49354);let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg  bg-card text-card-foreground ",r),...n})});i.displayName="Card";let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...n})});l.displayName="CardHeader";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",r),...n})});o.displayName="CardTitle";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...n})});d.displayName="CardDescription";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...n})});c.displayName="CardContent",n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...n})}).displayName="CardFooter"},97114:function(e,t,r){r.d(t,{l0:function(){return f},Wi:function(){return m},xJ:function(){return h},lX:function(){return v},zG:function(){return N}});var a=r(57437),n=r(2265),s=r(71538),i=r(39343),l=r(49354),o=r(38364);let d=(0,r(12218).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(o.f,{ref:t,className:(0,l.cn)(d(),r),...n})});c.displayName=o.f.displayName;let f=i.RV,u=n.createContext({}),m=e=>{let{...t}=e;return(0,a.jsx)(u.Provider,{value:{name:t.name},children:(0,a.jsx)(i.Qr,{...t})})},x=()=>{let e=n.useContext(u),t=n.useContext(p),{getFieldState:r,formState:a}=(0,i.Gc)(),s=r(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:l}=t;return{id:l,name:e.name,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...s}},p=n.createContext({}),h=n.forwardRef((e,t)=>{let{className:r,...s}=e,i=n.useId();return(0,a.jsx)(p.Provider,{value:{id:i},children:(0,a.jsx)("div",{ref:t,className:(0,l.cn)("space-y-2",r),...s})})});h.displayName="FormItem";let v=n.forwardRef((e,t)=>{let{className:r,...n}=e,{error:s,formItemId:i}=x();return(0,a.jsx)(c,{ref:t,className:(0,l.cn)(s&&"text-destructive",r),htmlFor:i,...n})});v.displayName="FormLabel",n.forwardRef((e,t)=>{let{...r}=e,{error:n,formItemId:i,formDescriptionId:l,formMessageId:o}=x();return(0,a.jsx)(s.g7,{ref:t,id:i,"aria-describedby":n?"".concat(l," ").concat(o):"".concat(l),"aria-invalid":!!n,...r})}).displayName="FormControl",n.forwardRef((e,t)=>{let{className:r,...n}=e,{formDescriptionId:s}=x();return(0,a.jsx)("p",{ref:t,id:s,className:(0,l.cn)("text-sm text-muted-foreground",r),...n})}).displayName="FormDescription";let N=n.forwardRef((e,t)=>{let{className:r,children:n,...s}=e,{error:i,formMessageId:o}=x(),d=i?String(null==i?void 0:i.message):n;return d?(0,a.jsx)("p",{ref:t,id:o,className:(0,l.cn)("text-sm font-medium text-destructive",r),...s,children:d}):null});N.displayName="FormMessage"},77209:function(e,t,r){r.d(t,{I:function(){return i}});var a=r(57437),n=r(2265),s=r(49354);let i=n.forwardRef((e,t)=>{let{className:r,type:n,...i}=e;return(0,a.jsx)("input",{type:n,className:(0,s.cn)("flex h-10 w-full rounded-md border border-black   border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-lg focus-visible:ring-ring focus-visible:shadow-offset-1 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},2128:function(e,t,r){r.d(t,{Bw:function(){return p},Ph:function(){return c},Ql:function(){return h},i4:function(){return u},ki:function(){return f}});var a=r(57437),n=r(2265),s=r(69538),i=r(42421),l=r(14392),o=r(22468),d=r(49354);let c=s.fC;s.ZA;let f=s.B4,u=n.forwardRef((e,t)=>{let{className:r,children:n,...l}=e;return(0,a.jsxs)(s.xz,{ref:t,className:(0,d.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",r),...l,children:[n,(0,a.jsx)(s.JO,{asChild:!0,children:(0,a.jsx)(i.Z,{className:"h-4 w-4 opacity-50"})})]})});u.displayName=s.xz.displayName;let m=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.u_,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",r),...n,children:(0,a.jsx)(l.Z,{className:"h-4 w-4"})})});m.displayName=s.u_.displayName;let x=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.$G,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",r),...n,children:(0,a.jsx)(i.Z,{className:"h-4 w-4"})})});x.displayName=s.$G.displayName;let p=n.forwardRef((e,t)=>{let{className:r,children:n,position:i="popper",...l}=e;return(0,a.jsx)(s.h_,{children:(0,a.jsxs)(s.VY,{ref:t,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===i&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:i,...l,children:[(0,a.jsx)(m,{}),(0,a.jsx)(s.l_,{className:(0,d.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),(0,a.jsx)(x,{})]})})});p.displayName=s.VY.displayName,n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.__,{ref:t,className:(0,d.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",r),...n})}).displayName=s.__.displayName;let h=n.forwardRef((e,t)=>{let{className:r,children:n,...i}=e;return(0,a.jsxs)(s.ck,{ref:t,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...i,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(s.wU,{children:(0,a.jsx)(o.Z,{className:"h-4 w-4"})})}),(0,a.jsx)(s.eT,{children:n})]})});h.displayName=s.ck.displayName,n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.Z0,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",r),...n})}).displayName=s.Z0.displayName},86864:function(e,t,r){r.d(t,{SP:function(){return d},dr:function(){return o},mQ:function(){return l},nU:function(){return c}});var a=r(57437),n=r(2265),s=r(9385),i=r(49354);let l=s.fC,o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.aV,{ref:t,className:(0,i.cn)("inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground",r),...n})});o.displayName=s.aV.displayName;let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.xz,{ref:t,className:(0,i.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-700 data-[state=active]:to-[#540F66] data-[state=active]:text-white data-[state=active]:shadow-md",r),...n})});d.displayName=s.xz.displayName;let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.VY,{ref:t,className:(0,i.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",r),...n})});c.displayName=s.VY.displayName},89857:function(e,t,r){r.d(t,{A:function(){return l},SidebarProvider:function(){return i}});var a=r(57437),n=r(2265);let s=(0,n.createContext)(void 0),i=e=>{let{children:t}=e,[r,i]=(0,n.useState)(!1);return(0,a.jsx)(s.Provider,{value:{isOpen:r,toggleSidebar:()=>{i(e=>!e)}},children:t})},l=()=>{let e=(0,n.useContext)(s);if(!e)throw Error("useSidebar must be used within a SidebarProvider");return e}},49354:function(e,t,r){r.d(t,{cn:function(){return s}});var a=r(44839),n=r(96164);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}}}]);