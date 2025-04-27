import{C as qt,r as p,E as Kt,D as Xt,F as Zt,n as y,_ as O,z as Jt,j as g,s as ie,L as Qt,H as mt,y as en,I as tn,Q as nn,c as gt,J as on,K as ze}from"./index-5f67e98f.js";import{e as ne,a as vt,h as rn,_ as an,b as un,c as sn,g as ln,d as cn}from"./defineProperty-35fba2af.js";import"./hoist-non-react-statics.cjs-31cb9e56.js";var S=function(t,i){var o=arguments;if(i==null||!qt.call(i,"css"))return p.createElement.apply(void 0,o);var e=o.length,a=new Array(e);a[0]=Kt,a[1]=Xt(t,i);for(var u=2;u<e;u++)a[u]=o[u];return p.createElement.apply(null,a)};function Ve(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return Zt(t)}var dn=function(){var t=Ve.apply(void 0,arguments),i="animation-"+t.name;return{name:i,styles:"@keyframes "+i+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const pn=y.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
  }

  @media screen and (min-width: 1440px) {
    background-image: linear-gradient(
        to left,
        transparent -100px,
        rgba(4, 4, 4, 0.5) 150px,
        black 470px
      ),
      url(${n=>n.bgi[0]});

    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to left,
          transparent -100px,
          rgba(4, 4, 4, 0.5) 150px,
          black 470px
        ),
        url(${n=>n.bgi[1]});

      background-size: contain;
    }
  }
`,fn=y.h1`
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.16;
  margin: 0;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px){
    margin-bottom: 0;
  }
`,hn=y.div`
  @media screen and (min-width: 1440px){
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
  }
