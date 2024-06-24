(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[170],{91656:function(){},81034:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},84079:function(e){e.exports={style:{fontFamily:"'__Poppins_b928f4', '__Poppins_Fallback_b928f4'",fontWeight:500,fontStyle:"normal"},className:"__className_b928f4"}},60823:function(e,t,n){"use strict";n.d(t,{aU:function(){return ef},x8:function(){return ep},dk:function(){return ed},zt:function(){return es},fC:function(){return eu},Dx:function(){return ec},l_:function(){return el}});var r,o=n(2265),i=n(54887);function a(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}function s(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function l(...e){return o.useCallback(s(...e),e)}var u=n(57437);function c(e,t=[]){let n=[],r=()=>{let t=n.map(e=>o.createContext(e));return function(n){let r=n?.[e]||t;return o.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let i=o.createContext(r),a=n.length;function s(t){let{scope:n,children:r,...s}=t,l=n?.[e][a]||i,c=o.useMemo(()=>s,Object.values(s));return(0,u.jsx)(l.Provider,{value:c,children:r})}return n=[...n,r],s.displayName=t+"Provider",[s,function(n,s){let l=s?.[e][a]||i,u=o.useContext(l);if(u)return u;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}var d=o.forwardRef((e,t)=>{let{children:n,...r}=e,i=o.Children.toArray(n),a=i.find(v);if(a){let e=a.props.children,n=i.map(t=>t!==a?t:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,u.jsx)(f,{...r,ref:t,children:o.isValidElement(e)?o.cloneElement(e,void 0,n):null})}return(0,u.jsx)(f,{...r,ref:t,children:n})});d.displayName="Slot";var f=o.forwardRef((e,t)=>{let{children:n,...r}=e;if(o.isValidElement(n)){let e,i;let a=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return o.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?s(t,a):a})}return o.Children.count(n)>1?o.Children.only(null):null});f.displayName="SlotClone";var p=({children:e})=>(0,u.jsx)(u.Fragment,{children:e});function v(e){return o.isValidElement(e)&&e.type===p}var m=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=o.forwardRef((e,n)=>{let{asChild:r,...o}=e,i=r?d:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,u.jsx)(i,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function w(e,t){e&&i.flushSync(()=>e.dispatchEvent(t))}function y(e){let t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...e)=>t.current?.(...e),[])}var E="dismissableLayer.update",h=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),x=o.forwardRef((e,t)=>{var n,i;let{disableOutsidePointerEvents:s=!1,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:p,onDismiss:v,...w}=e,x=o.useContext(h),[b,C]=o.useState(null),N=null!==(i=null==b?void 0:b.ownerDocument)&&void 0!==i?i:null===(n=globalThis)||void 0===n?void 0:n.document,[,R]=o.useState({}),P=l(t,e=>C(e)),L=Array.from(x.layers),[D]=[...x.layersWithOutsidePointerEventsDisabled].slice(-1),S=L.indexOf(D),j=b?L.indexOf(b):-1,_=x.layersWithOutsidePointerEventsDisabled.size>0,O=j>=S,k=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=y(e),i=o.useRef(!1),a=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let t=function(){T("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",a.current),a.current=t,n.addEventListener("click",a.current,{once:!0})):t()}else n.removeEventListener("click",a.current);i.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",a.current)}},[n,r]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,n=[...x.branches].some(e=>e.contains(t));!O||n||(null==d||d(e),null==p||p(e),e.defaultPrevented||null==v||v())},N),M=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=y(e),i=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!i.current&&T("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...x.branches].some(e=>e.contains(t))||(null==f||f(e),null==p||p(e),e.defaultPrevented||null==v||v())},N);return!function(e,t=globalThis?.document){let n=y(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{j!==x.layers.size-1||(null==c||c(e),!e.defaultPrevented&&v&&(e.preventDefault(),v()))},N),o.useEffect(()=>{if(b)return s&&(0===x.layersWithOutsidePointerEventsDisabled.size&&(r=N.body.style.pointerEvents,N.body.style.pointerEvents="none"),x.layersWithOutsidePointerEventsDisabled.add(b)),x.layers.add(b),g(),()=>{s&&1===x.layersWithOutsidePointerEventsDisabled.size&&(N.body.style.pointerEvents=r)}},[b,N,s,x]),o.useEffect(()=>()=>{b&&(x.layers.delete(b),x.layersWithOutsidePointerEventsDisabled.delete(b),g())},[b,x]),o.useEffect(()=>{let e=()=>R({});return document.addEventListener(E,e),()=>document.removeEventListener(E,e)},[]),(0,u.jsx)(m.div,{...w,ref:P,style:{pointerEvents:_?O?"auto":"none":void 0,...e.style},onFocusCapture:a(e.onFocusCapture,M.onFocusCapture),onBlurCapture:a(e.onBlurCapture,M.onBlurCapture),onPointerDownCapture:a(e.onPointerDownCapture,k.onPointerDownCapture)})});x.displayName="DismissableLayer";var b=o.forwardRef((e,t)=>{let n=o.useContext(h),r=o.useRef(null),i=l(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,u.jsx)(m.div,{...e,ref:i})});function g(){let e=new CustomEvent(E);document.dispatchEvent(e)}function T(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?w(i,a):i.dispatchEvent(a)}b.displayName="DismissableLayerBranch";var C=globalThis?.document?o.useLayoutEffect:()=>{},N=o.forwardRef((e,t)=>{var n,r;let{container:a,...s}=e,[l,c]=o.useState(!1);C(()=>c(!0),[]);let d=a||l&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return d?i.createPortal((0,u.jsx)(m.div,{...s,ref:t}),d):null});N.displayName="Portal";var R=e=>{var t,n;let r,a;let{present:s,children:u}=e,c=function(e){var t,n;let[r,a]=o.useState(),s=o.useRef({}),l=o.useRef(e),u=o.useRef("none"),[c,d]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return o.useEffect(()=>{let e=P(s.current);u.current="mounted"===c?e:"none"},[c]),C(()=>{let t=s.current,n=l.current;if(n!==e){let r=u.current,o=P(t);e?d("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?d("UNMOUNT"):n&&r!==o?d("ANIMATION_OUT"):d("UNMOUNT"),l.current=e}},[e,d]),C(()=>{if(r){let e=e=>{let t=P(s.current).includes(e.animationName);e.target===r&&t&&i.flushSync(()=>d("ANIMATION_END"))},t=e=>{e.target===r&&(u.current=P(s.current))};return r.addEventListener("animationstart",t),r.addEventListener("animationcancel",e),r.addEventListener("animationend",e),()=>{r.removeEventListener("animationstart",t),r.removeEventListener("animationcancel",e),r.removeEventListener("animationend",e)}}d("ANIMATION_END")},[r,d]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:o.useCallback(e=>{e&&(s.current=getComputedStyle(e)),a(e)},[])}}(s),d="function"==typeof u?u({present:c.isPresent}):o.Children.only(u),f=l(c.ref,(r=null===(t=Object.getOwnPropertyDescriptor(d.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in r&&r.isReactWarning?d.ref:(r=null===(n=Object.getOwnPropertyDescriptor(d,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning?d.props.ref:d.props.ref||d.ref);return"function"==typeof u||c.isPresent?o.cloneElement(d,{ref:f}):null};function P(e){return(null==e?void 0:e.animationName)||"none"}R.displayName="Presence";var L=o.forwardRef((e,t)=>(0,u.jsx)(m.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));L.displayName="VisuallyHidden";var D="ToastProvider",[S,j,_]=function(e){let t=e+"CollectionProvider",[n,r]=c(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:t,children:n}=e,r=o.useRef(null),a=o.useRef(new Map).current;return(0,u.jsx)(i,{scope:t,itemMap:a,collectionRef:r,children:n})};s.displayName=t;let f=e+"CollectionSlot",p=o.forwardRef((e,t)=>{let{scope:n,children:r}=e,o=l(t,a(f,n).collectionRef);return(0,u.jsx)(d,{ref:o,children:r})});p.displayName=f;let v=e+"CollectionItemSlot",m="data-radix-collection-item",w=o.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,s=o.useRef(null),c=l(t,s),f=a(v,n);return o.useEffect(()=>(f.itemMap.set(s,{ref:s,...i}),()=>void f.itemMap.delete(s))),(0,u.jsx)(d,{[m]:"",ref:c,children:r})});return w.displayName=v,[{Provider:s,Slot:p,ItemSlot:w},function(t){let n=a(e+"CollectionConsumer",t);return o.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(m,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},r]}("Toast"),[O,k]=c("Toast",[_]),[M,A]=O(D),F=e=>{let{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:a=50,children:s}=e,[l,c]=o.useState(null),[d,f]=o.useState(0),p=o.useRef(!1),v=o.useRef(!1);return n.trim()||console.error("Invalid prop `label` supplied to `".concat(D,"`. Expected non-empty `string`.")),(0,u.jsx)(S.Provider,{scope:t,children:(0,u.jsx)(M,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:a,toastCount:d,viewport:l,onViewportChange:c,onToastAdd:o.useCallback(()=>f(e=>e+1),[]),onToastRemove:o.useCallback(()=>f(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:v,children:s})})};F.displayName=D;var I="ToastViewport",W=["F8"],U="toast.viewportPause",K="toast.viewportResume",V=o.forwardRef((e,t)=>{let{__scopeToast:n,hotkey:r=W,label:i="Notifications ({hotkey})",...a}=e,s=A(I,n),c=j(n),d=o.useRef(null),f=o.useRef(null),p=o.useRef(null),v=o.useRef(null),w=l(t,v,s.onViewportChange),y=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=s.toastCount>0;o.useEffect(()=>{let e=e=>{var t;r.every(t=>e[t]||e.code===t)&&(null===(t=v.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[r]),o.useEffect(()=>{let e=d.current,t=v.current;if(E&&e&&t){let n=()=>{if(!s.isClosePausedRef.current){let e=new CustomEvent(U);t.dispatchEvent(e),s.isClosePausedRef.current=!0}},r=()=>{if(s.isClosePausedRef.current){let e=new CustomEvent(K);t.dispatchEvent(e),s.isClosePausedRef.current=!1}},o=t=>{e.contains(t.relatedTarget)||r()},i=()=>{e.contains(document.activeElement)||r()};return e.addEventListener("focusin",n),e.addEventListener("focusout",o),e.addEventListener("pointermove",n),e.addEventListener("pointerleave",i),window.addEventListener("blur",n),window.addEventListener("focus",r),()=>{e.removeEventListener("focusin",n),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",i),window.removeEventListener("blur",n),window.removeEventListener("focus",r)}}},[E,s.isClosePausedRef]);let h=o.useCallback(e=>{let{tabbingDirection:t}=e,n=c().map(e=>{let n=e.ref.current,r=[n,...function(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}(n)];return"forwards"===t?r:r.reverse()});return("forwards"===t?n.reverse():n).flat()},[c]);return o.useEffect(()=>{let e=v.current;if(e){let t=t=>{let n=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!n){var r,o,i;let n=document.activeElement,a=t.shiftKey;if(t.target===e&&a){null===(r=f.current)||void 0===r||r.focus();return}let s=h({tabbingDirection:a?"backwards":"forwards"}),l=s.findIndex(e=>e===n);ea(s.slice(l+1))?t.preventDefault():a?null===(o=f.current)||void 0===o||o.focus():null===(i=p.current)||void 0===i||i.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[c,h]),(0,u.jsxs)(b,{ref:d,role:"region","aria-label":i.replace("{hotkey}",y),tabIndex:-1,style:{pointerEvents:E?void 0:"none"},children:[E&&(0,u.jsx)($,{ref:f,onFocusFromOutsideViewport:()=>{ea(h({tabbingDirection:"forwards"}))}}),(0,u.jsx)(S.Slot,{scope:n,children:(0,u.jsx)(m.ol,{tabIndex:-1,...a,ref:w})}),E&&(0,u.jsx)($,{ref:p,onFocusFromOutsideViewport:()=>{ea(h({tabbingDirection:"backwards"}))}})]})});V.displayName=I;var B="ToastFocusProxy",$=o.forwardRef((e,t)=>{let{__scopeToast:n,onFocusFromOutsideViewport:r,...o}=e,i=A(B,n);return(0,u.jsx)(L,{"aria-hidden":!0,tabIndex:0,...o,ref:t,style:{position:"fixed"},onFocus:e=>{var t;let n=e.relatedTarget;(null===(t=i.viewport)||void 0===t?void 0:t.contains(n))||r()}})});$.displayName=B;var z="Toast",q=o.forwardRef((e,t)=>{let{forceMount:n,open:r,defaultOpen:i,onOpenChange:s,...l}=e,[c=!0,d]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,i]=function({defaultProp:e,onChange:t}){let n=o.useState(e),[r]=n,i=o.useRef(r),a=y(t);return o.useEffect(()=>{i.current!==r&&(a(r),i.current=r)},[r,i,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,s=a?e:r,l=y(n);return[s,o.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else i(t)},[a,e,i,l])]}({prop:r,defaultProp:i,onChange:s});return(0,u.jsx)(R,{present:n||c,children:(0,u.jsx)(Y,{open:c,...l,ref:t,onClose:()=>d(!1),onPause:y(e.onPause),onResume:y(e.onResume),onSwipeStart:a(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:a(e.onSwipeMove,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(n,"px"))}),onSwipeCancel:a(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:a(e.onSwipeEnd,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(n,"px")),d(!1)})})})});q.displayName=z;var[H,X]=O(z,{onClose(){}}),Y=o.forwardRef((e,t)=>{let{__scopeToast:n,type:r="foreground",duration:s,open:c,onClose:d,onEscapeKeyDown:f,onPause:p,onResume:v,onSwipeStart:w,onSwipeMove:E,onSwipeCancel:h,onSwipeEnd:b,...g}=e,T=A(z,n),[C,N]=o.useState(null),R=l(t,e=>N(e)),P=o.useRef(null),L=o.useRef(null),D=s||T.duration,j=o.useRef(0),_=o.useRef(D),O=o.useRef(0),{onToastAdd:k,onToastRemove:M}=T,F=y(()=>{var e;(null==C?void 0:C.contains(document.activeElement))&&(null===(e=T.viewport)||void 0===e||e.focus()),d()}),I=o.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(O.current),j.current=new Date().getTime(),O.current=window.setTimeout(F,e))},[F]);o.useEffect(()=>{let e=T.viewport;if(e){let t=()=>{I(_.current),null==v||v()},n=()=>{let e=new Date().getTime()-j.current;_.current=_.current-e,window.clearTimeout(O.current),null==p||p()};return e.addEventListener(U,n),e.addEventListener(K,t),()=>{e.removeEventListener(U,n),e.removeEventListener(K,t)}}},[T.viewport,D,p,v,I]),o.useEffect(()=>{c&&!T.isClosePausedRef.current&&I(D)},[c,D,T.isClosePausedRef,I]),o.useEffect(()=>(k(),()=>M()),[k,M]);let W=o.useMemo(()=>C?function e(t){let n=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&n.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let r=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!r){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&n.push(e)}else n.push(...e(t))}}}),n}(C):null,[C]);return T.viewport?(0,u.jsxs)(u.Fragment,{children:[W&&(0,u.jsx)(Z,{__scopeToast:n,role:"status","aria-live":"foreground"===r?"assertive":"polite","aria-atomic":!0,children:W}),(0,u.jsx)(H,{scope:n,onClose:F,children:i.createPortal((0,u.jsx)(S.ItemSlot,{scope:n,children:(0,u.jsx)(x,{asChild:!0,onEscapeKeyDown:a(f,()=>{T.isFocusedToastEscapeKeyDownRef.current||F(),T.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,u.jsx)(m.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":c?"open":"closed","data-swipe-direction":T.swipeDirection,...g,ref:R,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:a(e.onKeyDown,e=>{"Escape"!==e.key||(null==f||f(e.nativeEvent),e.nativeEvent.defaultPrevented||(T.isFocusedToastEscapeKeyDownRef.current=!0,F()))}),onPointerDown:a(e.onPointerDown,e=>{0===e.button&&(P.current={x:e.clientX,y:e.clientY})}),onPointerMove:a(e.onPointerMove,e=>{if(!P.current)return;let t=e.clientX-P.current.x,n=e.clientY-P.current.y,r=!!L.current,o=["left","right"].includes(T.swipeDirection),i=["left","up"].includes(T.swipeDirection)?Math.min:Math.max,a=o?i(0,t):0,s=o?0:i(0,n),l="touch"===e.pointerType?10:2,u={x:a,y:s},c={originalEvent:e,delta:u};r?(L.current=u,eo("toast.swipeMove",E,c,{discrete:!1})):ei(u,T.swipeDirection,l)?(L.current=u,eo("toast.swipeStart",w,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(n)>l)&&(P.current=null)}),onPointerUp:a(e.onPointerUp,e=>{let t=L.current,n=e.target;if(n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),L.current=null,P.current=null,t){let n=e.currentTarget,r={originalEvent:e,delta:t};ei(t,T.swipeDirection,T.swipeThreshold)?eo("toast.swipeEnd",b,r,{discrete:!0}):eo("toast.swipeCancel",h,r,{discrete:!0}),n.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),T.viewport)})]}):null}),Z=e=>{let{__scopeToast:t,children:n,...r}=e,i=A(z,t),[a,s]=o.useState(!1),[l,c]=o.useState(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=y(e);C(()=>{let e=0,n=0;return e=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(n)}},[t])}(()=>s(!0)),o.useEffect(()=>{let e=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(e)},[]),l?null:(0,u.jsx)(N,{asChild:!0,children:(0,u.jsx)(L,{...r,children:a&&(0,u.jsxs)(u.Fragment,{children:[i.label," ",n]})})})},G=o.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,u.jsx)(m.div,{...r,ref:t})});G.displayName="ToastTitle";var J=o.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,u.jsx)(m.div,{...r,ref:t})});J.displayName="ToastDescription";var Q="ToastAction",ee=o.forwardRef((e,t)=>{let{altText:n,...r}=e;return n.trim()?(0,u.jsx)(er,{altText:n,asChild:!0,children:(0,u.jsx)(en,{...r,ref:t})}):(console.error("Invalid prop `altText` supplied to `".concat(Q,"`. Expected non-empty `string`.")),null)});ee.displayName=Q;var et="ToastClose",en=o.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e,o=X(et,n);return(0,u.jsx)(er,{asChild:!0,children:(0,u.jsx)(m.button,{type:"button",...r,ref:t,onClick:a(e.onClick,o.onClose)})})});en.displayName=et;var er=o.forwardRef((e,t)=>{let{__scopeToast:n,altText:r,...o}=e;return(0,u.jsx)(m.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...o,ref:t})});function eo(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?w(i,a):i.dispatchEvent(a)}var ei=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=Math.abs(e.x),o=Math.abs(e.y),i=r>o;return"left"===t||"right"===t?i&&r>n:!i&&o>n};function ea(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var es=F,el=V,eu=q,ec=G,ed=J,ef=ee,ep=en}}]);