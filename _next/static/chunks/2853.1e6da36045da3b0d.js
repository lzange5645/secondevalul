"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2853],{18950:function(e,t,n){n.r(t),n.d(t,{AccountObserver:function(){return d}});var r=n(52322),o=n(2784),i=n(13787),s=n(9417),l=n(18430),a=n(1),u=n(13783),c=n(67934);let f=()=>{let e=(0,a.GY)(),{data:t}=(0,i.p)(),{account:n}=(0,a.aF)();(0,o.useEffect)(()=>{t&&(e({walletType:l.Sq.EVM,address:t.account.address,chainId:t.chain.id,walletClient:t}),void 0===n&&(0,s.Yz)(c.F.WalletConnected))},[null==t?void 0:t.account.address]);let{data:r,isLoading:f}=(0,u.HF)(null==n?void 0:n.address),{mutateAsync:d}=(0,u.FR)();return(0,o.useEffect)(()=>{(async()=>{(null==n?void 0:n.address)===void 0||null!=r&&r.isRegistered||f||await d({params:{path:{address:null==n?void 0:n.address}}})})()},[null==n?void 0:n.address,null==r?void 0:r.isRegistered]),null},d=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(f,{})});t.default=d},91719:function(e,t,n){n.d(t,{c:function(){return i}});var r=n(54149),o=n(70018);async function i(e,t){let{chainId:n,...i}=t,s=e.getClient({chainId:n});return(0,o.s)(s,r.C,"getBytecode")(i)}},60632:function(e,t,n){n.d(t,{ZP:function(){return s}});let r={"Content-Type":"application/json"},o=/\{[^{}]+\}/g;class i extends Request{constructor(e,t){for(let n in super(e,t),t)n in this||(this[n]=t[n])}}function s(e){let{baseUrl:t="",fetch:n=globalThis.fetch,querySerializer:s,bodySerializer:y,headers:h,...m}={...e};t=p(t),h=d(r,h);let b=[];async function w(e,r){var w;let R,v,j,g;let{baseUrl:E,fetch:$=n,headers:T,params:x={},parseAs:C="json",querySerializer:q,bodySerializer:O=y??f,...A}=r||{};E&&(t=p(E));let I="function"==typeof s?s:c(s);q&&(I="function"==typeof q?q:c({..."object"==typeof s?s:{},...q}));let S={redirect:"follow",...m,...A,headers:d(h,T,x.header)};void 0!==S.body&&(S.body=O(S.body),S.body instanceof FormData&&S.headers.delete("Content-Type"));let P=new i((w={baseUrl:t,params:x,querySerializer:I},j=`${w.baseUrl}${e}`,w.params?.path&&(j=function(e,t){let n=e;for(let r of e.match(o)??[]){let e=r.substring(1,r.length-1),o=!1,i="simple";if(e.endsWith("*")&&(o=!0,e=e.substring(0,e.length-1)),e.startsWith(".")?(i="label",e=e.substring(1)):e.startsWith(";")&&(i="matrix",e=e.substring(1)),!t||void 0===t[e]||null===t[e])continue;let s=t[e];if(Array.isArray(s)){n=n.replace(r,u(e,s,{style:i,explode:o}));continue}if("object"==typeof s){n=n.replace(r,a(e,s,{style:i,explode:o}));continue}if("matrix"===i){n=n.replace(r,`;${l(e,s)}`);continue}n=n.replace(r,"label"===i?`.${encodeURIComponent(s)}`:encodeURIComponent(s))}return n}(j,w.params.path)),(g=w.querySerializer(w.params.query??{})).startsWith("?")&&(g=g.substring(1)),g&&(j+=`?${g}`),j),S);if(b.length){for(let n of(R=Math.random().toString(36).slice(2,11),v=Object.freeze({baseUrl:t,fetch:$,parseAs:C,querySerializer:I,bodySerializer:O}),b))if(n&&"object"==typeof n&&"function"==typeof n.onRequest){let t=await n.onRequest({request:P,schemaPath:e,params:x,options:v,id:R});if(t){if(!(t instanceof Request))throw Error("onRequest: must return new Request() when modifying the request");P=t}}}let U=await $(P);if(b.length)for(let t=b.length-1;t>=0;t--){let n=b[t];if(n&&"object"==typeof n&&"function"==typeof n.onResponse){let t=await n.onResponse({request:P,response:U,schemaPath:e,params:x,options:v,id:R});if(t){if(!(t instanceof Response))throw Error("onResponse: must return new Response() when modifying the response");U=t}}}if(204===U.status||"0"===U.headers.get("Content-Length"))return U.ok?{data:{},response:U}:{error:{},response:U};if(U.ok)return"stream"===C?{data:U.body,response:U}:{data:await U[C](),response:U};let N=await U.text();try{N=JSON.parse(N)}catch{}return{error:N,response:U}}return{GET:(e,t)=>w(e,{...t,method:"GET"}),PUT:(e,t)=>w(e,{...t,method:"PUT"}),POST:(e,t)=>w(e,{...t,method:"POST"}),DELETE:(e,t)=>w(e,{...t,method:"DELETE"}),OPTIONS:(e,t)=>w(e,{...t,method:"OPTIONS"}),HEAD:(e,t)=>w(e,{...t,method:"HEAD"}),PATCH:(e,t)=>w(e,{...t,method:"PATCH"}),TRACE:(e,t)=>w(e,{...t,method:"TRACE"}),use(...e){for(let t of e)if(t){if("object"!=typeof t||!("onRequest"in t||"onResponse"in t))throw Error("Middleware must be an object with one of `onRequest()` or `onResponse()`");b.push(t)}},eject(...e){for(let t of e){let e=b.indexOf(t);-1!==e&&b.splice(e,1)}}}}function l(e,t,n){if(null==t)return"";if("object"==typeof t)throw Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");return`${e}=${n?.allowReserved===!0?t:encodeURIComponent(t)}`}function a(e,t,n){if(!t||"object"!=typeof t)return"";let r=[],o={simple:",",label:".",matrix:";"}[n.style]||"&";if("deepObject"!==n.style&&!1===n.explode){for(let e in t)r.push(e,!0===n.allowReserved?t[e]:encodeURIComponent(t[e]));let o=r.join(",");switch(n.style){case"form":return`${e}=${o}`;case"label":return`.${o}`;case"matrix":return`;${e}=${o}`;default:return o}}for(let o in t){let i="deepObject"===n.style?`${e}[${o}]`:o;r.push(l(i,t[o],n))}let i=r.join(o);return"label"===n.style||"matrix"===n.style?`${o}${i}`:i}function u(e,t,n){if(!Array.isArray(t))return"";if(!1===n.explode){let r={form:",",spaceDelimited:"%20",pipeDelimited:"|"}[n.style]||",",o=(!0===n.allowReserved?t:t.map(e=>encodeURIComponent(e))).join(r);switch(n.style){case"simple":return o;case"label":return`.${o}`;case"matrix":return`;${e}=${o}`;default:return`${e}=${o}`}}let r={simple:",",label:".",matrix:";"}[n.style]||"&",o=[];for(let r of t)"simple"===n.style||"label"===n.style?o.push(!0===n.allowReserved?r:encodeURIComponent(r)):o.push(l(e,r,n));return"label"===n.style||"matrix"===n.style?`${r}${o.join(r)}`:o.join(r)}function c(e){return function(t){let n=[];if(t&&"object"==typeof t)for(let r in t){let o=t[r];if(null!=o){if(Array.isArray(o)){n.push(u(r,o,{style:"form",explode:!0,...e?.array,allowReserved:e?.allowReserved||!1}));continue}if("object"==typeof o){n.push(a(r,o,{style:"deepObject",explode:!0,...e?.object,allowReserved:e?.allowReserved||!1}));continue}n.push(l(r,o,e))}}return n.join("&")}}function f(e){return e instanceof FormData?e:JSON.stringify(e)}function d(...e){let t=new Headers;for(let n of e)if(n&&"object"==typeof n)for(let[e,r]of n instanceof Headers?n.entries():Object.entries(n))if(null===r)t.delete(e);else if(Array.isArray(r))for(let n of r)t.append(e,n);else void 0!==r&&t.set(e,r);return t}function p(e){return e.endsWith("/")?e.substring(0,e.length-1):e}},13787:function(e,t,n){n.d(t,{p:function(){return p}});var r=n(14010),o=n(79120),i=n(57727);async function s(e,t={}){let n=await (0,i.e)(e,t);return n.extend(o.v),n.extend(o.v)}var l=n(35775),a=n(2784),u=n(91436),c=n(45627),f=n(75422),d=n(39929);function p(e={}){let{query:t={},...n}=e,o=(0,d.Z)(n),i=(0,r.NL)(),{address:p,connector:y,status:h}=(0,c.m)({config:o}),m=(0,f.x)({config:o}),{queryKey:b,...w}=function(e,t={}){return{gcTime:0,async queryFn({queryKey:n}){let{connector:r}=t,{connectorUid:o,scopeKey:i,...l}=n[1];return s(e,{...l,connector:r})},queryKey:function(e={}){let{connector:t,...n}=e;return["walletClient",{...(0,l.OP)(n),connectorUid:t?.uid}]}(t)}}(o,{...e,chainId:e.chainId??m,connector:e.connector??y}),R=!!("disconnected"!==h&&(t.enabled??!0)),v=(0,a.useRef)(p);return(0,a.useEffect)(()=>{let e=v.current;!p&&e?(i.removeQueries({queryKey:b}),v.current=void 0):p!==e&&(i.invalidateQueries({queryKey:b}),v.current=p)},[p,i]),(0,u.aM)({...t,...w,queryKey:b,enabled:R,staleTime:Number.POSITIVE_INFINITY})}}}]);