`;function Ne(n,t){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),i.push.apply(i,o)}return i}function F(n){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Ne(Object(i),!0).forEach(function(o){ne(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Ne(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function mn(n){if(Array.isArray(n))return n}function gn(n,t){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var o,e,a,u,l=[],r=!0,s=!1;try{if(a=(i=i.call(n)).next,t===0){if(Object(i)!==i)return;r=!1}else for(;!(r=(o=a.call(i)).done)&&(l.push(o.value),l.length!==t);r=!0);}catch(c){s=!0,e=c}finally{try{if(!r&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(s)throw e}}return l}}function vn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(n,t){return mn(n)||gn(n,t)||vt(n,t)||vn()}function bn(n,t){if(n==null)return{};var i={};for(var o in n)if({}.hasOwnProperty.call(n,o)){if(t.indexOf(o)!==-1)continue;i[o]=n[o]}return i}function K(n,t){if(n==null)return{};var i,o,e=bn(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)===-1&&{}.propertyIsEnumerable.call(n,i)&&(e[i]=n[i])}return e}var xn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function En(n){var t=n.defaultInputValue,i=t===void 0?"":t,o=n.defaultMenuIsOpen,e=o===void 0?!1:o,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,r=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,m=n.onMenuOpen,h=n.value,v=K(n,xn),b=p.useState(l!==void 0?l:i),f=q(b,2),x=f[0],E=f[1],w=p.useState(r!==void 0?r:e),C=q(w,2),I=C[0],A=C[1],M=p.useState(h!==void 0?h:u),D=q(M,2),V=D[0],T=D[1],j=p.useCallback(function(H,X){typeof s=="function"&&s(H,X),T(H)},[s]),B=p.useCallback(function(H,X){var Z;typeof c=="function"&&(Z=c(H,X)),E(Z!==void 0?Z:H)},[c]),_=p.useCallback(function(){typeof m=="function"&&m(),A(!0)},[m]),W=p.useCallback(function(){typeof d=="function"&&d(),A(!1)},[d]),k=l!==void 0?l:x,R=r!==void 0?r:I,U=h!==void 0?h:V;return F(F({},v),{},{inputValue:k,menuIsOpen:R,onChange:j,onInputChange:B,onMenuClose:W,onMenuOpen:_,value:U})}function Cn(n){if(Array.isArray(n))return rn(n)}function Sn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function yn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(n){return Cn(n)||Sn(n)||vt(n)||yn()}function Fn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const wn=Math.min,On=Math.max,de=Math.round,ae=Math.floor,pe=n=>({x:n,y:n});function Dn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function bt(n){return Et(n)?(n.nodeName||"").toLowerCase():"#document"}function N(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function xt(n){var t;return(t=(Et(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function Et(n){return n instanceof Node||n instanceof N(n).Node}function De(n){return n instanceof Element||n instanceof N(n).Element}function Re(n){return n instanceof HTMLElement||n instanceof N(n).HTMLElement}function Ue(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof N(n).ShadowRoot}function Ct(n){const{overflow:t,overflowX:i,overflowY:o,display:e}=Le(n);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(e)}function In(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function An(n){return["html","body","#document"].includes(bt(n))}function Le(n){return N(n).getComputedStyle(n)}function Mn(n){if(bt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Ue(n)&&n.host||xt(n);return Ue(t)?t.host:t}function St(n){const t=Mn(n);return An(t)?n.ownerDocument?n.ownerDocument.body:n.body:Re(t)&&Ct(t)?t:St(t)}function fe(n,t,i){var o;t===void 0&&(t=[]),i===void 0&&(i=!0);const e=St(n),a=e===((o=n.ownerDocument)==null?void 0:o.body),u=N(e);return a?t.concat(u,u.visualViewport||[],Ct(e)?e:[],u.frameElement&&i?fe(u.frameElement):[]):t.concat(e,fe(e,[],i))}function Vn(n){const t=Le(n);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const e=Re(n),a=e?n.offsetWidth:i,u=e?n.offsetHeight:o,l=de(i)!==a||de(o)!==u;return l&&(i=a,o=u),{width:i,height:o,$:l}}function ke(n){return De(n)?n:n.contextElement}function be(n){const t=ke(n);if(!Re(t))return pe(1);const i=t.getBoundingClientRect(),{width:o,height:e,$:a}=Vn(t);let u=(a?de(i.width):i.width)/o,l=(a?de(i.height):i.height)/e;return(!u||!Number.isFinite(u))&&(u=1),(!l||!Number.isFinite(l))&&(l=1),{x:u,y:l}}const Pn=pe(0);function Rn(n){const t=N(n);return!In()||!t.visualViewport?Pn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ln(n,t,i){return t===void 0&&(t=!1),!i||t&&i!==N(n)?!1:t}function _e(n,t,i,o){t===void 0&&(t=!1),i===void 0&&(i=!1);const e=n.getBoundingClientRect(),a=ke(n);let u=pe(1);t&&(o?De(o)&&(u=be(o)):u=be(n));const l=Ln(a,i,o)?Rn(a):pe(0);let r=(e.left+l.x)/u.x,s=(e.top+l.y)/u.y,c=e.width/u.x,d=e.height/u.y;if(a){const m=N(a),h=o&&De(o)?N(o):o;let v=m.frameElement;for(;v&&o&&h!==m;){const b=be(v),f=v.getBoundingClientRect(),x=Le(v),E=f.left+(v.clientLeft+parseFloat(x.paddingLeft))*b.x,w=f.top+(v.clientTop+parseFloat(x.paddingTop))*b.y;r*=b.x,s*=b.y,c*=b.x,d*=b.y,r+=E,s+=w,v=N(v).frameElement}}return Dn({width:c,height:d,x:r,y:s})}function kn(n,t){let i=null,o;const e=xt(n);function a(){clearTimeout(o),i&&i.disconnect(),i=null}function u(l,r){l===void 0&&(l=!1),r===void 0&&(r=1),a();const{left:s,top:c,width:d,height:m}=n.getBoundingClientRect();if(l||t(),!d||!m)return;const h=ae(c),v=ae(e.clientWidth-(s+d)),b=ae(e.clientHeight-(c+m)),f=ae(s),E={rootMargin:-h+"px "+-v+"px "+-b+"px "+-f+"px",threshold:On(0,wn(1,r))||1};let w=!0;function C(I){const A=I[0].intersectionRatio;if(A!==r){if(!w)return u();A?u(!1,A):o=setTimeout(()=>{u(!1,1e-7)},100)}w=!1}try{i=new IntersectionObserver(C,{...E,root:e.ownerDocument})}catch{i=new IntersectionObserver(C,E)}i.observe(n)}return u(!0),a}function Tn(n,t,i,o){o===void 0&&(o={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:r=!1}=o,s=ke(n),c=e||a?[...s?fe(s):[],...fe(t)]:[];c.forEach(x=>{e&&x.addEventListener("scroll",i,{passive:!0}),a&&x.addEventListener("resize",i)});const d=s&&l?kn(s,i):null;let m=-1,h=null;u&&(h=new ResizeObserver(x=>{let[E]=x;E&&E.target===s&&h&&(h.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{h&&h.observe(t)})),i()}),s&&!r&&h.observe(s),h.observe(t));let v,b=r?_e(n):null;r&&f();function f(){const x=_e(n);b&&(x.x!==b.x||x.y!==b.y||x.width!==b.width||x.height!==b.height)&&i(),b=x,v=requestAnimationFrame(f)}return i(),()=>{c.forEach(x=>{e&&x.removeEventListener("scroll",i),a&&x.removeEventListener("resize",i)}),d&&d(),h&&h.disconnect(),h=null,r&&cancelAnimationFrame(v)}}var Ie=p.useLayoutEffect,Bn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],he=function(){};function jn(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function $n(n,t){for(var i=arguments.length,o=new Array(i>2?i-2:0),e=2;e<i;e++)o[e-2]=arguments[e];var a=[].concat(o);if(t&&n)for(var u in t)t.hasOwnProperty(u)&&t[u]&&a.push("".concat(jn(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var We=function(t){return qn(t)?t.filter(Boolean):an(t)==="object"&&t!==null?[t]:[]},yt=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=K(t,Bn);return F({},i)},P=function(t,i,o){var e=t.cx,a=t.getStyles,u=t.getClassNames,l=t.className;return{css:a(i,t),className:e(o??{},u(i,t),l)}};function ve(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Hn(n){return ve(n)?window.innerHeight:n.clientHeight}function Ft(n){return ve(n)?window.pageYOffset:n.scrollTop}function me(n,t){if(ve(n)){window.scrollTo(0,t);return}n.scrollTop=t}function zn(n){var t=getComputedStyle(n),i=t.position==="absolute",o=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(i&&t.position==="static")&&o.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function Nn(n,t,i,o){return i*((n=n/o-1)*n*n+1)+t}function ue(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:he,e=Ft(n),a=t-e,u=10,l=0;function r(){l+=u;var s=Nn(l,e,a,i);me(n,s),l<i?window.requestAnimationFrame(r):o(n)}r()}function Ge(n,t){var i=n.getBoundingClientRect(),o=t.getBoundingClientRect(),e=t.offsetHeight/3;o.bottom+e>i.bottom?me(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):o.top-e<i.top&&me(n,Math.max(t.offsetTop-e,0))}function Un(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Ye(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function _n(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var wt=!1,Wn={get passive(){return wt=!0}},se=typeof window<"u"?window:{};se.addEventListener&&se.removeEventListener&&(se.addEventListener("p",he,Wn),se.removeEventListener("p",he,!1));var Gn=wt;function Yn(n){return n!=null}function qn(n){return Array.isArray(n)}function le(n,t,i){return n?t:i}var Kn=function(t){for(var i=arguments.length,o=new Array(i>1?i-1:0),e=1;e<i;e++)o[e-1]=arguments[e];var a=Object.entries(t).filter(function(u){var l=q(u,1),r=l[0];return!o.includes(r)});return a.reduce(function(u,l){var r=q(l,2),s=r[0],c=r[1];return u[s]=c,u},{})},Xn=["children","innerProps"],Zn=["children","innerProps"];function Jn(n){var t=n.maxHeight,i=n.menuEl,o=n.minHeight,e=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,r=zn(i),s={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return s;var c=r.getBoundingClientRect(),d=c.height,m=i.getBoundingClientRect(),h=m.bottom,v=m.height,b=m.top,f=i.offsetParent.getBoundingClientRect(),x=f.top,E=u?window.innerHeight:Hn(r),w=Ft(r),C=parseInt(getComputedStyle(i).marginBottom,10),I=parseInt(getComputedStyle(i).marginTop,10),A=x-I,M=E-b,D=A+w,V=d-w-b,T=h-E+w+C,j=w+b-I,B=160;switch(e){case"auto":case"bottom":if(M>=v)return{placement:"bottom",maxHeight:t};if(V>=v&&!u)return a&&ue(r,T,B),{placement:"bottom",maxHeight:t};if(!u&&V>=o||u&&M>=o){a&&ue(r,T,B);var _=u?M-C:V-C;return{placement:"bottom",maxHeight:_}}if(e==="auto"||u){var W=t,k=u?A:D;return k>=o&&(W=Math.min(k-C-l,t)),{placement:"top",maxHeight:W}}if(e==="bottom")return a&&me(r,T),{placement:"bottom",maxHeight:t};break;case"top":if(A>=v)return{placement:"top",maxHeight:t};if(D>=v&&!u)return a&&ue(r,j,B),{placement:"top",maxHeight:t};if(!u&&D>=o||u&&A>=o){var R=t;return(!u&&D>=o||u&&A>=o)&&(R=u?A-I:D-I),a&&ue(r,j,B),{placement:"top",maxHeight:R}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return s}function Qn(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var Ot=function(t){return t==="auto"?"bottom":t},ei=function(t,i){var o,e=t.placement,a=t.theme,u=a.borderRadius,l=a.spacing,r=a.colors;return F((o={label:"menu"},ne(o,Qn(e),"100%"),ne(o,"position","absolute"),ne(o,"width","100%"),ne(o,"zIndex",1),o),i?{}:{backgroundColor:r.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Dt=p.createContext(null),ti=function(t){var i=t.children,o=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,u=t.menuPosition,l=t.menuShouldScrollIntoView,r=t.theme,s=p.useContext(Dt)||{},c=s.setPortalPlacement,d=p.useRef(null),m=p.useState(e),h=q(m,2),v=h[0],b=h[1],f=p.useState(null),x=q(f,2),E=x[0],w=x[1],C=r.spacing.controlHeight;return Ie(function(){var I=d.current;if(I){var A=u==="fixed",M=l&&!A,D=Jn({maxHeight:e,menuEl:I,minHeight:o,placement:a,shouldScroll:M,isFixedPosition:A,controlHeight:C});b(D.maxHeight),w(D.placement),c==null||c(D.placement)}},[e,a,u,l,o,c,C]),i({ref:d,placerProps:F(F({},t),{},{placement:E||Ot(a),maxHeight:v})})},ni=function(t){var i=t.children,o=t.innerRef,e=t.innerProps;return S("div",O({},P(t,"menu",{menu:!0}),{ref:o},e),i)},ii=ni,oi=function(t,i){var o=t.maxHeight,e=t.theme.spacing.baseUnit;return F({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:e,paddingTop:e})},ri=function(t){var i=t.children,o=t.innerProps,e=t.innerRef,a=t.isMulti;return S("div",O({},P(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},o),i)},It=function(t,i){var o=t.theme,e=o.spacing.baseUnit,a=o.colors;return F({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},ai=It,ui=It,si=function(t){var i=t.children,o=i===void 0?"No options":i,e=t.innerProps,a=K(t,Xn);return S("div",O({},P(F(F({},a),{},{children:o,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),o)},li=function(t){var i=t.children,o=i===void 0?"Loading...":i,e=t.innerProps,a=K(t,Zn);return S("div",O({},P(F(F({},a),{},{children:o,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),o)},ci=function(t){var i=t.rect,o=t.offset,e=t.position;return{left:i.left,position:e,top:o,width:i.width,zIndex:1}},di=function(t){var i=t.appendTo,o=t.children,e=t.controlElement,a=t.innerProps,u=t.menuPlacement,l=t.menuPosition,r=p.useRef(null),s=p.useRef(null),c=p.useState(Ot(u)),d=q(c,2),m=d[0],h=d[1],v=p.useMemo(function(){return{setPortalPlacement:h}},[]),b=p.useState(null),f=q(b,2),x=f[0],E=f[1],w=p.useCallback(function(){if(e){var M=Un(e),D=l==="fixed"?0:window.pageYOffset,V=M[m]+D;(V!==(x==null?void 0:x.offset)||M.left!==(x==null?void 0:x.rect.left)||M.width!==(x==null?void 0:x.rect.width))&&E({offset:V,rect:M})}},[e,l,m,x==null?void 0:x.offset,x==null?void 0:x.rect.left,x==null?void 0:x.rect.width]);Ie(function(){w()},[w]);var C=p.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),e&&r.current&&(s.current=Tn(e,r.current,w,{elementResize:"ResizeObserver"in window}))},[e,w]);Ie(function(){C()},[C]);var I=p.useCallback(function(M){r.current=M,C()},[C]);if(!i&&l!=="fixed"||!x)return null;var A=S("div",O({ref:I},P(F(F({},t),{},{offset:x.offset,position:l,rect:x.rect}),"menuPortal",{"menu-portal":!0}),a),o);return S(Dt.Provider,{value:v},i?Jt.createPortal(A,i):A)},pi=function(t){var i=t.isDisabled,o=t.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},fi=function(t){var i=t.children,o=t.innerProps,e=t.isDisabled,a=t.isRtl;return S("div",O({},P(t,"container",{"--is-disabled":e,"--is-rtl":a}),o),i)},hi=function(t,i){var o=t.theme.spacing,e=t.isMulti,a=t.hasValue,u=t.selectProps.controlShouldRenderValue;return F({alignItems:"center",display:e&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},mi=function(t){var i=t.children,o=t.innerProps,e=t.isMulti,a=t.hasValue;return S("div",O({},P(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),o),i)},gi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},vi=function(t){var i=t.children,o=t.innerProps;return S("div",O({},P(t,"indicatorsContainer",{indicators:!0}),o),i)},qe,bi=["size"],xi=["innerProps","isRtl","size"],Ei={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},At=function(t){var i=t.size,o=K(t,bi);return S("svg",O({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Ei},o))},Te=function(t){return S(At,O({size:20},t),S("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Mt=function(t){return S(At,O({size:20},t),S("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Vt=function(t,i){var o=t.isFocused,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return F({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:o?u.neutral60:u.neutral20,padding:a*2,":hover":{color:o?u.neutral80:u.neutral40}})},Ci=Vt,Si=function(t){var i=t.children,o=t.innerProps;return S("div",O({},P(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),i||S(Mt,null))},yi=Vt,Fi=function(t){var i=t.children,o=t.innerProps;return S("div",O({},P(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),i||S(Te,null))},wi=function(t,i){var o=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return F({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:o?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Oi=function(t){var i=t.innerProps;return S("span",O({},i,P(t,"indicatorSeparator",{"indicator-separator":!0})))},Di=dn(qe||(qe=Fn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ii=function(t,i){var o=t.isFocused,e=t.size,a=t.theme,u=a.colors,l=a.spacing.baseUnit;return F({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},i?{}:{color:o?u.neutral60:u.neutral20,padding:l*2})},xe=function(t){var i=t.delay,o=t.offset;return S("span",{css:Ve({animation:"".concat(Di," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Ai=function(t){var i=t.innerProps,o=t.isRtl,e=t.size,a=e===void 0?4:e,u=K(t,xi);return S("div",O({},P(F(F({},u),{},{innerProps:i,isRtl:o,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),S(xe,{delay:0,offset:o}),S(xe,{delay:160,offset:!0}),S(xe,{delay:320,offset:!o}))},Mi=function(t,i){var o=t.isDisabled,e=t.isFocused,a=t.theme,u=a.colors,l=a.borderRadius,r=a.spacing;return F({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:r.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:o?u.neutral5:u.neutral0,borderColor:o?u.neutral10:e?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:e?u.primary:u.neutral30}})},Vi=function(t){var i=t.children,o=t.isDisabled,e=t.isFocused,a=t.innerRef,u=t.innerProps,l=t.menuIsOpen;return S("div",O({ref:a},P(t,"control",{control:!0,"control--is-disabled":o,"control--is-focused":e,"control--menu-is-open":l}),u,{"aria-disabled":o||void 0}),i)},Pi=Vi,Ri=["data"],Li=function(t,i){var o=t.theme.spacing;return i?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},ki=function(t){var i=t.children,o=t.cx,e=t.getStyles,a=t.getClassNames,u=t.Heading,l=t.headingProps,r=t.innerProps,s=t.label,c=t.theme,d=t.selectProps;return S("div",O({},P(t,"group",{group:!0}),r),S(u,O({},l,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:o}),s),S("div",null,i))},Ti=function(t,i){var o=t.theme,e=o.colors,a=o.spacing;return F({label:"group",cursor:"default",display:"block"},i?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Bi=function(t){var i=yt(t);i.data;var o=K(i,Ri);return S("div",O({},P(t,"groupHeading",{"group-heading":!0}),o))},ji=ki,$i=["innerRef","isDisabled","isHidden","inputClassName"],Hi=function(t,i){var o=t.isDisabled,e=t.value,a=t.theme,u=a.spacing,l=a.colors;return F(F({visibility:o?"hidden":"visible",transform:e?"translateZ(0)":""},zi),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},Pt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},zi={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":F({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Pt)},Ni=function(t){return F({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Pt)},Ui=function(t){var i=t.cx,o=t.value,e=yt(t),a=e.innerRef,u=e.isDisabled,l=e.isHidden,r=e.inputClassName,s=K(e,$i);return S("div",O({},P(t,"input",{"input-container":!0}),{"data-value":o||""}),S("input",O({className:i({input:!0},r),ref:a,style:Ni(l),disabled:u},s)))},_i=Ui,Wi=function(t,i){var o=t.theme,e=o.spacing,a=o.borderRadius,u=o.colors;return F({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},Gi=function(t,i){var o=t.theme,e=o.borderRadius,a=o.colors,u=t.cropWithEllipsis;return F({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Yi=function(t,i){var o=t.theme,e=o.spacing,a=o.borderRadius,u=o.colors,l=t.isFocused;return F({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Rt=function(t){var i=t.children,o=t.innerProps;return S("div",o,i)},qi=Rt,Ki=Rt;function Xi(n){var t=n.children,i=n.innerProps;return S("div",O({role:"button"},i),t||S(Te,{size:14}))}var Zi=function(t){var i=t.children,o=t.components,e=t.data,a=t.innerProps,u=t.isDisabled,l=t.removeProps,r=t.selectProps,s=o.Container,c=o.Label,d=o.Remove;return S(s,{data:e,innerProps:F(F({},P(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:r},S(c,{data:e,innerProps:F({},P(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:r},i),S(d,{data:e,innerProps:F(F({},P(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:r}))},Ji=Zi,Qi=function(t,i){var o=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.theme,l=u.spacing,r=u.colors;return F({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?r.primary:e?r.primary25:"transparent",color:o?r.neutral20:a?r.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:a?r.primary:r.primary50}})},eo=function(t){var i=t.children,o=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.innerRef,l=t.innerProps;return S("div",O({},P(t,"option",{option:!0,"option--is-disabled":o,"option--is-focused":e,"option--is-selected":a}),{ref:u,"aria-disabled":o},l),i)},to=eo,no=function(t,i){var o=t.theme,e=o.spacing,a=o.colors;return F({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},io=function(t){var i=t.children,o=t.innerProps;return S("div",O({},P(t,"placeholder",{placeholder:!0}),o),i)},oo=io,ro=function(t,i){var o=t.isDisabled,e=t.theme,a=e.spacing,u=e.colors;return F({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:o?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},ao=function(t){var i=t.children,o=t.isDisabled,e=t.innerProps;return S("div",O({},P(t,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),e),i)},uo=ao,so={ClearIndicator:Fi,Control:Pi,DropdownIndicator:Si,DownChevron:Mt,CrossIcon:Te,Group:ji,GroupHeading:Bi,IndicatorsContainer:vi,IndicatorSeparator:Oi,Input:_i,LoadingIndicator:Ai,Menu:ii,MenuList:ri,MenuPortal:di,LoadingMessage:li,NoOptionsMessage:si,MultiValue:Ji,MultiValueContainer:qi,MultiValueLabel:Ki,MultiValueRemove:Xi,Option:to,Placeholder:oo,SelectContainer:fi,SingleValue:uo,ValueContainer:mi},lo=function(t){return F(F({},so),t.components)},Ke=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function co(n,t){return!!(n===t||Ke(n)&&Ke(t))}function po(n,t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(!co(n[i],t[i]))return!1;return!0}function fo(n,t){t===void 0&&(t=po);var i=null;function o(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(i&&i.lastThis===this&&t(e,i.lastArgs))return i.lastResult;var u=n.apply(this,e);return i={lastResult:u,lastArgs:e,lastThis:this},u}return o.clear=function(){i=null},o}var ho={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},mo=function(t){return S("span",O({css:ho},t))},Xe=mo,go={guidance:function(t){var i=t.isSearchable,o=t.isMulti,e=t.tabSelectsValue,a=t.context,u=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(e?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,o=t.label,e=o===void 0?"":o,a=t.labels,u=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var i=t.context,o=t.focused,e=t.options,a=t.label,u=a===void 0?"":a,l=t.selectValue,r=t.isDisabled,s=t.isSelected,c=t.isAppleDevice,d=function(b,f){return b&&b.length?"".concat(b.indexOf(f)+1," of ").concat(b.length):""};if(i==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,o),".");if(i==="menu"&&c){var m=r?" disabled":"",h="".concat(s?" selected":"").concat(m);return"".concat(u).concat(h,", ").concat(d(e,o),".")}return""},onFilter:function(t){var i=t.inputValue,o=t.resultsMessage;return"".concat(o).concat(i?" for search term "+i:"",".")}},vo=function(t){var i=t.ariaSelection,o=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,u=t.isFocused,l=t.selectValue,r=t.selectProps,s=t.id,c=t.isAppleDevice,d=r.ariaLiveMessages,m=r.getOptionLabel,h=r.inputValue,v=r.isMulti,b=r.isOptionDisabled,f=r.isSearchable,x=r.menuIsOpen,E=r.options,w=r.screenReaderStatus,C=r.tabSelectsValue,I=r.isLoading,A=r["aria-label"],M=r["aria-live"],D=p.useMemo(function(){return F(F({},go),d||{})},[d]),V=p.useMemo(function(){var k="";if(i&&D.onChange){var R=i.option,U=i.options,H=i.removedValue,X=i.removedValues,Z=i.value,oe=function(Y){return Array.isArray(Y)?null:Y},L=H||R||oe(Z),$=L?m(L):"",G=U||X||void 0,J=G?G.map(m):[],z=F({isDisabled:L&&b(L,l),label:$,labels:J},i);k=D.onChange(z)}return k},[i,D,b,l,m]),T=p.useMemo(function(){var k="",R=o||e,U=!!(o&&l&&l.includes(o));if(R&&D.onFocus){var H={focused:R,label:m(R),isDisabled:b(R,l),isSelected:U,options:a,context:R===o?"menu":"value",selectValue:l,isAppleDevice:c};k=D.onFocus(H)}return k},[o,e,m,b,D,a,l,c]),j=p.useMemo(function(){var k="";if(x&&E.length&&!I&&D.onFilter){var R=w({count:a.length});k=D.onFilter({inputValue:h,resultsMessage:R})}return k},[a,h,x,D,E,w,I]),B=(i==null?void 0:i.action)==="initial-input-focus",_=p.useMemo(function(){var k="";if(D.guidance){var R=e?"value":x?"menu":"input";k=D.guidance({"aria-label":A,context:R,isDisabled:o&&b(o,l),isMulti:v,isSearchable:f,tabSelectsValue:C,isInitialFocus:B})}return k},[A,o,e,v,b,f,x,D,l,C,B]),W=S(p.Fragment,null,S("span",{id:"aria-selection"},V),S("span",{id:"aria-focused"},T),S("span",{id:"aria-results"},j),S("span",{id:"aria-guidance"},_));return S(p.Fragment,null,S(Xe,{id:s},B&&W),S(Xe,{"aria-live":M,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!B&&W))},bo=vo,Ae=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],xo=new RegExp("["+Ae.map(function(n){return n.letters}).join("")+"]","g"),Lt={};for(var Ee=0;Ee<Ae.length;Ee++)for(var Ce=Ae[Ee],Se=0;Se<Ce.letters.length;Se++)Lt[Ce.letters[Se]]=Ce.base;var kt=function(t){return t.replace(xo,function(i){return Lt[i]})},Eo=fo(kt),Ze=function(t){return t.replace(/^\s+|\s+$/g,"")},Co=function(t){return"".concat(t.label," ").concat(t.value)},So=function(t){return function(i,o){if(i.data.__isNew__)return!0;var e=F({ignoreCase:!0,ignoreAccents:!0,stringify:Co,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,u=e.ignoreAccents,l=e.stringify,r=e.trim,s=e.matchFrom,c=r?Ze(o):o,d=r?Ze(l(i)):l(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=Eo(c),d=kt(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},yo=["innerRef"];function Fo(n){var t=n.innerRef,i=K(n,yo),o=Kn(i,"onExited","in","enter","exit","appear");return S("input",O({ref:t},o,{css:Ve({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var wo=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function Oo(n){var t=n.isEnabled,i=n.onBottomArrive,o=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,u=p.useRef(!1),l=p.useRef(!1),r=p.useRef(0),s=p.useRef(null),c=p.useCallback(function(f,x){if(s.current!==null){var E=s.current,w=E.scrollTop,C=E.scrollHeight,I=E.clientHeight,A=s.current,M=x>0,D=C-I-w,V=!1;D>x&&u.current&&(o&&o(f),u.current=!1),M&&l.current&&(a&&a(f),l.current=!1),M&&x>D?(i&&!u.current&&i(f),A.scrollTop=C,V=!0,u.current=!0):!M&&-x>w&&(e&&!l.current&&e(f),A.scrollTop=0,V=!0,l.current=!0),V&&wo(f)}},[i,o,e,a]),d=p.useCallback(function(f){c(f,f.deltaY)},[c]),m=p.useCallback(function(f){r.current=f.changedTouches[0].clientY},[]),h=p.useCallback(function(f){var x=r.current-f.changedTouches[0].clientY;c(f,x)},[c]),v=p.useCallback(function(f){if(f){var x=Gn?{passive:!1}:!1;f.addEventListener("wheel",d,x),f.addEventListener("touchstart",m,x),f.addEventListener("touchmove",h,x)}},[h,m,d]),b=p.useCallback(function(f){f&&(f.removeEventListener("wheel",d,!1),f.removeEventListener("touchstart",m,!1),f.removeEventListener("touchmove",h,!1))},[h,m,d]);return p.useEffect(function(){if(t){var f=s.current;return v(f),function(){b(f)}}},[t,v,b]),function(f){s.current=f}}var Je=["boxSizing","height","overflow","paddingRight","position"],Qe={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function et(n){n.preventDefault()}function tt(n){n.stopPropagation()}function nt(){var n=this.scrollTop,t=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===t&&(this.scrollTop=n-1)}function it(){return"ontouchstart"in window||navigator.maxTouchPoints}var ot=!!(typeof window<"u"&&window.document&&window.document.createElement),te=0,ee={capture:!1,passive:!1};function Do(n){var t=n.isEnabled,i=n.accountForScrollbars,o=i===void 0?!0:i,e=p.useRef({}),a=p.useRef(null),u=p.useCallback(function(r){if(ot){var s=document.body,c=s&&s.style;if(o&&Je.forEach(function(v){var b=c&&c[v];e.current[v]=b}),o&&te<1){var d=parseInt(e.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,h=window.innerWidth-m+d||0;Object.keys(Qe).forEach(function(v){var b=Qe[v];c&&(c[v]=b)}),c&&(c.paddingRight="".concat(h,"px"))}s&&it()&&(s.addEventListener("touchmove",et,ee),r&&(r.addEventListener("touchstart",nt,ee),r.addEventListener("touchmove",tt,ee))),te+=1}},[o]),l=p.useCallback(function(r){if(ot){var s=document.body,c=s&&s.style;te=Math.max(te-1,0),o&&te<1&&Je.forEach(function(d){var m=e.current[d];c&&(c[d]=m)}),s&&it()&&(s.removeEventListener("touchmove",et,ee),r&&(r.removeEventListener("touchstart",nt,ee),r.removeEventListener("touchmove",tt,ee)))}},[o]);return p.useEffect(function(){if(t){var r=a.current;return u(r),function(){l(r)}}},[t,u,l]),function(r){a.current=r}}var Io=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Ao={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Mo(n){var t=n.children,i=n.lockEnabled,o=n.captureEnabled,e=o===void 0?!0:o,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,r=n.onTopLeave,s=Oo({isEnabled:e,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:r}),c=Do({isEnabled:i}),d=function(h){s(h),c(h)};return S(p.Fragment,null,i&&S("div",{onClick:Io,css:Ao}),t(d))}var Vo={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Po=function(t){var i=t.name,o=t.onFocus;return S("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:Vo,value:"",onChange:function(){}})},Ro=Po;function Be(n){var t;return typeof window<"u"&&window.navigator!=null?n.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function Lo(){return Be(/^iPhone/i)}function Tt(){return Be(/^Mac/i)}function ko(){return Be(/^iPad/i)||Tt()&&navigator.maxTouchPoints>1}function To(){return Lo()||ko()}function Bo(){return Tt()||To()}var jo=function(t){return t.label},$o=function(t){return t.label},Ho=function(t){return t.value},zo=function(t){return!!t.isDisabled},No={clearIndicator:yi,container:pi,control:Mi,dropdownIndicator:Ci,group:Li,groupHeading:Ti,indicatorsContainer:gi,indicatorSeparator:wi,input:Hi,loadingIndicator:Ii,loadingMessage:ui,menu:ei,menuList:oi,menuPortal:ci,multiValue:Wi,multiValueLabel:Gi,multiValueRemove:Yi,noOptionsMessage:ai,option:Qi,placeholder:no,singleValue:ro,valueContainer:hi},Uo={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},_o=4,Bt=4,Wo=38,Go=Bt*2,Yo={baseUnit:Bt,controlHeight:Wo,menuGutter:Go},ye={borderRadius:_o,colors:Uo,spacing:Yo},qo={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ye(),captureMenuScroll:!Ye(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:So(),formatGroupLabel:jo,getOptionLabel:$o,getOptionValue:Ho,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:zo,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!_n(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function rt(n,t,i,o){var e=Ht(n,t,i),a=zt(n,t,i),u=$t(n,t),l=ge(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:u,value:l,index:o}}function ce(n,t){return n.options.map(function(i,o){if("options"in i){var e=i.options.map(function(u,l){return rt(n,u,t,l)}).filter(function(u){return ut(n,u)});return e.length>0?{type:"group",data:i,options:e,index:o}:void 0}var a=rt(n,i,t,o);return ut(n,a)?a:void 0}).filter(Yn)}function jt(n){return n.reduce(function(t,i){return i.type==="group"?t.push.apply(t,Pe(i.options.map(function(o){return o.data}))):t.push(i.data),t},[])}function at(n,t){return n.reduce(function(i,o){return o.type==="group"?i.push.apply(i,Pe(o.options.map(function(e){return{data:e.data,id:"".concat(t,"-").concat(o.index,"-").concat(e.index)}}))):i.push({data:o.data,id:"".concat(t,"-").concat(o.index)}),i},[])}function Ko(n,t){return jt(ce(n,t))}function ut(n,t){var i=n.inputValue,o=i===void 0?"":i,e=t.data,a=t.isSelected,u=t.label,l=t.value;return(!Ut(n)||!a)&&Nt(n,{label:u,value:l,data:e},o)}function Xo(n,t){var i=n.focusedValue,o=n.selectValue,e=o.indexOf(i);if(e>-1){var a=t.indexOf(i);if(a>-1)return i;if(e<t.length)return t[e]}return null}function Zo(n,t){var i=n.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var Fe=function(t,i){var o,e=(o=t.find(function(a){return a.data===i}))===null||o===void 0?void 0:o.id;return e||null},$t=function(t,i){return t.getOptionLabel(i)},ge=function(t,i){return t.getOptionValue(i)};function Ht(n,t,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,i):!1}function zt(n,t,i){if(i.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,i);var o=ge(n,t);return i.some(function(e){return ge(n,e)===o})}function Nt(n,t,i){return n.filterOption?n.filterOption(t,i):!0}var Ut=function(t){var i=t.hideSelectedOptions,o=t.isMulti;return i===void 0?o:i},Jo=1,_t=function(n){un(i,n);var t=sn(i);function i(o){var e;if(cn(this,i),e=t.call(this,o),e.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.isAppleDevice=Bo(),e.controlRef=null,e.getControlRef=function(r){e.controlRef=r},e.focusedOptionRef=null,e.getFocusedOptionRef=function(r){e.focusedOptionRef=r},e.menuListRef=null,e.getMenuListRef=function(r){e.menuListRef=r},e.inputRef=null,e.getInputRef=function(r){e.inputRef=r},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(r,s){var c=e.props,d=c.onChange,m=c.name;s.name=m,e.ariaOnChange(r,s),d(r,s)},e.setValue=function(r,s,c){var d=e.props,m=d.closeMenuOnSelect,h=d.isMulti,v=d.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:v}),m&&(e.setState({inputIsHiddenAfterUpdate:!h}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(r,{action:s,option:c})},e.selectOption=function(r){var s=e.props,c=s.blurInputOnSelect,d=s.isMulti,m=s.name,h=e.state.selectValue,v=d&&e.isOptionSelected(r,h),b=e.isOptionDisabled(r,h);if(v){var f=e.getOptionValue(r);e.setValue(h.filter(function(x){return e.getOptionValue(x)!==f}),"deselect-option",r)}else if(!b)d?e.setValue([].concat(Pe(h),[r]),"select-option",r):e.setValue(r,"select-option");else{e.ariaOnChange(r,{action:"select-option",option:r,name:m});return}c&&e.blurInput()},e.removeValue=function(r){var s=e.props.isMulti,c=e.state.selectValue,d=e.getOptionValue(r),m=c.filter(function(v){return e.getOptionValue(v)!==d}),h=le(s,m,m[0]||null);e.onChange(h,{action:"remove-value",removedValue:r}),e.focusInput()},e.clearValue=function(){var r=e.state.selectValue;e.onChange(le(e.props.isMulti,[],null),{action:"clear",removedValues:r})},e.popValue=function(){var r=e.props.isMulti,s=e.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),m=le(r,d,d[0]||null);e.onChange(m,{action:"pop-value",removedValue:c})},e.getFocusedOptionId=function(r){return Fe(e.state.focusableOptionsWithIds,r)},e.getFocusableOptionsWithIds=function(){return at(ce(e.props,e.state.selectValue),e.getElementId("option"))},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return $n.apply(void 0,[e.props.classNamePrefix].concat(s))},e.getOptionLabel=function(r){return $t(e.props,r)},e.getOptionValue=function(r){return ge(e.props,r)},e.getStyles=function(r,s){var c=e.props.unstyled,d=No[r](s,c);d.boxSizing="border-box";var m=e.props.styles[r];return m?m(d,s):d},e.getClassNames=function(r,s){var c,d;return(c=(d=e.props.classNames)[r])===null||c===void 0?void 0:c.call(d,s)},e.getElementId=function(r){return"".concat(e.state.instancePrefix,"-").concat(r)},e.getComponents=function(){return lo(e.props)},e.buildCategorizedOptions=function(){return ce(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return jt(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(r,s){e.setState({ariaSelection:F({value:r},s)})},e.onMenuMouseDown=function(r){r.button===0&&(r.stopPropagation(),r.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(r){e.blockOptionHover=!1},e.onControlMouseDown=function(r){if(!r.defaultPrevented){var s=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&e.onMenuClose():s&&e.openMenu("first"):(s&&(e.openAfterFocus=!0),e.focusInput()),r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&r.preventDefault()}},e.onDropdownIndicatorMouseDown=function(r){if(!(r&&r.type==="mousedown"&&r.button!==0)&&!e.props.isDisabled){var s=e.props,c=s.isMulti,d=s.menuIsOpen;e.focusInput(),d?(e.setState({inputIsHiddenAfterUpdate:!c}),e.onMenuClose()):e.openMenu("first"),r.preventDefault()}},e.onClearIndicatorMouseDown=function(r){r&&r.type==="mousedown"&&r.button!==0||(e.clearValue(),r.preventDefault(),e.openAfterFocus=!1,r.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(r){typeof e.props.closeMenuOnScroll=="boolean"?r.target instanceof HTMLElement&&ve(r.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(r)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(r){var s=r.touches,c=s&&s.item(0);c&&(e.initialTouchX=c.clientX,e.initialTouchY=c.clientY,e.userIsDragging=!1)},e.onTouchMove=function(r){var s=r.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-e.initialTouchX),m=Math.abs(c.clientY-e.initialTouchY),h=5;e.userIsDragging=d>h||m>h}},e.onTouchEnd=function(r){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(r.target)&&e.menuListRef&&!e.menuListRef.contains(r.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(r){e.userIsDragging||e.onControlMouseDown(r)},e.onClearIndicatorTouchEnd=function(r){e.userIsDragging||e.onClearIndicatorMouseDown(r)},e.onDropdownIndicatorTouchEnd=function(r){e.userIsDragging||e.onDropdownIndicatorMouseDown(r)},e.handleInputChange=function(r){var s=e.props.inputValue,c=r.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(c,{action:"input-change",prevInputValue:s}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(r){e.props.onFocus&&e.props.onFocus(r),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(r){var s=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(r),e.onInputChange("",{action:"input-blur",prevInputValue:s}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(r){if(!(e.blockOptionHover||e.state.focusedOption===r)){var s=e.getFocusableOptions(),c=s.indexOf(r);e.setState({focusedOption:r,focusedOptionId:c>-1?e.getFocusedOptionId(r):null})}},e.shouldHideSelectedOptions=function(){return Ut(e.props)},e.onValueInputFocus=function(r){r.preventDefault(),r.stopPropagation(),e.focus()},e.onKeyDown=function(r){var s=e.props,c=s.isMulti,d=s.backspaceRemovesValue,m=s.escapeClearsValue,h=s.inputValue,v=s.isClearable,b=s.isDisabled,f=s.menuIsOpen,x=s.onKeyDown,E=s.tabSelectsValue,w=s.openMenuOnFocus,C=e.state,I=C.focusedOption,A=C.focusedValue,M=C.selectValue;if(!b&&!(typeof x=="function"&&(x(r),r.defaultPrevented))){switch(e.blockOptionHover=!0,r.key){case"ArrowLeft":if(!c||h)return;e.focusValue("previous");break;case"ArrowRight":if(!c||h)return;e.focusValue("next");break;case"Delete":case"Backspace":if(h)return;if(A)e.removeValue(A);else{if(!d)return;c?e.popValue():v&&e.clearValue()}break;case"Tab":if(e.isComposing||r.shiftKey||!f||!E||!I||w&&e.isOptionSelected(I,M))return;e.selectOption(I);break;case"Enter":if(r.keyCode===229)break;if(f){if(!I||e.isComposing)return;e.selectOption(I);break}return;case"Escape":f?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:h}),e.onMenuClose()):v&&m&&e.clearValue();break;case" ":if(h)return;if(!f){e.openMenu("first");break}if(!I)return;e.selectOption(I);break;case"ArrowUp":f?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":f?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!f)return;e.focusOption("pageup");break;case"PageDown":if(!f)return;e.focusOption("pagedown");break;case"Home":if(!f)return;e.focusOption("first");break;case"End":if(!f)return;e.focusOption("last");break;default:return}r.preventDefault()}},e.state.instancePrefix="react-select-"+(e.props.instanceId||++Jo),e.state.selectValue=We(o.value),o.menuIsOpen&&e.state.selectValue.length){var a=e.getFocusableOptionsWithIds(),u=e.buildFocusableOptions(),l=u.indexOf(e.state.selectValue[0]);e.state.focusableOptionsWithIds=a,e.state.focusedOption=u[l],e.state.focusedOptionId=Fe(a,u[l])}return e}return ln(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ge(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,r=this.state.isFocused;(r&&!u&&e.isDisabled||r&&l&&!e.menuIsOpen)&&this.focusInput(),r&&u&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!r&&!u&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ge(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,u=this.state,l=u.selectValue,r=u.isFocused,s=this.buildFocusableOptions(),c=e==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(r&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var r=u.indexOf(l);l||(r=-1);var s=u.length-1,c=-1;if(u.length){switch(e){case"previous":r===0?c=0:r===-1?c=s:c=r-1;break;case"next":r>-1&&r<s&&(c=r+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var r=0,s=l.indexOf(u);u||(s=-1),e==="up"?r=s>0?s-1:l.length-1:e==="down"?r=(s+1)%l.length:e==="pageup"?(r=s-a,r<0&&(r=0)):e==="pagedown"?(r=s+a,r>l.length-1&&(r=l.length-1)):e==="last"&&(r=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[r],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[r])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ye):F(F({},ye),this.props.theme):ye}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,r=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,m=d.isMulti,h=d.isRtl,v=d.options,b=this.hasValue();return{clearValue:e,cx:a,getStyles:u,getClassNames:l,getValue:r,hasValue:b,isMulti:m,isRtl:h,options:v,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,u=e.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(e,a){return Ht(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return zt(this.props,e,a)}},{key:"filterOption",value:function(e,a){return Nt(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,u=e.isSearchable,l=e.inputId,r=e.inputValue,s=e.tabIndex,c=e.form,d=e.menuIsOpen,m=e.required,h=this.getComponents(),v=h.Input,b=this.state,f=b.inputIsHidden,x=b.ariaSelection,E=this.commonProps,w=l||this.getElementId("input"),C=F(F(F({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(x==null?void 0:x.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(v,O({},E,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:w,innerRef:this.getInputRef,isDisabled:a,isHidden:f,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:r},C)):p.createElement(Fo,O({id:w,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:he,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},C))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,r=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,m=this.commonProps,h=this.props,v=h.controlShouldRenderValue,b=h.isDisabled,f=h.isMulti,x=h.inputValue,E=h.placeholder,w=this.state,C=w.selectValue,I=w.focusedValue,A=w.isFocused;if(!this.hasValue()||!v)return x?null:p.createElement(d,O({},m,{key:"placeholder",isDisabled:b,isFocused:A,innerProps:{id:this.getElementId("placeholder")}}),E);if(f)return C.map(function(D,V){var T=D===I,j="".concat(e.getOptionLabel(D),"-").concat(e.getOptionValue(D));return p.createElement(u,O({},m,{components:{Container:l,Label:r,Remove:s},isFocused:T,isDisabled:b,key:j,index:V,removeProps:{onClick:function(){return e.removeValue(D)},onTouchEnd:function(){return e.removeValue(D)},onMouseDown:function(_){_.preventDefault()}},data:D}),e.formatOptionLabel(D,"value"))});if(x)return null;var M=C[0];return p.createElement(c,O({},m,{data:M,isDisabled:b}),this.formatOptionLabel(M,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,u=this.commonProps,l=this.props,r=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||r||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,O({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,u=this.commonProps,l=this.props,r=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return p.createElement(a,O({},u,{innerProps:d,isDisabled:r,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,u=e.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,r=this.props.isDisabled,s=this.state.isFocused;return p.createElement(u,O({},l,{isDisabled:r,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,r=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,O({},u,{innerProps:s,isDisabled:l,isFocused:r}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,r=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,m=a.NoOptionsMessage,h=a.Option,v=this.commonProps,b=this.state.focusedOption,f=this.props,x=f.captureMenuScroll,E=f.inputValue,w=f.isLoading,C=f.loadingMessage,I=f.minMenuHeight,A=f.maxMenuHeight,M=f.menuIsOpen,D=f.menuPlacement,V=f.menuPosition,T=f.menuPortalTarget,j=f.menuShouldBlockScroll,B=f.menuShouldScrollIntoView,_=f.noOptionsMessage,W=f.onMenuScrollToTop,k=f.onMenuScrollToBottom;if(!M)return null;var R=function($,G){var J=$.type,z=$.data,Q=$.isDisabled,Y=$.isSelected,re=$.label,Wt=$.value,je=b===z,$e=Q?void 0:function(){return e.onOptionHover(z)},Gt=Q?void 0:function(){return e.selectOption(z)},He="".concat(e.getElementId("option"),"-").concat(G),Yt={id:He,onClick:Gt,onMouseMove:$e,onMouseOver:$e,tabIndex:-1,role:"option","aria-selected":e.isAppleDevice?void 0:Y};return p.createElement(h,O({},v,{innerProps:Yt,data:z,isDisabled:Q,isSelected:Y,key:He,label:re,type:J,value:Wt,isFocused:je,innerRef:je?e.getFocusedOptionRef:void 0}),e.formatOptionLabel($.data,"menu"))},U;if(this.hasOptions())U=this.getCategorizedOptions().map(function(L){if(L.type==="group"){var $=L.data,G=L.options,J=L.index,z="".concat(e.getElementId("group"),"-").concat(J),Q="".concat(z,"-heading");return p.createElement(u,O({},v,{key:z,data:$,options:G,Heading:l,headingProps:{id:Q,data:L.data},label:e.formatGroupLabel(L.data)}),L.options.map(function(Y){return R(Y,"".concat(J,"-").concat(Y.index))}))}else if(L.type==="option")return R(L,"".concat(L.index))});else if(w){var H=C({inputValue:E});if(H===null)return null;U=p.createElement(d,v,H)}else{var X=_({inputValue:E});if(X===null)return null;U=p.createElement(m,v,X)}var Z={minMenuHeight:I,maxMenuHeight:A,menuPlacement:D,menuPosition:V,menuShouldScrollIntoView:B},oe=p.createElement(ti,O({},v,Z),function(L){var $=L.ref,G=L.placerProps,J=G.placement,z=G.maxHeight;return p.createElement(r,O({},v,Z,{innerRef:$,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove},isLoading:w,placement:J}),p.createElement(Mo,{captureEnabled:x,onTopArrive:W,onBottomArrive:k,lockEnabled:j},function(Q){return p.createElement(s,O({},v,{innerRef:function(re){e.getMenuListRef(re),Q(re)},innerProps:{role:"listbox","aria-multiselectable":v.isMulti,id:e.getElementId("listbox")},isLoading:w,maxHeight:z,focusedOption:b}),U)}))});return T||V==="fixed"?p.createElement(c,O({},v,{appendTo:T,controlElement:this.controlRef,menuPlacement:D,menuPosition:V}),oe):oe}},{key:"renderFormField",value:function(){var e=this,a=this.props,u=a.delimiter,l=a.isDisabled,r=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(Ro,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(r)if(u){var m=d.map(function(b){return e.getOptionValue(b)}).join(u);return p.createElement("input",{name:s,type:"hidden",value:m})}else{var h=d.length>0?d.map(function(b,f){return p.createElement("input",{key:"i-".concat(f),name:s,type:"hidden",value:e.getOptionValue(b)})}):p.createElement("input",{name:s,type:"hidden",value:""});return p.createElement("div",null,h)}else{var v=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:s,type:"hidden",value:v})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,r=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(bo,O({},e,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:r,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,u=e.IndicatorsContainer,l=e.SelectContainer,r=e.ValueContainer,s=this.props,c=s.className,d=s.id,m=s.isDisabled,h=s.menuIsOpen,v=this.state.isFocused,b=this.commonProps=this.getCommonProps();return p.createElement(l,O({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:v}),this.renderLiveRegion(),p.createElement(a,O({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:v,menuIsOpen:h}),p.createElement(r,O({},b,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,O({},b,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,r=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,m=a.instancePrefix,h=e.options,v=e.value,b=e.menuIsOpen,f=e.inputValue,x=e.isMulti,E=We(v),w={};if(u&&(v!==u.value||h!==u.options||b!==u.menuIsOpen||f!==u.inputValue)){var C=b?Ko(e,E):[],I=b?at(ce(e,E),"".concat(m,"-option")):[],A=l?Xo(a,E):null,M=Zo(a,C),D=Fe(I,M);w={selectValue:E,focusedOption:M,focusedOptionId:D,focusableOptionsWithIds:I,focusedValue:A,clearFocusValueOnUpdate:!1}}var V=r!=null&&e!==u?{inputIsHidden:r,inputIsHiddenAfterUpdate:void 0}:{},T=s,j=c&&d;return c&&!j&&(T={value:le(x,E,E[0]||null),options:E,action:"initial-input-focus"},j=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(T=null),F(F(F({},w),V),{},{prevProps:e,ariaSelection:T,prevWasFocused:j})}}]),i}(p.Component);_t.defaultProps=qo;var Qo=p.forwardRef(function(n,t){var i=En(n);return p.createElement(_t,O({ref:t},i))}),st=Qo;const er=y.form`
  
