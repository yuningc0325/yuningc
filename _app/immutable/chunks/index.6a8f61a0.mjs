function g(){}const ct=t=>t;function lt(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function I(){return Object.create(null)}function v(t){t.forEach(W)}function T(t){return typeof t=="function"}function qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Rt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function ut(t){return Object.keys(t).length===0}function at(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zt(t,e,n){t.$$.on_destroy.push(at(e,n))}function Bt(t,e,n,r){if(t){const i=U(t,e,n,r);return t[0](i)}}function U(t,e,n,r){return t[1]&&r?lt(n.ctx.slice(),t[1](r(e))):n.ctx}function Ht(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],s=Math.max(e.dirty.length,i.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|i[o];return l}return e.dirty|i}return e.dirty}function Ft(t,e,n,r,i,l){if(i){const s=U(e,n,r,l);t.p(s,i)}}function Lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Gt(t){return t&&T(t.destroy)?t.destroy:g}const V=typeof window<"u";let ft=V?()=>window.performance.now():()=>Date.now(),F=V?t=>requestAnimationFrame(t):g;const w=new Set;function X(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&F(X)}function _t(t){let e;return w.size===0&&F(X),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let O=!1;function dt(){O=!0}function ht(){O=!1}function mt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(i>0&&e[n[i]].claim_order<=u?i+1:mt(1,i,h=>e[n[h]].claim_order,u))-1;r[c]=n[_]+1;const a=_+1;n[a]=c,i=Math.max(a,i)}const l=[],s=[];let o=e.length-1;for(let c=n[i]+1;c!=0;c=r[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(s[c],_)}}function yt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=tt("style");return xt(Y(t),e),e.sheet}function xt(t,e){return yt(t.head||t,e),e.sheet}function bt(t,e){if(O){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){O&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function Jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function Kt(){return L(" ")}function Qt(){return L("")}function Wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,r,i=!1){wt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,i||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,i?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function vt(t,e,n,r){return et(t,i=>i.nodeName===e,i=>{const l=[];for(let s=0;s<i.attributes.length;s++){const o=i.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>i.removeAttribute(s))},()=>r(e))}function Ut(t,e,n){return vt(t,e,n,tt)}function Et(t,e){return et(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>L(e),!0)}function Vt(t){return Et(t," ")}function Xt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Yt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function nt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function Zt(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const l=i.textContent.trim();l===`HEAD_${t}_END`?(r-=1,n.push(i)):l===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function te(t,e){return new t(e)}const D=new Map;let M=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:gt(e),rules:{}};return D.set(t,n),n}function J(t,e,n,r,i,l,s,o=0){const c=16.666/r;let u=`{
`;for(let y=0;y<=1;y+=c){const x=e+(n-e)*l(y);u+=y*100+`%{${s(x,1-x)}}
`}const _=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Nt(_)}_${o}`,h=Y(t),{stylesheet:f,rules:d}=D.get(h)||At(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${r}ms linear ${i}ms 1 both`,M+=1,a}function Ct(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),M-=i,M||St())}function St(){F(()=>{M||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Z(e)}),D.clear())})}let A;function N(t){A=t}function G(){if(!A)throw new Error("Function called outside component initialization");return A}function ee(t){G().$$.on_mount.push(t)}function ne(t){G().$$.after_update.push(t)}function ie(){const t=G();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const l=nt(e,n,{cancelable:r});return i.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}const $=[],K=[],k=[],Q=[],it=Promise.resolve();let H=!1;function rt(){H||(H=!0,it.then(st))}function re(){return rt(),it}function P(t){k.push(t)}const z=new Set;let b=0;function st(){if(b!==0)return;const t=A;do{try{for(;b<$.length;){const e=$[b];b++,N(e),kt(e.$$)}}catch(e){throw $.length=0,b=0,e}for(N(null),$.length=0,b=0;K.length;)K.pop()();for(let e=0;e<k.length;e+=1){const n=k[e];z.has(n)||(z.add(n),n())}k.length=0}while($.length);for(;Q.length;)Q.pop()();H=!1,z.clear(),N(t)}function kt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}let E;function jt(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function B(t,e,n){t.dispatchEvent(nt(`${e?"intro":"outro"}${n}`))}const j=new Set;let p;function se(){p={r:0,c:[],p}}function oe(){p.r||v(p.c),p=p.p}function Dt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function ce(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),p.c.push(()=>{j.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Mt={duration:0};function le(t,e,n,r){const i={direction:"both"};let l=e(t,n,i),s=r?0:1,o=null,c=null,u=null;function _(){u&&Ct(t,u)}function a(f,d){const m=f.b-s;return d*=Math.abs(m),{a:s,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:y=ct,tick:x=g,css:q}=l||Mt,R={start:ft()+d,b:f};f||(R.group=p,p.r+=1),o||c?c=R:(q&&(_(),u=J(t,s,f,m,d,y,q)),f&&x(0,1),o=a(R,m),P(()=>B(t,f,"start")),_t(C=>{if(c&&C>c.start&&(o=a(c,m),c=null,B(t,o.b,"start"),q&&(_(),u=J(t,s,o.b,o.duration,0,y,l.css))),o){if(C>=o.end)x(s=o.b,1-s),B(t,o.b,"end"),c||(o.b?_():--o.group.r||v(o.group.c)),o=null;else if(C>=o.start){const ot=C-o.start;s=o.a+o.d*y(ot/o.duration),x(s,1-s)}}return!!(o||c)}))}return{run(f){T(l)?jt().then(()=>{l=l(i),h(f)}):h(f)},end(){_(),o=c=null}}}function ue(t){t&&t.c()}function ae(t,e){t&&t.l(e)}function Pt(t,e,n,r){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),r||P(()=>{const s=t.$$.on_mount.map(W).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),l.forEach(P)}function Tt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&($.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function fe(t,e,n,r,i,l,s,o=[-1]){const c=A;N(t);const u=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:i,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:I(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return u.ctx&&i(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),_&&Ot(t,a)),h}):[],u.update(),_=!0,v(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){dt();const a=$t(e.target);u.fragment&&u.fragment.l(a),a.forEach(Z)}else u.fragment&&u.fragment.c();e.intro&&Dt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),ht(),st()}N(c)}class _e{$destroy(){Tt(this,1),this.$destroy=g}$on(e,n){if(!T(n))return g;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ae as A,Pt as B,Tt as C,bt as D,zt as E,Bt as F,Rt as G,Ft as H,Lt as I,Ht as J,Gt as K,ie as L,Jt as M,ct as N,Zt as O,P,le as Q,_e as S,Kt as a,It as b,Vt as c,ce as d,Qt as e,oe as f,Dt as g,Z as h,fe as i,ne as j,tt as k,Ut as l,$t as m,g as n,ee as o,Wt as p,Yt as q,L as r,qt as s,re as t,Et as u,Xt as v,se as w,K as x,te as y,ue as z};
