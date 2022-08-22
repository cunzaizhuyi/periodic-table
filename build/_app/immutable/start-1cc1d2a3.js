var ze=Object.defineProperty;var qe=(r,e,n)=>e in r?ze(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var le=(r,e,n)=>(qe(r,typeof e!="symbol"?e+"":e,n),n);import{S as Be,i as Ke,s as Je,a as We,e as j,c as He,b as V,g as H,t as I,d as F,f as N,h as D,j as Fe,k as Ge,o as pe,l as Ye,m as Me,n as Xe,p as fe,q as K,r as Ze,u as Qe,v as xe,w as z,x as Q,y as q,z as B,A as Se}from"./chunks/index-9c8b8991.js";import{w as me}from"./chunks/index-32e55b05.js";class te{constructor(e,n){le(this,"name","HttpError");le(this,"stack");this.status=e,this.message=n!=null?n:`Error: ${e}`}toString(){return this.message}}class Ue{constructor(e,n){this.status=e,this.location=n}}function et(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function tt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}class nt extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}let Ae="",De="";function rt(r){Ae=r.base,De=r.assets||Ae}function Oe(r){let e=r.baseURI;if(!e){const n=r.getElementsByTagName("base");e=n.length?n[0].href:r.URL}return e}function he(){return{x:pageXOffset,y:pageYOffset}}function Pe(r){return r.composedPath().find(n=>n instanceof Node&&n.nodeName.toUpperCase()==="A")}function je(r){return r instanceof SVGAElement?new URL(r.href.baseVal,document.baseURI):new URL(r.href)}function Ie(r){const e=me(r);let n=!0;function s(){n=!0,e.update(t=>t)}function a(t){n=!1,e.set(t)}function f(t){let i;return e.subscribe(l=>{(i===void 0||n&&l!==i)&&t(i=l)})}return{notify:s,set:a,subscribe:f}}function at(){const{set:r,subscribe:e}=me(!1);let n;async function s(){clearTimeout(n);const a=await fetch(`${De}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:f}=await a.json(),t=f!=="1661183070816";return t&&(r(!0),clearTimeout(n)),t}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:e,check:s}}function st(r){let e=5381,n=r.length;if(typeof r=="string")for(;n;)e=e*33^r.charCodeAt(--n);else for(;n;)e=e*33^r[--n];return(e>>>0).toString(36)}const _e=window.fetch;function it(r,e){let s=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;e&&typeof e.body=="string"&&(s+=`[sveltekit\\:data-body="${st(e.body)}"]`);const a=document.querySelector(s);if(a&&a.textContent){const{body:f,...t}=JSON.parse(a.textContent);return Promise.resolve(new Response(f,t))}return _e(r,e)}const ot=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function ct(r){const e=[],n=[];let s=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${decodeURIComponent(r).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((f,t,i)=>{const l=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(l)return e.push(l[1]),n.push(l[2]),"(?:/(.*))?";const h=t===i.length-1;return f&&"/"+f.split(/\[(.+?)\]/).map((m,L)=>{if(L%2){const U=ot.exec(m);if(!U)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,J,O]=U;return e.push(J),n.push(O),E?"(.*?)":"([^/]+?)"}return h&&m.includes(".")&&(s=!1),m.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${s?"/?":""}$`),names:e,types:n}}function lt(r,e,n,s){const a={};for(let f=0;f<e.length;f+=1){const t=e[f],i=n[f],l=r[f+1]||"";if(i){const h=s[i];if(!h)throw new Error(`Missing "${i}" param matcher`);if(!h(l))return}a[t]=l}return a}function ft(r,e,n){return Object.entries(e).map(([s,[a,f,t,i]])=>{const{pattern:l,names:h,types:m}=ct(s),L={id:s,exec:U=>{const E=l.exec(U);if(E)return lt(E,h,m,n)},errors:a.map(U=>r[U]),layouts:f.map(U=>r[U]),leaf:r[t],uses_server_data:!!i};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L})}function ut(r,e){return new te(r,e)}function dt(r){let e,n,s;var a=r[0][0];function f(t){return{props:{data:t[1],errors:t[4]}}}return a&&(e=new a(f(r))),{c(){e&&z(e.$$.fragment),n=j()},l(t){e&&Q(e.$$.fragment,t),n=j()},m(t,i){e&&q(e,t,i),V(t,n,i),s=!0},p(t,i){const l={};if(i&2&&(l.data=t[1]),i&16&&(l.errors=t[4]),a!==(a=t[0][0])){if(e){H();const h=e;I(h.$$.fragment,1,0,()=>{B(h,1)}),F()}a?(e=new a(f(t)),z(e.$$.fragment),N(e.$$.fragment,1),q(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&N(e.$$.fragment,t),s=!0)},o(t){e&&I(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function pt(r){let e,n,s;var a=r[0][0];function f(t){return{props:{data:t[1],$$slots:{default:[gt]},$$scope:{ctx:t}}}}return a&&(e=new a(f(r))),{c(){e&&z(e.$$.fragment),n=j()},l(t){e&&Q(e.$$.fragment,t),n=j()},m(t,i){e&&q(e,t,i),V(t,n,i),s=!0},p(t,i){const l={};if(i&2&&(l.data=t[1]),i&1053&&(l.$$scope={dirty:i,ctx:t}),a!==(a=t[0][0])){if(e){H();const h=e;I(h.$$.fragment,1,0,()=>{B(h,1)}),F()}a?(e=new a(f(t)),z(e.$$.fragment),N(e.$$.fragment,1),q(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&N(e.$$.fragment,t),s=!0)},o(t){e&&I(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function ht(r){let e,n,s;var a=r[0][1];function f(t){return{props:{data:t[2],errors:t[4]}}}return a&&(e=new a(f(r))),{c(){e&&z(e.$$.fragment),n=j()},l(t){e&&Q(e.$$.fragment,t),n=j()},m(t,i){e&&q(e,t,i),V(t,n,i),s=!0},p(t,i){const l={};if(i&4&&(l.data=t[2]),i&16&&(l.errors=t[4]),a!==(a=t[0][1])){if(e){H();const h=e;I(h.$$.fragment,1,0,()=>{B(h,1)}),F()}a?(e=new a(f(t)),z(e.$$.fragment),N(e.$$.fragment,1),q(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&N(e.$$.fragment,t),s=!0)},o(t){e&&I(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function _t(r){let e,n,s;var a=r[0][1];function f(t){return{props:{data:t[2],$$slots:{default:[mt]},$$scope:{ctx:t}}}}return a&&(e=new a(f(r))),{c(){e&&z(e.$$.fragment),n=j()},l(t){e&&Q(e.$$.fragment,t),n=j()},m(t,i){e&&q(e,t,i),V(t,n,i),s=!0},p(t,i){const l={};if(i&4&&(l.data=t[2]),i&1033&&(l.$$scope={dirty:i,ctx:t}),a!==(a=t[0][1])){if(e){H();const h=e;I(h.$$.fragment,1,0,()=>{B(h,1)}),F()}a?(e=new a(f(t)),z(e.$$.fragment),N(e.$$.fragment,1),q(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&N(e.$$.fragment,t),s=!0)},o(t){e&&I(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function mt(r){let e,n,s;var a=r[0][2];function f(t){return{props:{data:t[3]}}}return a&&(e=new a(f(r))),{c(){e&&z(e.$$.fragment),n=j()},l(t){e&&Q(e.$$.fragment,t),n=j()},m(t,i){e&&q(e,t,i),V(t,n,i),s=!0},p(t,i){const l={};if(i&8&&(l.data=t[3]),a!==(a=t[0][2])){if(e){H();const h=e;I(h.$$.fragment,1,0,()=>{B(h,1)}),F()}a?(e=new a(f(t)),z(e.$$.fragment),N(e.$$.fragment,1),q(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&N(e.$$.fragment,t),s=!0)},o(t){e&&I(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function gt(r){let e,n,s,a;const f=[_t,ht],t=[];function i(l,h){return l[0][2]?0:1}return e=i(r),n=t[e]=f[e](r),{c(){n.c(),s=j()},l(l){n.l(l),s=j()},m(l,h){t[e].m(l,h),V(l,s,h),a=!0},p(l,h){let m=e;e=i(l),e===m?t[e].p(l,h):(H(),I(t[m],1,1,()=>{t[m]=null}),F(),n=t[e],n?n.p(l,h):(n=t[e]=f[e](l),n.c()),N(n,1),n.m(s.parentNode,s))},i(l){a||(N(n),a=!0)},o(l){I(n),a=!1},d(l){t[e].d(l),l&&D(s)}}}function Ne(r){let e,n=r[6]&&Te(r);return{c(){e=Ye("div"),n&&n.c(),this.h()},l(s){e=Me(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=Xe(e);n&&n.l(a),a.forEach(D),this.h()},h(){fe(e,"id","svelte-announcer"),fe(e,"aria-live","assertive"),fe(e,"aria-atomic","true"),K(e,"position","absolute"),K(e,"left","0"),K(e,"top","0"),K(e,"clip","rect(0 0 0 0)"),K(e,"clip-path","inset(50%)"),K(e,"overflow","hidden"),K(e,"white-space","nowrap"),K(e,"width","1px"),K(e,"height","1px")},m(s,a){V(s,e,a),n&&n.m(e,null)},p(s,a){s[6]?n?n.p(s,a):(n=Te(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&D(e),n&&n.d()}}}function Te(r){let e;return{c(){e=Ze(r[7])},l(n){e=Qe(n,r[7])},m(n,s){V(n,e,s)},p(n,s){s&128&&xe(e,n[7])},d(n){n&&D(e)}}}function wt(r){let e,n,s,a,f;const t=[pt,dt],i=[];function l(m,L){return m[0][1]?0:1}e=l(r),n=i[e]=t[e](r);let h=r[5]&&Ne(r);return{c(){n.c(),s=We(),h&&h.c(),a=j()},l(m){n.l(m),s=He(m),h&&h.l(m),a=j()},m(m,L){i[e].m(m,L),V(m,s,L),h&&h.m(m,L),V(m,a,L),f=!0},p(m,[L]){let U=e;e=l(m),e===U?i[e].p(m,L):(H(),I(i[U],1,1,()=>{i[U]=null}),F(),n=i[e],n?n.p(m,L):(n=i[e]=t[e](m),n.c()),N(n,1),n.m(s.parentNode,s)),m[5]?h?h.p(m,L):(h=Ne(m),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null)},i(m){f||(N(n),f=!0)},o(m){I(n),f=!1},d(m){i[e].d(m),m&&D(s),h&&h.d(m),m&&D(a)}}}function bt(r,e,n){let{stores:s}=e,{page:a}=e,{components:f}=e,{data_0:t=null}=e,{data_1:i=null}=e,{data_2:l=null}=e,{errors:h}=e;Fe("__svelte__",s),Ge(s.page.notify);let m=!1,L=!1,U=null;return pe(()=>{const E=s.page.subscribe(()=>{m&&(n(6,L=!0),n(7,U=document.title||"untitled page"))});return n(5,m=!0),E}),r.$$set=E=>{"stores"in E&&n(8,s=E.stores),"page"in E&&n(9,a=E.page),"components"in E&&n(0,f=E.components),"data_0"in E&&n(1,t=E.data_0),"data_1"in E&&n(2,i=E.data_1),"data_2"in E&&n(3,l=E.data_2),"errors"in E&&n(4,h=E.errors)},r.$$.update=()=>{r.$$.dirty&768&&s.page.set(a)},[f,t,i,l,h,m,L,U,s,a]}class vt extends Be{constructor(e){super(),Ke(this,e,bt,wt,Je,{stores:8,page:9,components:0,data_0:1,data_1:2,data_2:3,errors:4})}}const yt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),kt=function(r){return"https://cunzaizhuyi.github.io/periodic-table/build/"+r},Ce={},Y=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(a=>{if(a=kt(a),a in Ce)return;Ce[a]=!0;const f=a.endsWith(".css"),t=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const i=document.createElement("link");if(i.rel=f?"stylesheet":yt,f||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),f)return new Promise((l,h)=>{i.addEventListener("load",l),i.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())},$t={},ne=[()=>Y(()=>import("./chunks/0-71c79c09.js"),["_app/immutable/chunks/0-71c79c09.js","_app/immutable/assets/app-c465f6d6.css","_app/immutable/components/pages/_layout.svelte-4e280d4e.js","_app/immutable/assets/+layout-6166e364.css","_app/immutable/chunks/index-9c8b8991.js","_app/immutable/chunks/stores-bde0da53.js"]),()=>Y(()=>import("./chunks/1-9102cf7d.js"),["_app/immutable/chunks/1-9102cf7d.js","_app/immutable/components/pages/_error.svelte-c111cff8.js","_app/immutable/assets/+error-fe1f4243.css","_app/immutable/chunks/index-9c8b8991.js","_app/immutable/chunks/stores-bde0da53.js"]),()=>Y(()=>import("./chunks/2-f363f0a8.js"),["_app/immutable/chunks/2-f363f0a8.js","_app/immutable/assets/app-c465f6d6.css","_app/immutable/components/pages/_page.svelte-72a64f4c.js","_app/immutable/assets/+page-2f0e7483.css","_app/immutable/chunks/index-9c8b8991.js","_app/immutable/chunks/PropertySelect-10713e44.js","_app/immutable/assets/PropertySelect-7072618f.css","_app/immutable/chunks/BohrAtom-7a057de5.js","_app/immutable/assets/BohrAtom-ba5dd8cd.css","_app/immutable/chunks/index-32e55b05.js"]),()=>Y(()=>import("./chunks/3-7c468032.js"),["_app/immutable/chunks/3-7c468032.js","_app/immutable/components/pages/_slug_/_page.svelte-8c2cb8f3.js","_app/immutable/assets/+page-fa9db392.css","_app/immutable/chunks/index-9c8b8991.js","_app/immutable/chunks/BohrAtom-7a057de5.js","_app/immutable/assets/BohrAtom-ba5dd8cd.css","_app/immutable/chunks/PropertySelect-10713e44.js","_app/immutable/assets/PropertySelect-7072618f.css","_app/immutable/chunks/index-32e55b05.js"]),()=>Y(()=>import("./chunks/4-ca043125.js"),["_app/immutable/chunks/4-ca043125.js","_app/immutable/components/pages/acknowledgements/_page.svx-9ef26e08.js","_app/immutable/assets/+page-bc5dc60f.css","_app/immutable/chunks/index-9c8b8991.js"]),()=>Y(()=>import("./chunks/5-91c97e53.js"),["_app/immutable/chunks/5-91c97e53.js","_app/immutable/components/pages/bohr-atoms/_page.svelte-4736ee25.js","_app/immutable/assets/+page-ce1bdcd8.css","_app/immutable/chunks/index-9c8b8991.js","_app/immutable/chunks/BohrAtom-7a057de5.js","_app/immutable/assets/BohrAtom-ba5dd8cd.css"])],Et={"":[[1],[0],2],acknowledgements:[[1],[0],4],"bohr-atoms":[[1],[0],5],"[slug]":[[1],[0],3,1]},Ve="sveltekit:scroll",W="sveltekit:index",ue=ft(ne,Et,$t),Rt=ne[0](),Lt=ne[1]();let Z={};try{Z=JSON.parse(sessionStorage[Ve])}catch{}function de(r){Z[r]=he()}function St({target:r,base:e,trailing_slash:n}){var Ee;const s=[],a={url:Ie({}),page:Ie({}),navigating:me(null),updated:at()},f={id:null,promise:null},t={before_navigate:[],after_navigate:[]};let i={branch:[],error:null,session_id:0,url:null},l=!1,h=!0,m=!1,L=1,U=null,E,J=!0,O=(Ee=history.state)==null?void 0:Ee[W];O||(O=Date.now(),history.replaceState({...history.state,[W]:O},"",location.href));const re=Z[O];re&&(history.scrollRestoration="manual",scrollTo(re.x,re.y));let ae=!1,se,ge;async function we(o,{noscroll:p=!1,replaceState:g=!1,keepfocus:c=!1,state:u={}},$){if(typeof o=="string"&&(o=new URL(o,Oe(document))),J)return oe({url:o,scroll:p?he():null,keepfocus:c,redirect_chain:$,details:{state:u,replaceState:g},accepted:()=>{},blocked:()=>{}});await M(o)}async function be(o){const p=$e(o);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return f.promise=ke(p),f.id=p.id,f.promise}async function ve(o,p,g,c){var b,A,S;const u=$e(o),$=ge={};let _=u&&await ke(u);if(!_&&o.origin===location.origin&&o.pathname===location.pathname&&(_=await ee({status:404,error:new Error(`Not found: ${o.pathname}`),url:o,routeId:null})),!_)return await M(o),!1;if(o=(u==null?void 0:u.url)||o,ge!==$)return!1;if(s.length=0,_.type==="redirect")if(p.length>10||p.includes(o.pathname))_=await ee({status:500,error:new Error("Redirect loop"),url:o,routeId:null});else return J?we(new URL(_.location,o).href,{},[...p,o.pathname]):await M(new URL(_.location,location.href)),!1;else((A=(b=_.props)==null?void 0:b.page)==null?void 0:A.status)>=400&&await a.updated.check()&&await M(o);if(m=!0,g&&g.details){const{details:R}=g,v=R.replaceState?0:1;R.state[W]=O+=v,history[R.replaceState?"replaceState":"pushState"](R.state,"",o)}if(l?(i=_.state,_.props.page&&(_.props.page.url=o),E.$set(_.props)):ye(_),g){const{scroll:R,keepfocus:v}=g;if(!v){const w=document.body,d=w.getAttribute("tabindex");w.tabIndex=-1,w.focus({preventScroll:!0}),setTimeout(()=>{var y;(y=getSelection())==null||y.removeAllRanges()}),d!==null?w.setAttribute("tabindex",d):w.removeAttribute("tabindex")}if(await Se(),h){const w=o.hash&&document.getElementById(o.hash.slice(1));R?scrollTo(R.x,R.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Se();f.promise=null,f.id=null,h=!0,_.props.page&&(se=_.props.page);const k=_.state.branch.at(-1);J=((S=k==null?void 0:k.node.shared)==null?void 0:S.router)!==!1,c&&c(),m=!1}function ye(o){i=o.state;const p=document.querySelector("style[data-sveltekit]");if(p&&p.remove(),se=o.props.page,E=new vt({target:r,props:{...o.props,stores:a},hydrate:!0}),J){const g={from:null,to:new URL(location.href)};t.after_navigate.forEach(c=>c(g))}l=!0}async function x({url:o,params:p,branch:g,status:c,error:u,routeId:$,validation_errors:_}){const k=g.filter(Boolean),b={type:"loaded",state:{url:o,params:p,branch:g,error:u,session_id:L},props:{components:k.map(v=>v.node.component),errors:_}};let A={},S=!1;for(let v=0;v<k.length;v+=1)Object.assign(A,k[v].data),i.branch.some(w=>w===k[v])||(b.props[`data_${v}`]=k[v].data,S=!0);if(!i.url||o.href!==i.url.href||i.error!==u||S){b.props.page={error:u,params:p,routeId:$,status:c,url:o,data:A};const v=(w,d)=>{Object.defineProperty(b.props.page,w,{get:()=>{throw new Error(`$page.${w} has been replaced by $page.url.${d}`)}})};v("origin","origin"),v("path","pathname"),v("query","searchParams")}return b}async function ie({node:o,parent:p,url:g,params:c,routeId:u,server_data:$}){var R,v;const _={params:new Set,url:!1,dependencies:new Set,parent:!1};function k(...w){for(const d of w){const{href:y}=new URL(d,g);_.dependencies.add(y)}}let b=null;o.server&&(_.dependencies.add(g.href),_.url=!0);const A={};for(const w in c)Object.defineProperty(A,w,{get(){return _.params.add(w),c[w]},enumerable:!0});const S=new nt(g);if((R=o.shared)!=null&&R.load){const w={routeId:u,params:A,data:$,get url(){return _.url=!0,S},async fetch(d,y){let P;typeof d=="string"?P=d:(P=d.url,y={body:d.method==="GET"||d.method==="HEAD"?void 0:await d.blob(),cache:d.cache,credentials:d.credentials,headers:d.headers,integrity:d.integrity,keepalive:d.keepalive,method:d.method,mode:d.mode,redirect:d.redirect,referrer:d.referrer,referrerPolicy:d.referrerPolicy,signal:d.signal,...y});const T=new URL(P,g).href;return k(T),l?_e(T,y):it(P,y)},setHeaders:()=>{},depends:k,get parent(){return _.parent=!0,p},get props(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},get session(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},get stuff(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")}};b=(v=await o.shared.load.call(null,w))!=null?v:null}return{node:o,data:b||$,uses:_}}async function ke({id:o,url:p,params:g,route:c}){if(f.id===o&&f.promise)return f.promise;const{errors:u,layouts:$,leaf:_}=c,k=i.url&&{url:o!==i.url.pathname+i.url.search,params:Object.keys(g).filter(d=>i.params[d]!==g[d])};[...u,...$,_].forEach(d=>d==null?void 0:d().catch(()=>{}));const b=[...$,_],A=[];for(let d=0;d<b.length;d++)if(!b[d])A.push(!1);else{const y=i.branch[d],P=!y||k.url&&y.uses.url||k.params.some(T=>y.uses.params.has(T))||Array.from(y.uses.dependencies).some(T=>s.some(X=>X(T)))||y.uses.parent&&A.includes(!0);A.push(P)}let S=null;if(c.uses_server_data){try{const d=await _e(`${p.pathname}${p.pathname.endsWith("/")?"":"/"}__data.json${p.search}`);if(S=await d.json(),!d.ok)throw S}catch{throw new Error("TODO render fallback error page")}if(S.type==="redirect")return S}const R=S==null?void 0:S.nodes,v=b.map(async(d,y)=>Promise.resolve().then(async()=>{var G;if(!d)return;const P=await d(),T=i.branch[y];if(A[y]||!T||P!==T.node){const C=R==null?void 0:R[y];if(C!=null&&C.status)throw ut(C.status,C.message);if(C!=null&&C.error)throw C.error;return await ie({node:P,url:p,params:g,routeId:c.id,parent:async()=>{var Le;const Re={};for(let ce=0;ce<y;ce+=1)Object.assign(Re,(Le=await v[ce])==null?void 0:Le.data);return Re},server_data:(G=C==null?void 0:C.data)!=null?G:null})}else return T}));for(const d of v)d.catch(()=>{});const w=[];for(let d=0;d<b.length;d+=1)if(b[d])try{w.push(await v[d])}catch(y){const P=y;if(P instanceof Ue)return{type:"redirect",location:P.location};const T=y instanceof te?y.status:500;for(;d--;)if(u[d]){let X,G=d;for(;!w[G];)G-=1;try{return X={node:await u[d](),data:{},uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}},await x({url:p,params:g,branch:w.slice(0,G+1).concat(X),status:T,error:P,routeId:c.id})}catch{continue}}return await ee({status:T,error:P,url:p,routeId:c.id})}else w.push(void 0);return await x({url:p,params:g,branch:w,status:200,error:null,routeId:c.id})}async function ee({status:o,error:p,url:g,routeId:c}){const u={},$=await ie({node:await Rt,url:g,params:u,routeId:c,parent:()=>Promise.resolve({}),server_data:null}),_={node:await Lt,data:null,uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}};return await x({url:g,params:u,branch:[$,_],status:o,error:p,routeId:c})}function $e(o){if(o.origin!==location.origin||!o.pathname.startsWith(e))return;const p=decodeURI(o.pathname.slice(e.length)||"/");for(const g of ue){const c=g.exec(p);if(c){const u=new URL(o.origin+et(o.pathname,n)+o.search+o.hash);return{id:u.pathname+u.search,route:g,params:tt(c),url:u}}}}async function oe({url:o,scroll:p,keepfocus:g,redirect_chain:c,details:u,accepted:$,blocked:_}){const k=i.url;let b=!1;const A={from:k,to:o,cancel:()=>b=!0};if(t.before_navigate.forEach(S=>S(A)),b){_();return}de(O),$(),l&&a.navigating.set({from:i.url,to:o}),await ve(o,c,{scroll:p,keepfocus:g,details:u},()=>{const S={from:k,to:o};t.after_navigate.forEach(R=>R(S)),a.navigating.set(null)})}function M(o){return location.href=o.href,new Promise(()=>{})}return{after_navigate:o=>{pe(()=>(t.after_navigate.push(o),()=>{const p=t.after_navigate.indexOf(o);t.after_navigate.splice(p,1)}))},before_navigate:o=>{pe(()=>(t.before_navigate.push(o),()=>{const p=t.before_navigate.indexOf(o);t.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(m||!l)&&(h=!1)},goto:(o,p={})=>we(o,p,[]),invalidate:o=>{if(o===void 0){for(const p of i.branch)p==null||p.uses.dependencies.add("");s.push(()=>!0)}else if(typeof o=="function")s.push(o);else{const{href:p}=new URL(o,location.href);s.push(g=>g===p)}return U||(U=Promise.resolve().then(async()=>{await ve(new URL(location.href),[]),U=null})),U},prefetch:async o=>{const p=new URL(o,Oe(document));await be(p)},prefetch_routes:async o=>{const g=(o?ue.filter(c=>o.some(u=>c.exec(u))):ue).map(c=>Promise.all([...c.layouts,c.leaf].map(u=>u==null?void 0:u())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",c=>{let u=!1;const $={from:i.url,to:null,cancel:()=>u=!0};t.before_navigate.forEach(_=>_($)),u?(c.preventDefault(),c.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){de(O);try{sessionStorage[Ve]=JSON.stringify(Z)}catch{}}});const o=c=>{const u=Pe(c);u&&u.href&&u.hasAttribute("sveltekit:prefetch")&&be(je(u))};let p;const g=c=>{clearTimeout(p),p=setTimeout(()=>{var u;(u=c.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",o),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",o),addEventListener("click",c=>{if(!J||c.button||c.which!==1||c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.defaultPrevented)return;const u=Pe(c);if(!u||!u.href)return;const $=u instanceof SVGAElement,_=je(u);if(!$&&!(_.protocol==="https:"||_.protocol==="http:"))return;const k=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||k.includes("external")||u.hasAttribute("sveltekit:reload")||($?u.target.baseVal:u.target))return;const[b,A]=_.href.split("#");if(A!==void 0&&b===location.href.split("#")[0]){ae=!0,de(O),a.page.set({...se,url:_}),a.page.notify();return}oe({url:_,scroll:u.hasAttribute("sveltekit:noscroll")?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>c.preventDefault(),blocked:()=>c.preventDefault()})}),addEventListener("popstate",c=>{if(c.state&&J){if(c.state[W]===O)return;oe({url:new URL(location.href),scroll:Z[c.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=c.state[W]},blocked:()=>{const u=O-c.state[W];history.go(u)}})}}),addEventListener("hashchange",()=>{ae&&(ae=!1,history.replaceState({...history.state,[W]:++O},"",location.href))});for(const c of document.querySelectorAll("link"))c.rel==="icon"&&(c.href=c.href);addEventListener("pageshow",c=>{c.persisted&&a.navigating.set(null)})},_hydrate:async({status:o,error:p,node_ids:g,params:c,routeId:u})=>{const $=new URL(location.href);let _;try{const k=(R,v)=>{const w=document.querySelector(`script[sveltekit\\:data-type="${R}"]`);return w!=null&&w.textContent?JSON.parse(w.textContent):v},b=k("server_data",[]),A=k("validation_errors",void 0),S=g.map(async(R,v)=>{var w;return ie({node:await ne[R](),url:$,params:c,routeId:u,parent:async()=>{const d={};for(let y=0;y<v;y+=1)Object.assign(d,(await S[y]).data);return d},server_data:(w=b[v])!=null?w:null})});_=await x({url:$,params:c,branch:await Promise.all(S),status:o,error:p!=null&&p.__is_http_error?new te(p.status,p.message):p,validation_errors:A,routeId:u})}catch(k){const b=k;if(b instanceof Ue){await M(new URL(k.location,location.href));return}_=await ee({status:b instanceof te?b.status:500,error:b,url:$,routeId:u})}ye(_)}}}function Ut(r){r.client}function jt(r){}async function It({paths:r,target:e,route:n,spa:s,trailing_slash:a,hydrate:f}){const t=St({target:e,base:r.base,trailing_slash:a});Ut({client:t}),rt(r),f&&await t._hydrate(f),n&&(s&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{jt as set_public_env,It as start};