`,tr=y.div`
  position: relative;
`,nr=y.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px){
    margin-bottom: 0;
  }
`,ir=y.input`
  width: 335px;
  padding: 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  color: var(--white, #efede8);
  background-color: rgba(239, 237, 232, 0);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  outline: none;

  :focus,
  :valid {
    border-color: #ef8964;
  }

  @media screen and (min-width: 768px) {
    width: 236px;
    font-size: 16px;
    line-height: 1.5;
  }
`,lt=y.button`
  position: absolute;
  top: 14px;
  right: ${n=>n.right};
  padding: 0;
  width: 18px;
  height: 18px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 17px;
  }
`,ct=y.svg`
  width: 18px;
  height: 18px;
  stroke: ${n=>n.color};
`;function or({setParams:n,initialCategory:t,initialRecommended:i}){const[o,e]=p.useState(""),[a,u]=p.useState(""),[l,r]=p.useState(""),[s,c]=p.useState(""),[d,m]=p.useState(!0);p.useEffect(()=>{if(d){m(!1);return}n({search:l,category:o,groupBloodNotAllowed:a})},[l,a,o]);const h=C=>{e(C.value)},v=C=>{u(C.value)},b=()=>o?t.find(C=>C.value===C):"",f=()=>a?i.find(C=>C.value===a):"",x=C=>{c(C.currentTarget.value)},E=()=>{r(""),c("")},w=C=>{C.preventDefault(),r(s)};return g.jsxs(nr,{children:[g.jsxs(tr,{children:[g.jsxs(er,{onSubmit:w,children:[g.jsx(ir,{type:"text",name:"request",pattern:"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",placeholder:"Search",value:s,onChange:x,required:!0,autoComplete:"off"}),g.jsx(lt,{right:"14px",type:"submit",children:g.jsx(ct,{color:"#EFEDE8",children:g.jsx("use",{href:ie+"#icon-search"})})})]}),s&&g.jsx(lt,{right:"40px",onClick:E,children:g.jsx(ct,{color:"#E6533C",children:g.jsx("use",{href:ie+"#icon-clear"})})})]}),g.jsx(st,{onChange:h,value:b(),options:t,classNamePrefix:"custom-select",className:"custom-select-container",placeholder:"Categories"}),g.jsx(st,{onChange:v,value:f(),options:i,classNamePrefix:"custom-select-second",className:"custom-select-second-container",placeholder:"All"})]})}const rr=y.ul`
  width: 100%;
  height: 1268px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    height: 800px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
    

    ::-webkit-scrollbar {
      background-color: var(--default-avatar-fill);
      width: 8px;
      border-radius: 12px;
    }
    ::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background-color: var(--orange-1);
    }
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
    height: 487px;
  }
`,ar=y.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,dt=y.p`
  color: rgba(239, 237, 232, 0.30);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
  width: 580px;  
  font-size: 16px;
  line-height: 1.5;
  }
`,pt=y.span`
  color: var(--orange);
`,ur=y.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 335px;
  height: 141px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: rgba(239, 237, 232, 0.05);
  padding: 16px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,sr=y.div`
  display: flex;
  justify-content: space-between;
`,lr=y.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 7.5px 5px 7.5px;
  border-radius: 4px;
  color: #fff;
  background-color: rgba(239, 237, 232, 0.05);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,cr=y.div`
  display: flex;
  align-items: center;
`,dr=y.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: rgba(239, 237, 232, 0);
  color: #e6533c;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  cursor: pointer;
