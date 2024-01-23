import{B as Yt,r as p,E as qt,C as Kt,D as Xt,n as M,_ as w,y as Zt,j as E,s as de,k as H,c as Jt,F as Qt,G as ze}from"./index-bde1b2d5.js";import{e as ie,a as vt,h as en,_ as tn,b as nn,c as on,d as rn,g as an}from"./defineProperty-179e1ab7.js";import"./hoist-non-react-statics.cjs-8a3d9f43.js";import{G as un}from"./iconBase-eb5e9eef.js";var S=function(t,i){var o=arguments;if(i==null||!Yt.call(i,"css"))return p.createElement.apply(void 0,o);var e=o.length,a=new Array(e);a[0]=qt,a[1]=Kt(t,i);for(var u=2;u<e;u++)a[u]=o[u];return p.createElement.apply(null,a)};function Pe(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return Xt(t)}var sn=function(){var t=Pe.apply(void 0,arguments),i="animation-"+t.name;return{name:i,styles:"@keyframes "+i+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const ln=M.section`
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
`,cn=M.h1`
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
`,dn=M.div`
  @media screen and (min-width: 1440px){
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
  }
`;function Ue(n,t){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),i.push.apply(i,o)}return i}function F(n){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Ue(Object(i),!0).forEach(function(o){ie(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Ue(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function pn(n){if(Array.isArray(n))return n}function fn(n,t){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var o,e,a,u,l=[],r=!0,s=!1;try{if(a=(i=i.call(n)).next,t===0){if(Object(i)!==i)return;r=!1}else for(;!(r=(o=a.call(i)).done)&&(l.push(o.value),l.length!==t);r=!0);}catch(c){s=!0,e=c}finally{try{if(!r&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(s)throw e}}return l}}function hn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(n,t){return pn(n)||fn(n,t)||vt(n,t)||hn()}function mn(n,t){if(n==null)return{};var i={},o=Object.keys(n),e,a;for(a=0;a<o.length;a++)e=o[a],!(t.indexOf(e)>=0)&&(i[e]=n[e]);return i}function X(n,t){if(n==null)return{};var i=mn(n,t),o,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)o=a[e],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var vn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function gn(n){var t=n.defaultInputValue,i=t===void 0?"":t,o=n.defaultMenuIsOpen,e=o===void 0?!1:o,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,r=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,f=n.onMenuOpen,m=n.value,v=X(n,vn),b=p.useState(l!==void 0?l:i),h=K(b,2),g=h[0],x=h[1],y=p.useState(r!==void 0?r:e),C=K(y,2),D=C[0],I=C[1],A=p.useState(m!==void 0?m:u),O=K(A,2),V=O[0],k=O[1],j=p.useCallback(function(N,Z){typeof s=="function"&&s(N,Z),k(N)},[s]),B=p.useCallback(function(N,Z){var J;typeof c=="function"&&(J=c(N,Z)),x(J!==void 0?J:N)},[c]),W=p.useCallback(function(){typeof f=="function"&&f(),I(!0)},[f]),G=p.useCallback(function(){typeof d=="function"&&d(),I(!1)},[d]),T=l!==void 0?l:g,R=r!==void 0?r:D,_=m!==void 0?m:V;return F(F({},v),{},{inputValue:T,menuIsOpen:R,onChange:j,onInputChange:B,onMenuClose:G,onMenuOpen:W,value:_})}function bn(n){if(Array.isArray(n))return en(n)}function En(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function xn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Re(n){return bn(n)||En(n)||vt(n)||xn()}function Cn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const Sn=Math.min,Fn=Math.max,pe=Math.round,ae=Math.floor,fe=n=>({x:n,y:n});function yn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function gt(n){return Et(n)?(n.nodeName||"").toLowerCase():"#document"}function U(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function bt(n){var t;return(t=(Et(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function Et(n){return n instanceof Node||n instanceof U(n).Node}function Ie(n){return n instanceof Element||n instanceof U(n).Element}function Le(n){return n instanceof HTMLElement||n instanceof U(n).HTMLElement}function _e(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof U(n).ShadowRoot}function xt(n){const{overflow:t,overflowX:i,overflowY:o,display:e}=Te(n);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(e)}function wn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function On(n){return["html","body","#document"].includes(gt(n))}function Te(n){return U(n).getComputedStyle(n)}function Dn(n){if(gt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||_e(n)&&n.host||bt(n);return _e(t)?t.host:t}function Ct(n){const t=Dn(n);return On(t)?n.ownerDocument?n.ownerDocument.body:n.body:Le(t)&&xt(t)?t:Ct(t)}function he(n,t,i){var o;t===void 0&&(t=[]),i===void 0&&(i=!0);const e=Ct(n),a=e===((o=n.ownerDocument)==null?void 0:o.body),u=U(e);return a?t.concat(u,u.visualViewport||[],xt(e)?e:[],u.frameElement&&i?he(u.frameElement):[]):t.concat(e,he(e,[],i))}function In(n){const t=Te(n);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const e=Le(n),a=e?n.offsetWidth:i,u=e?n.offsetHeight:o,l=pe(i)!==a||pe(o)!==u;return l&&(i=a,o=u),{width:i,height:o,$:l}}function ke(n){return Ie(n)?n:n.contextElement}function Ee(n){const t=ke(n);if(!Le(t))return fe(1);const i=t.getBoundingClientRect(),{width:o,height:e,$:a}=In(t);let u=(a?pe(i.width):i.width)/o,l=(a?pe(i.height):i.height)/e;return(!u||!Number.isFinite(u))&&(u=1),(!l||!Number.isFinite(l))&&(l=1),{x:u,y:l}}const An=fe(0);function Mn(n){const t=U(n);return!wn()||!t.visualViewport?An:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Vn(n,t,i){return t===void 0&&(t=!1),!i||t&&i!==U(n)?!1:t}function We(n,t,i,o){t===void 0&&(t=!1),i===void 0&&(i=!1);const e=n.getBoundingClientRect(),a=ke(n);let u=fe(1);t&&(o?Ie(o)&&(u=Ee(o)):u=Ee(n));const l=Vn(a,i,o)?Mn(a):fe(0);let r=(e.left+l.x)/u.x,s=(e.top+l.y)/u.y,c=e.width/u.x,d=e.height/u.y;if(a){const f=U(a),m=o&&Ie(o)?U(o):o;let v=f.frameElement;for(;v&&o&&m!==f;){const b=Ee(v),h=v.getBoundingClientRect(),g=Te(v),x=h.left+(v.clientLeft+parseFloat(g.paddingLeft))*b.x,y=h.top+(v.clientTop+parseFloat(g.paddingTop))*b.y;r*=b.x,s*=b.y,c*=b.x,d*=b.y,r+=x,s+=y,v=U(v).frameElement}}return yn({width:c,height:d,x:r,y:s})}function Pn(n,t){let i=null,o;const e=bt(n);function a(){clearTimeout(o),i&&i.disconnect(),i=null}function u(l,r){l===void 0&&(l=!1),r===void 0&&(r=1),a();const{left:s,top:c,width:d,height:f}=n.getBoundingClientRect();if(l||t(),!d||!f)return;const m=ae(c),v=ae(e.clientWidth-(s+d)),b=ae(e.clientHeight-(c+f)),h=ae(s),x={rootMargin:-m+"px "+-v+"px "+-b+"px "+-h+"px",threshold:Fn(0,Sn(1,r))||1};let y=!0;function C(D){const I=D[0].intersectionRatio;if(I!==r){if(!y)return u();I?u(!1,I):o=setTimeout(()=>{u(!1,1e-7)},100)}y=!1}try{i=new IntersectionObserver(C,{...x,root:e.ownerDocument})}catch{i=new IntersectionObserver(C,x)}i.observe(n)}return u(!0),a}function Rn(n,t,i,o){o===void 0&&(o={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:r=!1}=o,s=ke(n),c=e||a?[...s?he(s):[],...he(t)]:[];c.forEach(g=>{e&&g.addEventListener("scroll",i,{passive:!0}),a&&g.addEventListener("resize",i)});const d=s&&l?Pn(s,i):null;let f=-1,m=null;u&&(m=new ResizeObserver(g=>{let[x]=g;x&&x.target===s&&m&&(m.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{m&&m.observe(t)})),i()}),s&&!r&&m.observe(s),m.observe(t));let v,b=r?We(n):null;r&&h();function h(){const g=We(n);b&&(g.x!==b.x||g.y!==b.y||g.width!==b.width||g.height!==b.height)&&i(),b=g,v=requestAnimationFrame(h)}return i(),()=>{c.forEach(g=>{e&&g.removeEventListener("scroll",i),a&&g.removeEventListener("resize",i)}),d&&d(),m&&m.disconnect(),m=null,r&&cancelAnimationFrame(v)}}var Ae=p.useLayoutEffect,Ln=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],me=function(){};function Tn(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function kn(n,t){for(var i=arguments.length,o=new Array(i>2?i-2:0),e=2;e<i;e++)o[e-2]=arguments[e];var a=[].concat(o);if(t&&n)for(var u in t)t.hasOwnProperty(u)&&t[u]&&a.push("".concat(Tn(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Ge=function(t){return Wn(t)?t.filter(Boolean):tn(t)==="object"&&t!==null?[t]:[]},St=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=X(t,Ln);return F({},i)},P=function(t,i,o){var e=t.cx,a=t.getStyles,u=t.getClassNames,l=t.className;return{css:a(i,t),className:e(o??{},u(i,t),l)}};function be(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Bn(n){return be(n)?window.innerHeight:n.clientHeight}function Ft(n){return be(n)?window.pageYOffset:n.scrollTop}function ve(n,t){if(be(n)){window.scrollTo(0,t);return}n.scrollTop=t}function jn(n){var t=getComputedStyle(n),i=t.position==="absolute",o=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(i&&t.position==="static")&&o.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function Hn(n,t,i,o){return i*((n=n/o-1)*n*n+1)+t}function ue(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:me,e=Ft(n),a=t-e,u=10,l=0;function r(){l+=u;var s=Hn(l,e,a,i);ve(n,s),l<i?window.requestAnimationFrame(r):o(n)}r()}function Ye(n,t){var i=n.getBoundingClientRect(),o=t.getBoundingClientRect(),e=t.offsetHeight/3;o.bottom+e>i.bottom?ve(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):o.top-e<i.top&&ve(n,Math.max(t.offsetTop-e,0))}function $n(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function qe(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Nn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var yt=!1,zn={get passive(){return yt=!0}},se=typeof window<"u"?window:{};se.addEventListener&&se.removeEventListener&&(se.addEventListener("p",me,zn),se.removeEventListener("p",me,!1));var Un=yt;function _n(n){return n!=null}function Wn(n){return Array.isArray(n)}function le(n,t,i){return n?t:i}var Gn=function(t){for(var i=arguments.length,o=new Array(i>1?i-1:0),e=1;e<i;e++)o[e-1]=arguments[e];var a=Object.entries(t).filter(function(u){var l=K(u,1),r=l[0];return!o.includes(r)});return a.reduce(function(u,l){var r=K(l,2),s=r[0],c=r[1];return u[s]=c,u},{})},Yn=["children","innerProps"],qn=["children","innerProps"];function Kn(n){var t=n.maxHeight,i=n.menuEl,o=n.minHeight,e=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,r=jn(i),s={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return s;var c=r.getBoundingClientRect(),d=c.height,f=i.getBoundingClientRect(),m=f.bottom,v=f.height,b=f.top,h=i.offsetParent.getBoundingClientRect(),g=h.top,x=u?window.innerHeight:Bn(r),y=Ft(r),C=parseInt(getComputedStyle(i).marginBottom,10),D=parseInt(getComputedStyle(i).marginTop,10),I=g-D,A=x-b,O=I+y,V=d-y-b,k=m-x+y+C,j=y+b-D,B=160;switch(e){case"auto":case"bottom":if(A>=v)return{placement:"bottom",maxHeight:t};if(V>=v&&!u)return a&&ue(r,k,B),{placement:"bottom",maxHeight:t};if(!u&&V>=o||u&&A>=o){a&&ue(r,k,B);var W=u?A-C:V-C;return{placement:"bottom",maxHeight:W}}if(e==="auto"||u){var G=t,T=u?I:O;return T>=o&&(G=Math.min(T-C-l,t)),{placement:"top",maxHeight:G}}if(e==="bottom")return a&&ve(r,k),{placement:"bottom",maxHeight:t};break;case"top":if(I>=v)return{placement:"top",maxHeight:t};if(O>=v&&!u)return a&&ue(r,j,B),{placement:"top",maxHeight:t};if(!u&&O>=o||u&&I>=o){var R=t;return(!u&&O>=o||u&&I>=o)&&(R=u?I-D:O-D),a&&ue(r,j,B),{placement:"top",maxHeight:R}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return s}function Xn(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var wt=function(t){return t==="auto"?"bottom":t},Zn=function(t,i){var o,e=t.placement,a=t.theme,u=a.borderRadius,l=a.spacing,r=a.colors;return F((o={label:"menu"},ie(o,Xn(e),"100%"),ie(o,"position","absolute"),ie(o,"width","100%"),ie(o,"zIndex",1),o),i?{}:{backgroundColor:r.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Ot=p.createContext(null),Jn=function(t){var i=t.children,o=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,u=t.menuPosition,l=t.menuShouldScrollIntoView,r=t.theme,s=p.useContext(Ot)||{},c=s.setPortalPlacement,d=p.useRef(null),f=p.useState(e),m=K(f,2),v=m[0],b=m[1],h=p.useState(null),g=K(h,2),x=g[0],y=g[1],C=r.spacing.controlHeight;return Ae(function(){var D=d.current;if(D){var I=u==="fixed",A=l&&!I,O=Kn({maxHeight:e,menuEl:D,minHeight:o,placement:a,shouldScroll:A,isFixedPosition:I,controlHeight:C});b(O.maxHeight),y(O.placement),c==null||c(O.placement)}},[e,a,u,l,o,c,C]),i({ref:d,placerProps:F(F({},t),{},{placement:x||wt(a),maxHeight:v})})},Qn=function(t){var i=t.children,o=t.innerRef,e=t.innerProps;return S("div",w({},P(t,"menu",{menu:!0}),{ref:o},e),i)},ei=Qn,ti=function(t,i){var o=t.maxHeight,e=t.theme.spacing.baseUnit;return F({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:e,paddingTop:e})},ni=function(t){var i=t.children,o=t.innerProps,e=t.innerRef,a=t.isMulti;return S("div",w({},P(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},o),i)},Dt=function(t,i){var o=t.theme,e=o.spacing.baseUnit,a=o.colors;return F({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},ii=Dt,oi=Dt,ri=function(t){var i=t.children,o=i===void 0?"No options":i,e=t.innerProps,a=X(t,Yn);return S("div",w({},P(F(F({},a),{},{children:o,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),o)},ai=function(t){var i=t.children,o=i===void 0?"Loading...":i,e=t.innerProps,a=X(t,qn);return S("div",w({},P(F(F({},a),{},{children:o,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),o)},ui=function(t){var i=t.rect,o=t.offset,e=t.position;return{left:i.left,position:e,top:o,width:i.width,zIndex:1}},si=function(t){var i=t.appendTo,o=t.children,e=t.controlElement,a=t.innerProps,u=t.menuPlacement,l=t.menuPosition,r=p.useRef(null),s=p.useRef(null),c=p.useState(wt(u)),d=K(c,2),f=d[0],m=d[1],v=p.useMemo(function(){return{setPortalPlacement:m}},[]),b=p.useState(null),h=K(b,2),g=h[0],x=h[1],y=p.useCallback(function(){if(e){var A=$n(e),O=l==="fixed"?0:window.pageYOffset,V=A[f]+O;(V!==(g==null?void 0:g.offset)||A.left!==(g==null?void 0:g.rect.left)||A.width!==(g==null?void 0:g.rect.width))&&x({offset:V,rect:A})}},[e,l,f,g==null?void 0:g.offset,g==null?void 0:g.rect.left,g==null?void 0:g.rect.width]);Ae(function(){y()},[y]);var C=p.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),e&&r.current&&(s.current=Rn(e,r.current,y,{elementResize:"ResizeObserver"in window}))},[e,y]);Ae(function(){C()},[C]);var D=p.useCallback(function(A){r.current=A,C()},[C]);if(!i&&l!=="fixed"||!g)return null;var I=S("div",w({ref:D},P(F(F({},t),{},{offset:g.offset,position:l,rect:g.rect}),"menuPortal",{"menu-portal":!0}),a),o);return S(Ot.Provider,{value:v},i?Zt.createPortal(I,i):I)},li=function(t){var i=t.isDisabled,o=t.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},ci=function(t){var i=t.children,o=t.innerProps,e=t.isDisabled,a=t.isRtl;return S("div",w({},P(t,"container",{"--is-disabled":e,"--is-rtl":a}),o),i)},di=function(t,i){var o=t.theme.spacing,e=t.isMulti,a=t.hasValue,u=t.selectProps.controlShouldRenderValue;return F({alignItems:"center",display:e&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},pi=function(t){var i=t.children,o=t.innerProps,e=t.isMulti,a=t.hasValue;return S("div",w({},P(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),o),i)},fi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},hi=function(t){var i=t.children,o=t.innerProps;return S("div",w({},P(t,"indicatorsContainer",{indicators:!0}),o),i)},Ke,mi=["size"],vi=["innerProps","isRtl","size"],gi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},It=function(t){var i=t.size,o=X(t,mi);return S("svg",w({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:gi},o))},Be=function(t){return S(It,w({size:20},t),S("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},At=function(t){return S(It,w({size:20},t),S("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Mt=function(t,i){var o=t.isFocused,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return F({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:o?u.neutral60:u.neutral20,padding:a*2,":hover":{color:o?u.neutral80:u.neutral40}})},bi=Mt,Ei=function(t){var i=t.children,o=t.innerProps;return S("div",w({},P(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),i||S(At,null))},xi=Mt,Ci=function(t){var i=t.children,o=t.innerProps;return S("div",w({},P(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),i||S(Be,null))},Si=function(t,i){var o=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return F({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:o?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Fi=function(t){var i=t.innerProps;return S("span",w({},i,P(t,"indicatorSeparator",{"indicator-separator":!0})))},yi=sn(Ke||(Ke=Cn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),wi=function(t,i){var o=t.isFocused,e=t.size,a=t.theme,u=a.colors,l=a.spacing.baseUnit;return F({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},i?{}:{color:o?u.neutral60:u.neutral20,padding:l*2})},xe=function(t){var i=t.delay,o=t.offset;return S("span",{css:Pe({animation:"".concat(yi," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Oi=function(t){var i=t.innerProps,o=t.isRtl,e=t.size,a=e===void 0?4:e,u=X(t,vi);return S("div",w({},P(F(F({},u),{},{innerProps:i,isRtl:o,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),S(xe,{delay:0,offset:o}),S(xe,{delay:160,offset:!0}),S(xe,{delay:320,offset:!o}))},Di=function(t,i){var o=t.isDisabled,e=t.isFocused,a=t.theme,u=a.colors,l=a.borderRadius,r=a.spacing;return F({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:r.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:o?u.neutral5:u.neutral0,borderColor:o?u.neutral10:e?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:e?u.primary:u.neutral30}})},Ii=function(t){var i=t.children,o=t.isDisabled,e=t.isFocused,a=t.innerRef,u=t.innerProps,l=t.menuIsOpen;return S("div",w({ref:a},P(t,"control",{control:!0,"control--is-disabled":o,"control--is-focused":e,"control--menu-is-open":l}),u,{"aria-disabled":o||void 0}),i)},Ai=Ii,Mi=["data"],Vi=function(t,i){var o=t.theme.spacing;return i?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},Pi=function(t){var i=t.children,o=t.cx,e=t.getStyles,a=t.getClassNames,u=t.Heading,l=t.headingProps,r=t.innerProps,s=t.label,c=t.theme,d=t.selectProps;return S("div",w({},P(t,"group",{group:!0}),r),S(u,w({},l,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:o}),s),S("div",null,i))},Ri=function(t,i){var o=t.theme,e=o.colors,a=o.spacing;return F({label:"group",cursor:"default",display:"block"},i?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Li=function(t){var i=St(t);i.data;var o=X(i,Mi);return S("div",w({},P(t,"groupHeading",{"group-heading":!0}),o))},Ti=Pi,ki=["innerRef","isDisabled","isHidden","inputClassName"],Bi=function(t,i){var o=t.isDisabled,e=t.value,a=t.theme,u=a.spacing,l=a.colors;return F(F({visibility:o?"hidden":"visible",transform:e?"translateZ(0)":""},ji),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},Vt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},ji={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":F({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Vt)},Hi=function(t){return F({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Vt)},$i=function(t){var i=t.cx,o=t.value,e=St(t),a=e.innerRef,u=e.isDisabled,l=e.isHidden,r=e.inputClassName,s=X(e,ki);return S("div",w({},P(t,"input",{"input-container":!0}),{"data-value":o||""}),S("input",w({className:i({input:!0},r),ref:a,style:Hi(l),disabled:u},s)))},Ni=$i,zi=function(t,i){var o=t.theme,e=o.spacing,a=o.borderRadius,u=o.colors;return F({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},Ui=function(t,i){var o=t.theme,e=o.borderRadius,a=o.colors,u=t.cropWithEllipsis;return F({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},_i=function(t,i){var o=t.theme,e=o.spacing,a=o.borderRadius,u=o.colors,l=t.isFocused;return F({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Pt=function(t){var i=t.children,o=t.innerProps;return S("div",o,i)},Wi=Pt,Gi=Pt;function Yi(n){var t=n.children,i=n.innerProps;return S("div",w({role:"button"},i),t||S(Be,{size:14}))}var qi=function(t){var i=t.children,o=t.components,e=t.data,a=t.innerProps,u=t.isDisabled,l=t.removeProps,r=t.selectProps,s=o.Container,c=o.Label,d=o.Remove;return S(s,{data:e,innerProps:F(F({},P(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:r},S(c,{data:e,innerProps:F({},P(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:r},i),S(d,{data:e,innerProps:F(F({},P(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:r}))},Ki=qi,Xi=function(t,i){var o=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.theme,l=u.spacing,r=u.colors;return F({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?r.primary:e?r.primary25:"transparent",color:o?r.neutral20:a?r.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:a?r.primary:r.primary50}})},Zi=function(t){var i=t.children,o=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.innerRef,l=t.innerProps;return S("div",w({},P(t,"option",{option:!0,"option--is-disabled":o,"option--is-focused":e,"option--is-selected":a}),{ref:u,"aria-disabled":o},l),i)},Ji=Zi,Qi=function(t,i){var o=t.theme,e=o.spacing,a=o.colors;return F({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},eo=function(t){var i=t.children,o=t.innerProps;return S("div",w({},P(t,"placeholder",{placeholder:!0}),o),i)},to=eo,no=function(t,i){var o=t.isDisabled,e=t.theme,a=e.spacing,u=e.colors;return F({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:o?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},io=function(t){var i=t.children,o=t.isDisabled,e=t.innerProps;return S("div",w({},P(t,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),e),i)},oo=io,ro={ClearIndicator:Ci,Control:Ai,DropdownIndicator:Ei,DownChevron:At,CrossIcon:Be,Group:Ti,GroupHeading:Li,IndicatorsContainer:hi,IndicatorSeparator:Fi,Input:Ni,LoadingIndicator:Oi,Menu:ei,MenuList:ni,MenuPortal:si,LoadingMessage:ai,NoOptionsMessage:ri,MultiValue:Ki,MultiValueContainer:Wi,MultiValueLabel:Gi,MultiValueRemove:Yi,Option:Ji,Placeholder:to,SelectContainer:ci,SingleValue:oo,ValueContainer:pi},ao=function(t){return F(F({},ro),t.components)},Xe=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function uo(n,t){return!!(n===t||Xe(n)&&Xe(t))}function so(n,t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(!uo(n[i],t[i]))return!1;return!0}function lo(n,t){t===void 0&&(t=so);var i=null;function o(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(i&&i.lastThis===this&&t(e,i.lastArgs))return i.lastResult;var u=n.apply(this,e);return i={lastResult:u,lastArgs:e,lastThis:this},u}return o.clear=function(){i=null},o}var co={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},po=function(t){return S("span",w({css:co},t))},Ze=po,fo={guidance:function(t){var i=t.isSearchable,o=t.isMulti,e=t.tabSelectsValue,a=t.context,u=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(e?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,o=t.label,e=o===void 0?"":o,a=t.labels,u=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var i=t.context,o=t.focused,e=t.options,a=t.label,u=a===void 0?"":a,l=t.selectValue,r=t.isDisabled,s=t.isSelected,c=t.isAppleDevice,d=function(b,h){return b&&b.length?"".concat(b.indexOf(h)+1," of ").concat(b.length):""};if(i==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,o),".");if(i==="menu"&&c){var f=r?" disabled":"",m="".concat(s?" selected":"").concat(f);return"".concat(u).concat(m,", ").concat(d(e,o),".")}return""},onFilter:function(t){var i=t.inputValue,o=t.resultsMessage;return"".concat(o).concat(i?" for search term "+i:"",".")}},ho=function(t){var i=t.ariaSelection,o=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,u=t.isFocused,l=t.selectValue,r=t.selectProps,s=t.id,c=t.isAppleDevice,d=r.ariaLiveMessages,f=r.getOptionLabel,m=r.inputValue,v=r.isMulti,b=r.isOptionDisabled,h=r.isSearchable,g=r.menuIsOpen,x=r.options,y=r.screenReaderStatus,C=r.tabSelectsValue,D=r.isLoading,I=r["aria-label"],A=r["aria-live"],O=p.useMemo(function(){return F(F({},fo),d||{})},[d]),V=p.useMemo(function(){var T="";if(i&&O.onChange){var R=i.option,_=i.options,N=i.removedValue,Z=i.removedValues,J=i.value,oe=function(q){return Array.isArray(q)?null:q},L=N||R||oe(J),$=L?f(L):"",Y=_||Z||void 0,Q=Y?Y.map(f):[],z=F({isDisabled:L&&b(L,l),label:$,labels:Q},i);T=O.onChange(z)}return T},[i,O,b,l,f]),k=p.useMemo(function(){var T="",R=o||e,_=!!(o&&l&&l.includes(o));if(R&&O.onFocus){var N={focused:R,label:f(R),isDisabled:b(R,l),isSelected:_,options:a,context:R===o?"menu":"value",selectValue:l,isAppleDevice:c};T=O.onFocus(N)}return T},[o,e,f,b,O,a,l,c]),j=p.useMemo(function(){var T="";if(g&&x.length&&!D&&O.onFilter){var R=y({count:a.length});T=O.onFilter({inputValue:m,resultsMessage:R})}return T},[a,m,g,O,x,y,D]),B=(i==null?void 0:i.action)==="initial-input-focus",W=p.useMemo(function(){var T="";if(O.guidance){var R=e?"value":g?"menu":"input";T=O.guidance({"aria-label":I,context:R,isDisabled:o&&b(o,l),isMulti:v,isSearchable:h,tabSelectsValue:C,isInitialFocus:B})}return T},[I,o,e,v,b,h,g,O,l,C,B]),G=S(p.Fragment,null,S("span",{id:"aria-selection"},V),S("span",{id:"aria-focused"},k),S("span",{id:"aria-results"},j),S("span",{id:"aria-guidance"},W));return S(p.Fragment,null,S(Ze,{id:s},B&&G),S(Ze,{"aria-live":A,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!B&&G))},mo=ho,Me=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],vo=new RegExp("["+Me.map(function(n){return n.letters}).join("")+"]","g"),Rt={};for(var Ce=0;Ce<Me.length;Ce++)for(var Se=Me[Ce],Fe=0;Fe<Se.letters.length;Fe++)Rt[Se.letters[Fe]]=Se.base;var Lt=function(t){return t.replace(vo,function(i){return Rt[i]})},go=lo(Lt),Je=function(t){return t.replace(/^\s+|\s+$/g,"")},bo=function(t){return"".concat(t.label," ").concat(t.value)},Eo=function(t){return function(i,o){if(i.data.__isNew__)return!0;var e=F({ignoreCase:!0,ignoreAccents:!0,stringify:bo,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,u=e.ignoreAccents,l=e.stringify,r=e.trim,s=e.matchFrom,c=r?Je(o):o,d=r?Je(l(i)):l(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=go(c),d=Lt(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},xo=["innerRef"];function Co(n){var t=n.innerRef,i=X(n,xo),o=Gn(i,"onExited","in","enter","exit","appear");return S("input",w({ref:t},o,{css:Pe({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var So=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function Fo(n){var t=n.isEnabled,i=n.onBottomArrive,o=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,u=p.useRef(!1),l=p.useRef(!1),r=p.useRef(0),s=p.useRef(null),c=p.useCallback(function(h,g){if(s.current!==null){var x=s.current,y=x.scrollTop,C=x.scrollHeight,D=x.clientHeight,I=s.current,A=g>0,O=C-D-y,V=!1;O>g&&u.current&&(o&&o(h),u.current=!1),A&&l.current&&(a&&a(h),l.current=!1),A&&g>O?(i&&!u.current&&i(h),I.scrollTop=C,V=!0,u.current=!0):!A&&-g>y&&(e&&!l.current&&e(h),I.scrollTop=0,V=!0,l.current=!0),V&&So(h)}},[i,o,e,a]),d=p.useCallback(function(h){c(h,h.deltaY)},[c]),f=p.useCallback(function(h){r.current=h.changedTouches[0].clientY},[]),m=p.useCallback(function(h){var g=r.current-h.changedTouches[0].clientY;c(h,g)},[c]),v=p.useCallback(function(h){if(h){var g=Un?{passive:!1}:!1;h.addEventListener("wheel",d,g),h.addEventListener("touchstart",f,g),h.addEventListener("touchmove",m,g)}},[m,f,d]),b=p.useCallback(function(h){h&&(h.removeEventListener("wheel",d,!1),h.removeEventListener("touchstart",f,!1),h.removeEventListener("touchmove",m,!1))},[m,f,d]);return p.useEffect(function(){if(t){var h=s.current;return v(h),function(){b(h)}}},[t,v,b]),function(h){s.current=h}}var Qe=["boxSizing","height","overflow","paddingRight","position"],et={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function tt(n){n.preventDefault()}function nt(n){n.stopPropagation()}function it(){var n=this.scrollTop,t=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===t&&(this.scrollTop=n-1)}function ot(){return"ontouchstart"in window||navigator.maxTouchPoints}var rt=!!(typeof window<"u"&&window.document&&window.document.createElement),ne=0,te={capture:!1,passive:!1};function yo(n){var t=n.isEnabled,i=n.accountForScrollbars,o=i===void 0?!0:i,e=p.useRef({}),a=p.useRef(null),u=p.useCallback(function(r){if(rt){var s=document.body,c=s&&s.style;if(o&&Qe.forEach(function(v){var b=c&&c[v];e.current[v]=b}),o&&ne<1){var d=parseInt(e.current.paddingRight,10)||0,f=document.body?document.body.clientWidth:0,m=window.innerWidth-f+d||0;Object.keys(et).forEach(function(v){var b=et[v];c&&(c[v]=b)}),c&&(c.paddingRight="".concat(m,"px"))}s&&ot()&&(s.addEventListener("touchmove",tt,te),r&&(r.addEventListener("touchstart",it,te),r.addEventListener("touchmove",nt,te))),ne+=1}},[o]),l=p.useCallback(function(r){if(rt){var s=document.body,c=s&&s.style;ne=Math.max(ne-1,0),o&&ne<1&&Qe.forEach(function(d){var f=e.current[d];c&&(c[d]=f)}),s&&ot()&&(s.removeEventListener("touchmove",tt,te),r&&(r.removeEventListener("touchstart",it,te),r.removeEventListener("touchmove",nt,te)))}},[o]);return p.useEffect(function(){if(t){var r=a.current;return u(r),function(){l(r)}}},[t,u,l]),function(r){a.current=r}}var wo=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Oo={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Do(n){var t=n.children,i=n.lockEnabled,o=n.captureEnabled,e=o===void 0?!0:o,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,r=n.onTopLeave,s=Fo({isEnabled:e,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:r}),c=yo({isEnabled:i}),d=function(m){s(m),c(m)};return S(p.Fragment,null,i&&S("div",{onClick:wo,css:Oo}),t(d))}var Io={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Ao=function(t){var i=t.name,o=t.onFocus;return S("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:Io,value:"",onChange:function(){}})},Mo=Ao;function je(n){var t;return typeof window<"u"&&window.navigator!=null?n.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function Vo(){return je(/^iPhone/i)}function Tt(){return je(/^Mac/i)}function Po(){return je(/^iPad/i)||Tt()&&navigator.maxTouchPoints>1}function Ro(){return Vo()||Po()}function Lo(){return Tt()||Ro()}var To=function(t){return t.label},ko=function(t){return t.label},Bo=function(t){return t.value},jo=function(t){return!!t.isDisabled},Ho={clearIndicator:xi,container:li,control:Di,dropdownIndicator:bi,group:Vi,groupHeading:Ri,indicatorsContainer:fi,indicatorSeparator:Si,input:Bi,loadingIndicator:wi,loadingMessage:oi,menu:Zn,menuList:ti,menuPortal:ui,multiValue:zi,multiValueLabel:Ui,multiValueRemove:_i,noOptionsMessage:ii,option:Xi,placeholder:Qi,singleValue:no,valueContainer:di},$o={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},No=4,kt=4,zo=38,Uo=kt*2,_o={baseUnit:kt,controlHeight:zo,menuGutter:Uo},ye={borderRadius:No,colors:$o,spacing:_o},Wo={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:qe(),captureMenuScroll:!qe(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Eo(),formatGroupLabel:To,getOptionLabel:ko,getOptionValue:Bo,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:jo,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Nn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function at(n,t,i,o){var e=Ht(n,t,i),a=$t(n,t,i),u=jt(n,t),l=ge(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:u,value:l,index:o}}function ce(n,t){return n.options.map(function(i,o){if("options"in i){var e=i.options.map(function(u,l){return at(n,u,t,l)}).filter(function(u){return st(n,u)});return e.length>0?{type:"group",data:i,options:e,index:o}:void 0}var a=at(n,i,t,o);return st(n,a)?a:void 0}).filter(_n)}function Bt(n){return n.reduce(function(t,i){return i.type==="group"?t.push.apply(t,Re(i.options.map(function(o){return o.data}))):t.push(i.data),t},[])}function ut(n,t){return n.reduce(function(i,o){return o.type==="group"?i.push.apply(i,Re(o.options.map(function(e){return{data:e.data,id:"".concat(t,"-").concat(o.index,"-").concat(e.index)}}))):i.push({data:o.data,id:"".concat(t,"-").concat(o.index)}),i},[])}function Go(n,t){return Bt(ce(n,t))}function st(n,t){var i=n.inputValue,o=i===void 0?"":i,e=t.data,a=t.isSelected,u=t.label,l=t.value;return(!zt(n)||!a)&&Nt(n,{label:u,value:l,data:e},o)}function Yo(n,t){var i=n.focusedValue,o=n.selectValue,e=o.indexOf(i);if(e>-1){var a=t.indexOf(i);if(a>-1)return i;if(e<t.length)return t[e]}return null}function qo(n,t){var i=n.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var we=function(t,i){var o,e=(o=t.find(function(a){return a.data===i}))===null||o===void 0?void 0:o.id;return e||null},jt=function(t,i){return t.getOptionLabel(i)},ge=function(t,i){return t.getOptionValue(i)};function Ht(n,t,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,i):!1}function $t(n,t,i){if(i.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,i);var o=ge(n,t);return i.some(function(e){return ge(n,e)===o})}function Nt(n,t,i){return n.filterOption?n.filterOption(t,i):!0}var zt=function(t){var i=t.hideSelectedOptions,o=t.isMulti;return i===void 0?o:i},Ko=1,Ut=function(n){nn(i,n);var t=on(i);function i(o){var e;if(rn(this,i),e=t.call(this,o),e.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.isAppleDevice=Lo(),e.controlRef=null,e.getControlRef=function(r){e.controlRef=r},e.focusedOptionRef=null,e.getFocusedOptionRef=function(r){e.focusedOptionRef=r},e.menuListRef=null,e.getMenuListRef=function(r){e.menuListRef=r},e.inputRef=null,e.getInputRef=function(r){e.inputRef=r},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(r,s){var c=e.props,d=c.onChange,f=c.name;s.name=f,e.ariaOnChange(r,s),d(r,s)},e.setValue=function(r,s,c){var d=e.props,f=d.closeMenuOnSelect,m=d.isMulti,v=d.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:v}),f&&(e.setState({inputIsHiddenAfterUpdate:!m}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(r,{action:s,option:c})},e.selectOption=function(r){var s=e.props,c=s.blurInputOnSelect,d=s.isMulti,f=s.name,m=e.state.selectValue,v=d&&e.isOptionSelected(r,m),b=e.isOptionDisabled(r,m);if(v){var h=e.getOptionValue(r);e.setValue(m.filter(function(g){return e.getOptionValue(g)!==h}),"deselect-option",r)}else if(!b)d?e.setValue([].concat(Re(m),[r]),"select-option",r):e.setValue(r,"select-option");else{e.ariaOnChange(r,{action:"select-option",option:r,name:f});return}c&&e.blurInput()},e.removeValue=function(r){var s=e.props.isMulti,c=e.state.selectValue,d=e.getOptionValue(r),f=c.filter(function(v){return e.getOptionValue(v)!==d}),m=le(s,f,f[0]||null);e.onChange(m,{action:"remove-value",removedValue:r}),e.focusInput()},e.clearValue=function(){var r=e.state.selectValue;e.onChange(le(e.props.isMulti,[],null),{action:"clear",removedValues:r})},e.popValue=function(){var r=e.props.isMulti,s=e.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),f=le(r,d,d[0]||null);e.onChange(f,{action:"pop-value",removedValue:c})},e.getFocusedOptionId=function(r){return we(e.state.focusableOptionsWithIds,r)},e.getFocusableOptionsWithIds=function(){return ut(ce(e.props,e.state.selectValue),e.getElementId("option"))},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return kn.apply(void 0,[e.props.classNamePrefix].concat(s))},e.getOptionLabel=function(r){return jt(e.props,r)},e.getOptionValue=function(r){return ge(e.props,r)},e.getStyles=function(r,s){var c=e.props.unstyled,d=Ho[r](s,c);d.boxSizing="border-box";var f=e.props.styles[r];return f?f(d,s):d},e.getClassNames=function(r,s){var c,d;return(c=(d=e.props.classNames)[r])===null||c===void 0?void 0:c.call(d,s)},e.getElementId=function(r){return"".concat(e.state.instancePrefix,"-").concat(r)},e.getComponents=function(){return ao(e.props)},e.buildCategorizedOptions=function(){return ce(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return Bt(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(r,s){e.setState({ariaSelection:F({value:r},s)})},e.onMenuMouseDown=function(r){r.button===0&&(r.stopPropagation(),r.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(r){e.blockOptionHover=!1},e.onControlMouseDown=function(r){if(!r.defaultPrevented){var s=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&e.onMenuClose():s&&e.openMenu("first"):(s&&(e.openAfterFocus=!0),e.focusInput()),r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&r.preventDefault()}},e.onDropdownIndicatorMouseDown=function(r){if(!(r&&r.type==="mousedown"&&r.button!==0)&&!e.props.isDisabled){var s=e.props,c=s.isMulti,d=s.menuIsOpen;e.focusInput(),d?(e.setState({inputIsHiddenAfterUpdate:!c}),e.onMenuClose()):e.openMenu("first"),r.preventDefault()}},e.onClearIndicatorMouseDown=function(r){r&&r.type==="mousedown"&&r.button!==0||(e.clearValue(),r.preventDefault(),e.openAfterFocus=!1,r.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(r){typeof e.props.closeMenuOnScroll=="boolean"?r.target instanceof HTMLElement&&be(r.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(r)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(r){var s=r.touches,c=s&&s.item(0);c&&(e.initialTouchX=c.clientX,e.initialTouchY=c.clientY,e.userIsDragging=!1)},e.onTouchMove=function(r){var s=r.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-e.initialTouchX),f=Math.abs(c.clientY-e.initialTouchY),m=5;e.userIsDragging=d>m||f>m}},e.onTouchEnd=function(r){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(r.target)&&e.menuListRef&&!e.menuListRef.contains(r.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(r){e.userIsDragging||e.onControlMouseDown(r)},e.onClearIndicatorTouchEnd=function(r){e.userIsDragging||e.onClearIndicatorMouseDown(r)},e.onDropdownIndicatorTouchEnd=function(r){e.userIsDragging||e.onDropdownIndicatorMouseDown(r)},e.handleInputChange=function(r){var s=e.props.inputValue,c=r.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(c,{action:"input-change",prevInputValue:s}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(r){e.props.onFocus&&e.props.onFocus(r),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(r){var s=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(r),e.onInputChange("",{action:"input-blur",prevInputValue:s}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(r){if(!(e.blockOptionHover||e.state.focusedOption===r)){var s=e.getFocusableOptions(),c=s.indexOf(r);e.setState({focusedOption:r,focusedOptionId:c>-1?e.getFocusedOptionId(r):null})}},e.shouldHideSelectedOptions=function(){return zt(e.props)},e.onValueInputFocus=function(r){r.preventDefault(),r.stopPropagation(),e.focus()},e.onKeyDown=function(r){var s=e.props,c=s.isMulti,d=s.backspaceRemovesValue,f=s.escapeClearsValue,m=s.inputValue,v=s.isClearable,b=s.isDisabled,h=s.menuIsOpen,g=s.onKeyDown,x=s.tabSelectsValue,y=s.openMenuOnFocus,C=e.state,D=C.focusedOption,I=C.focusedValue,A=C.selectValue;if(!b&&!(typeof g=="function"&&(g(r),r.defaultPrevented))){switch(e.blockOptionHover=!0,r.key){case"ArrowLeft":if(!c||m)return;e.focusValue("previous");break;case"ArrowRight":if(!c||m)return;e.focusValue("next");break;case"Delete":case"Backspace":if(m)return;if(I)e.removeValue(I);else{if(!d)return;c?e.popValue():v&&e.clearValue()}break;case"Tab":if(e.isComposing||r.shiftKey||!h||!x||!D||y&&e.isOptionSelected(D,A))return;e.selectOption(D);break;case"Enter":if(r.keyCode===229)break;if(h){if(!D||e.isComposing)return;e.selectOption(D);break}return;case"Escape":h?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:m}),e.onMenuClose()):v&&f&&e.clearValue();break;case" ":if(m)return;if(!h){e.openMenu("first");break}if(!D)return;e.selectOption(D);break;case"ArrowUp":h?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":h?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!h)return;e.focusOption("pageup");break;case"PageDown":if(!h)return;e.focusOption("pagedown");break;case"Home":if(!h)return;e.focusOption("first");break;case"End":if(!h)return;e.focusOption("last");break;default:return}r.preventDefault()}},e.state.instancePrefix="react-select-"+(e.props.instanceId||++Ko),e.state.selectValue=Ge(o.value),o.menuIsOpen&&e.state.selectValue.length){var a=e.getFocusableOptionsWithIds(),u=e.buildFocusableOptions(),l=u.indexOf(e.state.selectValue[0]);e.state.focusableOptionsWithIds=a,e.state.focusedOption=u[l],e.state.focusedOptionId=we(a,u[l])}return e}return an(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ye(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,r=this.state.isFocused;(r&&!u&&e.isDisabled||r&&l&&!e.menuIsOpen)&&this.focusInput(),r&&u&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!r&&!u&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ye(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,u=this.state,l=u.selectValue,r=u.isFocused,s=this.buildFocusableOptions(),c=e==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(r&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var r=u.indexOf(l);l||(r=-1);var s=u.length-1,c=-1;if(u.length){switch(e){case"previous":r===0?c=0:r===-1?c=s:c=r-1;break;case"next":r>-1&&r<s&&(c=r+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var r=0,s=l.indexOf(u);u||(s=-1),e==="up"?r=s>0?s-1:l.length-1:e==="down"?r=(s+1)%l.length:e==="pageup"?(r=s-a,r<0&&(r=0)):e==="pagedown"?(r=s+a,r>l.length-1&&(r=l.length-1)):e==="last"&&(r=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[r],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[r])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ye):F(F({},ye),this.props.theme):ye}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,r=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,f=d.isMulti,m=d.isRtl,v=d.options,b=this.hasValue();return{clearValue:e,cx:a,getStyles:u,getClassNames:l,getValue:r,hasValue:b,isMulti:f,isRtl:m,options:v,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,u=e.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(e,a){return Ht(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return $t(this.props,e,a)}},{key:"filterOption",value:function(e,a){return Nt(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,u=e.isSearchable,l=e.inputId,r=e.inputValue,s=e.tabIndex,c=e.form,d=e.menuIsOpen,f=e.required,m=this.getComponents(),v=m.Input,b=this.state,h=b.inputIsHidden,g=b.ariaSelection,x=this.commonProps,y=l||this.getElementId("input"),C=F(F(F({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":f,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(g==null?void 0:g.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(v,w({},x,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:a,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:r},C)):p.createElement(Co,w({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:me,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},C))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,r=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,f=this.commonProps,m=this.props,v=m.controlShouldRenderValue,b=m.isDisabled,h=m.isMulti,g=m.inputValue,x=m.placeholder,y=this.state,C=y.selectValue,D=y.focusedValue,I=y.isFocused;if(!this.hasValue()||!v)return g?null:p.createElement(d,w({},f,{key:"placeholder",isDisabled:b,isFocused:I,innerProps:{id:this.getElementId("placeholder")}}),x);if(h)return C.map(function(O,V){var k=O===D,j="".concat(e.getOptionLabel(O),"-").concat(e.getOptionValue(O));return p.createElement(u,w({},f,{components:{Container:l,Label:r,Remove:s},isFocused:k,isDisabled:b,key:j,index:V,removeProps:{onClick:function(){return e.removeValue(O)},onTouchEnd:function(){return e.removeValue(O)},onMouseDown:function(W){W.preventDefault()}},data:O}),e.formatOptionLabel(O,"value"))});if(g)return null;var A=C[0];return p.createElement(c,w({},f,{data:A,isDisabled:b}),this.formatOptionLabel(A,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,u=this.commonProps,l=this.props,r=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||r||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,w({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,u=this.commonProps,l=this.props,r=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return p.createElement(a,w({},u,{innerProps:d,isDisabled:r,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,u=e.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,r=this.props.isDisabled,s=this.state.isFocused;return p.createElement(u,w({},l,{isDisabled:r,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,r=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,w({},u,{innerProps:s,isDisabled:l,isFocused:r}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,r=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,f=a.NoOptionsMessage,m=a.Option,v=this.commonProps,b=this.state.focusedOption,h=this.props,g=h.captureMenuScroll,x=h.inputValue,y=h.isLoading,C=h.loadingMessage,D=h.minMenuHeight,I=h.maxMenuHeight,A=h.menuIsOpen,O=h.menuPlacement,V=h.menuPosition,k=h.menuPortalTarget,j=h.menuShouldBlockScroll,B=h.menuShouldScrollIntoView,W=h.noOptionsMessage,G=h.onMenuScrollToTop,T=h.onMenuScrollToBottom;if(!A)return null;var R=function($,Y){var Q=$.type,z=$.data,ee=$.isDisabled,q=$.isSelected,re=$.label,_t=$.value,He=b===z,$e=ee?void 0:function(){return e.onOptionHover(z)},Wt=ee?void 0:function(){return e.selectOption(z)},Ne="".concat(e.getElementId("option"),"-").concat(Y),Gt={id:Ne,onClick:Wt,onMouseMove:$e,onMouseOver:$e,tabIndex:-1,role:"option","aria-selected":e.isAppleDevice?void 0:q};return p.createElement(m,w({},v,{innerProps:Gt,data:z,isDisabled:ee,isSelected:q,key:Ne,label:re,type:Q,value:_t,isFocused:He,innerRef:He?e.getFocusedOptionRef:void 0}),e.formatOptionLabel($.data,"menu"))},_;if(this.hasOptions())_=this.getCategorizedOptions().map(function(L){if(L.type==="group"){var $=L.data,Y=L.options,Q=L.index,z="".concat(e.getElementId("group"),"-").concat(Q),ee="".concat(z,"-heading");return p.createElement(u,w({},v,{key:z,data:$,options:Y,Heading:l,headingProps:{id:ee,data:L.data},label:e.formatGroupLabel(L.data)}),L.options.map(function(q){return R(q,"".concat(Q,"-").concat(q.index))}))}else if(L.type==="option")return R(L,"".concat(L.index))});else if(y){var N=C({inputValue:x});if(N===null)return null;_=p.createElement(d,v,N)}else{var Z=W({inputValue:x});if(Z===null)return null;_=p.createElement(f,v,Z)}var J={minMenuHeight:D,maxMenuHeight:I,menuPlacement:O,menuPosition:V,menuShouldScrollIntoView:B},oe=p.createElement(Jn,w({},v,J),function(L){var $=L.ref,Y=L.placerProps,Q=Y.placement,z=Y.maxHeight;return p.createElement(r,w({},v,J,{innerRef:$,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove},isLoading:y,placement:Q}),p.createElement(Do,{captureEnabled:g,onTopArrive:G,onBottomArrive:T,lockEnabled:j},function(ee){return p.createElement(s,w({},v,{innerRef:function(re){e.getMenuListRef(re),ee(re)},innerProps:{role:"listbox","aria-multiselectable":v.isMulti,id:e.getElementId("listbox")},isLoading:y,maxHeight:z,focusedOption:b}),_)}))});return k||V==="fixed"?p.createElement(c,w({},v,{appendTo:k,controlElement:this.controlRef,menuPlacement:O,menuPosition:V}),oe):oe}},{key:"renderFormField",value:function(){var e=this,a=this.props,u=a.delimiter,l=a.isDisabled,r=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(Mo,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(r)if(u){var f=d.map(function(b){return e.getOptionValue(b)}).join(u);return p.createElement("input",{name:s,type:"hidden",value:f})}else{var m=d.length>0?d.map(function(b,h){return p.createElement("input",{key:"i-".concat(h),name:s,type:"hidden",value:e.getOptionValue(b)})}):p.createElement("input",{name:s,type:"hidden",value:""});return p.createElement("div",null,m)}else{var v=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:s,type:"hidden",value:v})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,r=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(mo,w({},e,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:r,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,u=e.IndicatorsContainer,l=e.SelectContainer,r=e.ValueContainer,s=this.props,c=s.className,d=s.id,f=s.isDisabled,m=s.menuIsOpen,v=this.state.isFocused,b=this.commonProps=this.getCommonProps();return p.createElement(l,w({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:f,isFocused:v}),this.renderLiveRegion(),p.createElement(a,w({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:f,isFocused:v,menuIsOpen:m}),p.createElement(r,w({},b,{isDisabled:f}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,w({},b,{isDisabled:f}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,r=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,f=a.instancePrefix,m=e.options,v=e.value,b=e.menuIsOpen,h=e.inputValue,g=e.isMulti,x=Ge(v),y={};if(u&&(v!==u.value||m!==u.options||b!==u.menuIsOpen||h!==u.inputValue)){var C=b?Go(e,x):[],D=b?ut(ce(e,x),"".concat(f,"-option")):[],I=l?Yo(a,x):null,A=qo(a,C),O=we(D,A);y={selectValue:x,focusedOption:A,focusedOptionId:O,focusableOptionsWithIds:D,focusedValue:I,clearFocusValueOnUpdate:!1}}var V=r!=null&&e!==u?{inputIsHidden:r,inputIsHiddenAfterUpdate:void 0}:{},k=s,j=c&&d;return c&&!j&&(k={value:le(g,x,x[0]||null),options:x,action:"initial-input-focus"},j=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(k=null),F(F(F({},y),V),{},{prevProps:e,ariaSelection:k,prevWasFocused:j})}}]),i}(p.Component);Ut.defaultProps=Wo;var Xo=p.forwardRef(function(n,t){var i=gn(n);return p.createElement(Ut,w({ref:t},i))}),lt=Xo;const Zo=M.form`
  
`,Jo=M.div`
  position: relative;
`,Qo=M.div`
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
`,er=M.input`
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
`,ct=M.button`
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
`,dt=M.svg`
  width: 18px;
  height: 18px;
  stroke: ${n=>n.color};
`;function tr({setParams:n,initialCategory:t,initialRecommended:i}){const[o,e]=p.useState(""),[a,u]=p.useState(""),[l,r]=p.useState(""),[s,c]=p.useState(""),[d,f]=p.useState(!0);p.useEffect(()=>{if(d){f(!1);return}n({search:l,category:o,groupBloodNotAllowed:a})},[l,a,o]);const m=C=>{e(C.value)},v=C=>{u(C.value)},b=()=>o?t.find(C=>C.value===C):"",h=()=>a?i.find(C=>C.value===a):"",g=C=>{c(C.currentTarget.value)},x=()=>{e(""),u(""),r(""),c("")},y=C=>{C.preventDefault(),r(s)};return E.jsxs(Qo,{children:[E.jsxs(Jo,{children:[E.jsxs(Zo,{onSubmit:y,children:[E.jsx(er,{type:"text",name:"request",pattern:"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",placeholder:"Search",value:s,onChange:g,required:!0,autoComplete:"off"}),E.jsx(ct,{right:"14px",type:"submit",children:E.jsx(dt,{color:"#EFEDE8",children:E.jsx("use",{href:de+"#icon-search"})})})]}),(s||a||o)&&E.jsx(ct,{right:"40px",onClick:x,children:E.jsx(dt,{color:"#E6533C",children:E.jsx("use",{href:de+"#icon-clear"})})})]}),E.jsx(lt,{onChange:m,value:b(),options:t,classNamePrefix:"custom-select",className:"custom-select-container",placeholder:"Categories"}),E.jsx(lt,{onChange:v,value:h(),options:i,classNamePrefix:"custom-select-second",className:"custom-select-second-container",placeholder:"All"})]})}const nr=M.ul`
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
`,ir=M.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,pt=M.p`
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
`,ft=M.span`
  color: var(--orange);
`,or=H.li`
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
`,rr=H.div`
  display: flex;
  justify-content: space-between;
`,ar=H.span`
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
`,ur=H.div`
  display: flex;
  align-items: center;
`,sr=H.button`
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
`,lr=H.svg`
  width: 16px;
  height: 16px;
  stroke: #e6533c;
`,cr=H.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 8px;
`,dr=H.svg`
  width: 24px;
  height: 24px;
  stroke: #e6533c;
`,pr=H.h2`
  color: #efede8;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  line-height: 1.33;
  }
`,Oe=H.p`
  color: rgba(239, 237, 232, 0.4);

  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,De=H.span`
  color: #efede8;
  color: #efede8;
`,ht=H.p`
  color: #efede8;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  margin-right: 16px;
`,mt=H.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${n=>n.color};
  margin-right: 8px;
`,fr=H.div`
  
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
`;function hr(n){return un({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(n)}const mr=M.div`;
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
`,vr=M.div`
  position: absolute;
  width: 335px;
  padding: 48px 24px;
  border-radius: 12px;
  border: 1px;
  background: linear-gradient(0deg, #10100F, #10100F),
  linear-gradient(0deg, rgba(239, 237, 232, 0.2), rgba(239, 237, 232, 0.2));

    @media (min-width: 768px) {
      width: 479px;
    }
`,gr=M.div`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,br=M.p`
  margin-bottom: 24px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--border);
`,Er=M.form`
  padding: 24px,48px,25px,48px;
  
`,xr=M.div`
display: flex;
  flex-wrap: wrap;

  align-content: space-between;
`,Cr=M.input`
  display: inline-block;
  margin-bottom: 16px;
  width: 287px;
  height: 34px;
  padding: 8px 14px 8px 14px;
  border-radius: 12px;
  border: 1px;
  gap: 10px;
  border: 1px solid #E6533C;
  background: rgba(0,0,0,0);
  color:var(--white);
  flex: 1;

  @media (min-width: 768px) {
    width: 100%;
    margin-right: 16px;
  }
`,Sr=M.div`
 
  @media (min-width: 768px) {
    display: inline-block;
  }
`,Fr=M.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (min-width: 768px) {
    width: 100%;
  }
`,yr=M.span`
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 1.5;

  margin-bottom: 16px;
  position: absolute;
  right: 10px; 
  pointer-events: none; 
  color:var(--calendar-arrows);

  @media (min-width: 768px) {
    right: 25px; 
  }
`,wr=M.div`
  display: flex;
`,Or=M.button`
  width: 130px;
  height: 42px;
  margin-right: 14px;
  padding: 12px, 32px, 12px, 32px;
  border-radius: 12px;
  gap: 10px;
  background: var(--orange) ;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--white);
  border:1px solid var(--border);

    &:hover {
      background-color: #E6533C;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #E6533C;
    }
`,Dr=M.button`
  width: 130px;
  height: 42px;
  margin-right: 14px;
  padding: 12px, 32px, 12px, 32px;
  border-radius: 12px;
  gap: 10px;
  background: var(--black) ;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--white);
  border:1px solid var(--border);

    &:hover {
      background-color: #E6533C;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #E6533C;
    }
`,Ir=M.div`
    width: 287px;
    height: 34px;
    border-radius: 12px;
    border: 1px solid var(--orange);
    background-color: rgba(0,0,0,0);
    padding: 8px 14px;
    margin-bottom: 16px;

    @media screen and (min-width: 768px){
    width: 244px;
    height: 40px;
  }

`,Ar=M.p`
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
`,Mr=({onClose:n,open:t,title:i,calories:o})=>{const[e,a]=p.useState(0),[u,l]=p.useState(""),r=p.useCallback(f=>{f.key==="Escape"&&n()},[n]);p.useEffect(()=>(document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}),[r]);const s=f=>{const m=Number(f.target.value)*o/100;m&&a(m),l(f.target.value)},c=f=>{f.preventDefault(),n()},d=`${i[0].toUpperCase()+i.slice(1,111)}`;return E.jsx(E.Fragment,{children:E.jsx(mr,{onClick:n,children:E.jsxs(vr,{onClick:f=>f.stopPropagation(),children:[E.jsx(gr,{children:E.jsx(hr,{onClick:n,size:"22px"})}),E.jsxs(Er,{name:"addProductForm",onSubmit:c,children:[E.jsxs(xr,{children:[E.jsx(Ir,{children:E.jsx(Ar,{children:d})}),E.jsx(Sr,{children:E.jsxs(Fr,{children:[E.jsx(Cr,{type:"text",value:u,onChange:s,required:!0,pattern:"[1-9]{1,5}"}),E.jsx(yr,{children:"grams"})]})})]}),E.jsx(br,{children:`Calories: ${e}`}),E.jsxs(wr,{children:[E.jsx(Or,{type:"submit",children:"Add to diary"}),E.jsx(Dr,{type:"button",onClick:n,children:"Cancel"})]})]})]})})})};let Ve;const Vr=()=>{window.screen.width<1440?Ve=!0:Ve=!1};Vr();function Pr({productItem:n}){const[t,i]=p.useState(!1),o=()=>{i(!1),document.body.style.overflow="auto"},{weight:e,calories:a,category:u,title:l,groupBloodNotAllowed:r,_id:s}=n,c=2,d=()=>{if(l){const m=l[0].toUpperCase();let v;return Ve?(v=`${m+l.slice(1,19)}`,l.length>19?`${v}...`:v):(v=`${m+l.slice(1,24)}`,l.length>24?`${v}...`:v)}return""},f=()=>{if(u){const v=`${u[0].toUpperCase()+u.slice(1,10)}`;return u.length>10?`${v}...`:v}return""};return E.jsxs(E.Fragment,{children:[E.jsxs(or,{children:[E.jsxs(rr,{children:[E.jsx(ar,{children:"DIET"}),E.jsxs(ur,{children:[r[c]?E.jsxs(E.Fragment,{children:[E.jsx(mt,{color:"#419B09"}),E.jsx(ht,{children:"Recommended"})]}):E.jsxs(E.Fragment,{children:[E.jsx(mt,{color:"#E9101D"}),E.jsx(ht,{children:"Not recommended"})]}),E.jsxs(sr,{onClick:()=>{i(!0),document.body.style.overflow="hidden"},children:["Add",E.jsx(lr,{children:E.jsx("use",{href:de+"#icon-arrow"})})]})]})]}),E.jsxs(cr,{children:[E.jsx(dr,{children:E.jsx("use",{href:de+"#icon-icon"})}),E.jsx(pr,{children:d()}),E.jsxs(fr,{children:[E.jsxs(Oe,{children:["Calories: ",E.jsxs(De,{children:[" ",a]})]}),E.jsxs(Oe,{children:["Category: ",E.jsx(De,{children:f()})]}),E.jsxs(Oe,{children:["Weight: ",E.jsx(De,{children:e})]})]})]})]}),t&&E.jsx(Mr,{onClose:o,title:l,calories:a,id:s})]})}function Rr({products:n,isFetching:t}){return E.jsx(nr,{className:"custom-list",children:n.length===0&&!t?E.jsxs(ir,{children:[E.jsxs(pt,{children:[E.jsx(ft,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),E.jsx(pt,{children:E.jsx(ft,{children:"Try changing the search parameters."})})]}):n.map(i=>E.jsx(Pr,{productItem:i},i._id))})}const Lr="/project-daily-energy-dose/assets/side-view-people-training-gym-071babdb.jpg",Tr="/project-daily-energy-dose/assets/side-view-people-training-gym@max-9cb7ca4d.jpg",kr=[{id:"fdg12sdgdfdffsfd",value:"all",label:"all"},{id:"fdg12234sdfsdgsfd",value:"recommended",label:"Recommended"},{id:"fdg12asdf123gdfsdgsfd",value:"not-recommended",label:"Not recommended"}];function Nr(){Jt(x=>x.auth.token);const[n,t]=p.useState(""),[i,o]=p.useState(""),[e,a]=p.useState(""),[u,l]=p.useState(1),[r,s]=p.useState(!1),[c,d]=p.useState(0),[f,m]=p.useState([]),[v,b]=p.useState([]);p.useEffect(()=>{const x=document.querySelector(".custom-list");return x.addEventListener("scroll",h),function(){x.removeEventListener("scroll",h)}},[c,f]),p.useEffect(()=>{Qt().then(y=>{b(y.data)}),ze({params:{page:u,category:n,groupBloodNotAllowed:i,search:e}}).then(({data:y})=>{m(y.data),d(y.total),l(2)})},[]),p.useEffect(()=>{r&&ze({params:{page:u,category:n,groupBloodNotAllowed:i,search:e}}).then(({data:y})=>{m([...f,...y.data]),d(y.total),l(C=>C+1)}).finally(()=>s(!1))},[r]);const h=x=>{x.target.scrollHeight-(x.target.scrollTop+window.innerHeight)<600&&f.length<c&&s(!0)},g=x=>{m([]),t(x.category),o(x.groupBloodNotAllowed),a(x.search),l(1),s(!0),d(0)};return E.jsx(ln,{bgi:[Lr,Tr],children:E.jsxs("div",{className:"container",children:[E.jsxs(dn,{children:[E.jsx(cn,{children:"Products"}),E.jsx(tr,{setParams:g,initialCategory:v,initialRecommended:kr})]}),E.jsx(Rr,{products:f,isFetching:r})]})})}export{Nr as default};