`,pr=y.svg`
  width: 16px;
  height: 16px;
  stroke: #e6533c;
`,fr=y.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 8px;
`,hr=y.svg`
  width: 24px;
  height: 24px;
  stroke: #e6533c;
`,mr=y.h2`
  color: #efede8;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  min-width: 100px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,we=y.p`
  color: rgba(239, 237, 232, 0.4);

  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,Oe=y.span`
  color: #efede8;
  color: #efede8;
`,ft=y.p`
  color: #efede8;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  margin-right: 16px;
`,ht=y.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${n=>n.color};
  margin-right: 8px;
`,gr=y.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
`;y.div`;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;const vr=y.div`
  position: absolute;
  width: 335px;
  padding: 48px 0;
  text-align: center;
  border-radius: 12px;
  border: 1px;
  background: linear-gradient(0deg, #10100f, #10100f),
    linear-gradient(0deg, rgba(239, 237, 232, 0.2), rgba(239, 237, 232, 0.2));

  @media screen and (min-width: 768px) {
    width: 430px;
    padding: 64px 0
  }
`,br=y.button`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  background-color: rgba(0,0,0,0);
  color: var(--white);
  height: 22px;
  padding: 0;
`,xr=y.img`
  display: inline-block;
  width: 123px;
  height: 97px;
  margin-bottom: 3px;
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,Er=y.p`
  margin-bottom: 16px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--white);
  text-align: center;
`,Cr=y.p`
  margin-bottom: 24px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--border);
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,Sr=y.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--orange);
  text-align: center;
`,yr=y.button`
  
  margin-bottom: 16px;
  padding: 14px 32px;
  border-radius: 12px;
  background: #E6533C;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: center;
  color: var(--white);

    &:hover {
      background-color: #E6533C;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #E6533C;
    }
`,Fr=y(Qt)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--border);
`,wr=y.svg`
  width: 16px;
  height: 16px;
  stroke: var(--input-border);
  margin-left: 8px;
`,Or="/project-daily-energy-dose/assets/3d-food-icon-by-OdafeUI-46dd5bc9.png",Dr=({onClose:n,actualCalories:t})=>{const i=p.useCallback(o=>{o.key==="Escape"&&n()},[n]);return p.useEffect(()=>(document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}),[i]),g.jsx(g.Fragment,{children:g.jsxs(vr,{onClick:o=>o.stopPropagation(),children:[g.jsx(br,{children:g.jsx(mt,{onClick:n,size:"22px"})}),g.jsx(xr,{src:Or,alt:""}),g.jsx(Er,{children:"Well done"}),g.jsxs(Cr,{children:["Calories: ",g.jsx(Sr,{children:t})]}),g.jsx(yr,{type:"button",onClick:n,children:"Next product"}),g.jsxs(Fr,{to:"/diary",children:["To the diary",g.jsx(wr,{children:g.jsx("use",{href:ie+"#icon-arrow"})})]})]})})},Ir=y.div`;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,Ar=y.div`
  position: absolute;
  width: 335px;
  padding: 48px 24px;
  border-radius: 12px;
  border: 1px;
  background: linear-gradient(0deg, #10100f, #10100f),
    linear-gradient(0deg, rgba(239, 237, 232, 0.2), rgba(239, 237, 232, 0.2));

  @media screen and (min-width: 768px) {
    width: 479px;
  }
`,Mr=y.button`
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  color: var(--white);
  padding: 0px;
  width: 22px;
  height: 22px;
`,Vr=y.p`
  
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0px;
  text-align: left;
  color: var(--calendar-arrows);

`,Pr=y.span`
  font-family: Roboto;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: left;
  color: var(--white);
  font-size: 12px;
  line-height: 1.5;
  
`,Rr=y.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 64px;
  }
`,Lr=y.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,kr=y.input`
  width: 100%;
  height: 34px;
  padding: 8px 14px 8px 14px;
  border-radius: 12px;
  border: 1px solid var(--orange);
  background: rgba(0, 0, 0, 0);
  color: var(--white);
  outline: none;

  :hover,
  :focus {
    border: 1px solid var(--orange-1);
  }
  @media screen and (min-width: 768px) {
    height: 40px;
  }
`;y.div`
 
  
`;const Tr=y.div`
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 155px;
    height: 40px;
  }
`,Br=y.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  position: absolute;
  top: 8px;
  right: 10px;
  pointer-events: none;
  color: var(--calendar-arrows);

  @media screen and (min-width: 768px) {
    top:11px;
    right: 14px;
  }
`,jr=y.div`
  display: flex;
`,$r=y.button`
  padding: 12px 32px 12px 32px;
  border-radius: 12px;
  background: var(--orange);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  color: var(--white);
  margin-right: 14px;

  &:hover,
  :focus {
    background-color: var(--orange-1);
    outline: none;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    line-height: 1.5; 
  }
`,Hr=y.button`
  padding: 11px 35px 11px 35px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  color: var(--white);
  border: 1px solid var(--border);

  &:hover,
  :focus {
    border: 1px solid var(--orange);
    outline: none;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 39px;
    font-size: 20px;
    line-height: 1.2;
  }
`,zr=y.div`
    width: 287px;
    height: 34px;
    border-radius: 12px;
    border: 1px solid var(--orange);
    background-color: rgba(0,0,0,0);
    padding: 8px 14px;
    

    @media screen and (min-width: 768px){
    width: 244px;
    height: 40px;
  }

`,Nr=y.p`
color: var(--input-border);

font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.28;

@media screen and (min-width: 768px){
    font-size: 16px;
    line-height: 1.5;
  }
`,Ur=()=>{nn.warn("error",{position:"top-center",theme:"dark"})};function _r(n){let t=n.getDate(),i=n.getMonth()+1;const o=n.getFullYear();return t=t<10?`0${t}`:t,i=i<10?`0${i}`:i,`${o}-${i}-${t}`}const Wr=({onClose:n,open:t,title:i,calories:o,id:e})=>{const[a,u]=p.useState(!1),[l,r]=p.useState(0),[s,c]=p.useState(""),d=`${i[0].toUpperCase()+i.slice(1,111)}`,m=p.useCallback(b=>{b.key==="Escape"&&n()},[n]);p.useEffect(()=>(document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m)}),[m]);const h=b=>{const f=Number(b.target.value)*o/100;f&&r(f),c(b.target.value)},v=async b=>{b.preventDefault();const f={date:_r(new Date),productData:{productId:`${e}`,amount:Number(s)}};tn(f).then(x=>{u(!0)}).catch(x=>{Ur()})};return g.jsx(g.Fragment,{children:g.jsxs(Ir,{onClick:n,children:[g.jsx(en,{}),a?g.jsx(Dr,{onClose:n,actualCalories:l}):g.jsxs(Ar,{onClick:b=>b.stopPropagation(),children:[g.jsx(Mr,{children:g.jsx(mt,{onClick:n,size:"22px"})}),g.jsxs(Rr,{name:"addProductForm",onSubmit:v,children:[g.jsxs(Lr,{children:[g.jsx(zr,{children:g.jsx(Nr,{children:d})}),g.jsxs(Tr,{children:[g.jsx(kr,{type:"text",value:s,onChange:h,required:!0,pattern:"[0-9]{1,5}",min:1}),g.jsx(Br,{children:"grams"})]}),g.jsxs(Vr,{children:["Calories: "," ",g.jsx(Pr,{children:l})]})]}),g.jsxs(jr,{children:[g.jsx($r,{type:"submit",children:"Add to diary"}),g.jsx(Hr,{type:"button",onClick:n,children:"Cancel"})]})]})]})]})})};let Me;const Gr=()=>{window.screen.width<1440?Me=!0:Me=!1};Gr();function Yr({productItem:n}){const[t,i]=p.useState(!1),o=()=>{i(!1),document.body.style.overflow="auto"},{weight:e,calories:a,category:u,title:l,groupBloodNotAllowed:r,_id:s}=n,c=gt(h=>h.profile.profile.blood),d=()=>{if(l){const h=l[0].toUpperCase();let v;return Me?(v=`${h+l.slice(1,19)}`,l.length>19?`${v}...`:v):(v=`${h+l.slice(1,24)}`,l.length>24?`${v}...`:v)}return""},m=()=>{if(u){const v=`${u[0].toUpperCase()+u.slice(1,10)}`;return u.length>10?`${v}...`:v}return""};return g.jsxs(g.Fragment,{children:[g.jsxs(ur,{children:[g.jsxs(sr,{children:[g.jsx(lr,{children:"DIET"}),g.jsxs(cr,{children:[r[c]?g.jsxs(g.Fragment,{children:[g.jsx(ht,{color:"#E9101D"}),g.jsx(ft,{children:"Not recommended"})]}):g.jsxs(g.Fragment,{children:[g.jsx(ht,{color:"#419B09"}),g.jsx(ft,{children:"Recommended"})]}),g.jsxs(dr,{onClick:()=>{i(!0),document.body.style.overflow="hidden"},children:["Add",g.jsx(pr,{children:g.jsx("use",{href:ie+"#icon-arrow"})})]})]})]}),g.jsxs(fr,{children:[g.jsx(hr,{children:g.jsx("use",{href:ie+"#icon-icon"})}),g.jsx(mr,{children:d()}),g.jsxs(gr,{children:[g.jsxs(we,{children:["Calories: ",g.jsxs(Oe,{children:[" ",a]})]}),g.jsxs(we,{children:["Category: ",g.jsx(Oe,{children:m()})]}),g.jsxs(we,{children:["Weight: ",g.jsx(Oe,{children:e})]})]})]})]}),t&&g.jsx(Wr,{onClose:o,title:l,calories:a,id:s})]})}function qr({products:n,isFetching:t}){return g.jsx(rr,{className:"custom-list",children:n.length===0&&!t?g.jsxs(ar,{children:[g.jsxs(dt,{children:[g.jsx(pt,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),g.jsx(dt,{children:g.jsx(pt,{children:"Try changing the search parameters."})})]}):n.map(i=>g.jsx(Yr,{productItem:i},i._id))})}const Kr="/project-daily-energy-dose/assets/side-view-people-training-gym-071babdb.jpg",Xr="/project-daily-energy-dose/assets/side-view-people-training-gym@max-9cb7ca4d.jpg",Zr=[{id:"fdg12sdgdfdffsfd",value:"all",label:"All"},{id:"fdg12234sdfsdgsfd",value:"recommended",label:"Recommended"},{id:"fdg12asdf123gdfsdgsfd",value:"not-recommended",label:"Not recommended"}];function ta(){gt(E=>E.auth.token);const[n,t]=p.useState(""),[i,o]=p.useState(""),[e,a]=p.useState(""),[u,l]=p.useState(1),[r,s]=p.useState(!1),[c,d]=p.useState(0),[m,h]=p.useState([]),[v,b]=p.useState([]);p.useEffect(()=>{const E=document.querySelector(".custom-list");return E.addEventListener("scroll",f),function(){E.removeEventListener("scroll",f)}},[c,m]),p.useEffect(()=>{on().then(w=>{b(w.data)}),ze({params:{page:u,category:n,groupBloodNotAllowed:i,search:e}}).then(({data:w})=>{h(w.data),d(w.total),l(2)})},[]),p.useEffect(()=>{r&&ze({params:{page:u,category:n,groupBloodNotAllowed:i,search:e}}).then(({data:w})=>{h([...m,...w.data]),d(w.total),l(C=>C+1)}).finally(()=>s(!1))},[r]);const f=E=>{E.target.scrollHeight-(E.target.scrollTop+window.innerHeight)<600&&m.length<c&&s(!0)},x=E=>{h([]),t(E.category),o(E.groupBloodNotAllowed),a(E.search),l(1),s(!0),d(0)};return g.jsx(pn,{bgi:[Kr,Xr],children:g.jsxs("div",{className:"container",children:[g.jsxs(hn,{children:[g.jsx(fn,{children:"Products"}),g.jsx(or,{setParams:x,initialCategory:v,initialRecommended:Zr})]}),g.jsx(qr,{products:m,isFetching:r})]})})}export{ta as default};
