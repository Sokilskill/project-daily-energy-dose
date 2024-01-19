import{R as f,i as t,r as T,j as i,s as l,L as P,c as p,a as E,M as C,k as z,m as N,n as h,o as F,Q as R}from"./index-a84909d6.js";import{e as q,s as A,a as V}from"./index-a3b14185.js";import"./defineProperty-179e1ab7.js";var O={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$=f.createContext&&f.createContext(O),H=["attr","size","title"];function K(e,n){if(e==null)return{};var r=U(e,n),a,d;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(d=0;d<s.length;d++)a=s[d],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function U(e,n){if(e==null)return{};var r={},a=Object.keys(e),d,s;for(s=0;s<a.length;s++)d=a[s],!(n.indexOf(d)>=0)&&(r[d]=e[d]);return r}function k(){return k=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},k.apply(this,arguments)}function I(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),r.push.apply(r,a)}return r}function D(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?I(Object(r),!0).forEach(function(a){Y(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function Y(e,n,r){return n=G(n),n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function G(e){var n=Q(e,"string");return typeof n=="symbol"?n:String(n)}function Q(e,n){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function _(e){return e&&e.map((n,r)=>f.createElement(n.tag,D({key:r},n.attr),_(n.child)))}function B(e){return n=>f.createElement(J,k({attr:D({},e.attr)},n),_(e.child))}function J(e){var n=r=>{var{attr:a,size:d,title:s}=e,o=K(e,H),m=d||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),f.createElement("svg",k({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,o,{className:c,style:D(D({color:e.color||r.color},r.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),s&&f.createElement("title",null,s),e.children)};return $!==void 0?f.createElement($.Consumer,null,r=>n(r)):n(O)}function X(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(e)}function Z(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}const ee=t.div`
  display: flex;
  align-items: center;
`,ie=t.input`
  display: flex;
  align-items: center;
  background: transparent;
  width: 100%;
  border: 1px solid var(--white);
  border-radius: 12px;
  padding: 14px;
  background-color: inherit;
  color: var(--white);
  font-size: 16px;
  line-height: 1.5;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }
  &.diary{
    width: 135px;
    border: none;
  }
`,ne=t.div`
  position: relative;
  .react-datepicker {
    background: #ef8964;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
  }

  .react-datepicker__current-month {
    color: white;
  }

  .react-datepicker__day {
    color: white;
  }

  .react-datepicker__day-name {
    color: white;
  }

  .react-datepicker__time {
    color: white;
  }

  .react-datepicker__triangle {
    visibility: hidden;
  }

  .react-datepicker__header {
    background-color: #ef8964;
  }

  .react-datepicker__input-container input {
    caret-color: transparent;
    pointer-events: auto;
    cursor: pointer;
  }

  .react-datepicker__day--selected {
    color: white;
    background-color: black;
    border-radius: 50%;
  }

  .react-datepicker__day:hover {
    color: white;
    background-color: black;
    border-radius: 50%;
  }

  .react-datepicker__year-read-view--selected-year {
    color: #efede8;
    font-size: 16px;
  }
  .react-datepicker__year-dropdown {
    background-color: #ef8964;
    border: none;
    color: #efede8;
    font-size: 16px;
  }
`,te=t.svg`
  width: 20px;
  height: 20px;
  fill: var(--white);
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 10px;

  &:hover,
  &:focus {
    & > path {
      fill: #ef8964;
    }
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 14px;
  }
`,re=t.div`
  display: flex;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 26px;
  }
`,S=({textSize:e,textWeight:n,iconColor:r,sizeArrow:a,textHeight:d,handlerDate:s,currentDate:o,birthdayDate:m})=>{const c="dd/MM/yyyy",x=T.useRef(null),g=M=>{s(M)},j=()=>{x.current&&x.current.setOpen(!0)};return i.jsxs(ee,{children:[i.jsxs(ne,{children:[i.jsx(q,{selected:o,onChange:g,dateFormat:c,minDate:m,customInput:i.jsx(ie,{className:"diary",$textSize:e,$textWeight:n,$textHeight:d}),ref:x,shouldCloseOnSelect:!0}),i.jsx(te,{onClick:j,stroke:r,children:i.jsx("use",{href:`${l}#icon-calendar`})})]}),i.jsxs(re,{children:[i.jsx(X,{onClick:()=>{g(A(o,1))},style:{cursor:"pointer",fontSize:a?`${a}px`:"16px",color:"var(--white)",userSelect:"none"}}),i.jsx(Z,{onClick:()=>{g(V(o,1))},style:{cursor:"pointer",fontSize:a?`${a}px`:"16px",color:"var(--white)",userSelect:"none"}})]})]})},ae=t.div`
  /* 320-375 */
  box-sizing: border-box;
  max-height: 824px;
  width: 335px;
  padding: 16px;
  padding-right: 8px;
  border: 1px solid rgb(239, 237, 235, 0.2);
  border-radius: 12px;
  background-color: rgb(239, 237, 235, 0.05);
  font-size: 12px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 234px;
    padding-top: 19px;
  }
  @media screen and (min-width: 1440px) {
    width: 826px;
    height: 234px;
  }
`,de=t.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,se=t.p`
  /* 320-375 */
  
  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,oe=t.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,ce=t.div`
  display: flex;
  gap: 0;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex: 1.8;
    gap: 0px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
  }
`,le=t.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;
  
  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1.0;
     
  }
`,xe=t.div`
  /* 320-375 */
  flex: 1.2;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
    flex: ${e=>e.name==="Title"?1.3:1.2};
  }
  @media screen and (min-width: 1440px) {
  }
`,pe=t.p`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;    
  }
  @media screen and (min-width: 1440px) {
  }
`,he=t.div`
  /* 320-375 */

  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 8px 14px;
  font-size: 16px;
  color: rgb(239, 237, 232);
  max-width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"auto"};
  border: 1px solid rgb(239, 237, 235, 0.2);
  border-radius: 12px;
  background-color: rgb(239, 237, 235, 0.05);

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 8px 14px;
  }
  @media screen and (min-width: 1440px) {
    
  }
`,me=t.div`
    font-size: 14px;
  @media screen and (min-width: 768px) {
    display: none;
   }
  @media screen and (min-width: 1440px) {
  }
`,ge=t.div`
    display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;t.svg`
  width: ${e=>e.size||"13px"};
  height: ${e=>e.size||"13px"};
  fill: ${e=>e.color||"#ffffff"};
  display: inline-block;
  margin-left: 9px;
`;const ue=t.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,fe=t(P)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;t.div`
  display: flex;
  flex-wrap: nowrap;
  
`;const we=t.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: fit-content;
    
  }
`,be=t.ul`
  
  box-sizing: border-box;

  max-height: 755px;
  overflow-y: auto;
  padding-right: 8px;
  padding-bottom: 16px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(239, 237, 232, 0.1);
    border-radius: 12px;
    height: 90px;
  }

  @media screen and (min-width: 768px) {
    max-height: 130px;
    
  }
  @media screen and (min-width: 1440px) {
  }
`,ye=t.li`
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
  }
`,je=t.div`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${e=>e.value?"#419B09":"#E9101D"};
`,ve=t.div`
  height: 335px;
  width: 100%;
  padding-top: 125px;
  color: var(--white);
  font-size: 14;
  font-weight: normal; 
  line-height: 18px; 
  text-align: center;  
  
  @media screen and (min-width: 768px) {
  height: auto;
  padding-top: 55px;
  font-size: 16;
  line-height: 24px; 
  }
`,ke=t.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;

    
    
  }
  @media screen and (min-width: 1440px) {
    
  }
`,De=t.div`
`,Te=t.div`
  @media screen and (min-width: 768px) {
    margin-left: 182px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 220px;
  }
`,Ee=t.div`
  @media screen and (min-width: 768px) {
    margin-left: 145px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 176px;
  }
`,Ce=t.div`
  @media screen and (min-width: 768px) {
    margin-left: 37px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 55px;
  }
`,ze=t.div`
  @media screen and (min-width: 768px) {
    margin-left: 46px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 65px;
  }
`,$e=e=>e.diary.data,Ie=e=>e.diary.isLoading,Se=e=>e.diary.error,u={getDiary:$e,getIsLoading:Ie,getIsError:Se},W=t.svg`
  &.orange {
    stroke: ${({theme:e})=>e.acceptColor};
  }
`,Pe=()=>{const e=p(u.getDiary).eatenProducts;return i.jsxs(ae,{children:[i.jsxs(de,{children:[i.jsx(se,{children:"Products"}),i.jsxs(fe,{to:"/products",children:[i.jsx(oe,{children:"Add product"}),i.jsx(W,{width:16,height:16,className:"orange",children:i.jsx("use",{href:`${l}#icon-start`})})]})]}),i.jsx(Ne,{products:e})]})},Ne=({products:e})=>{const n=E(),r=p(u.getIsLoading);return i.jsx(i.Fragment,{children:r?i.jsx(C,{display:"flex"}):e.length?i.jsxs(i.Fragment,{children:[i.jsx(Oe,{}),i.jsx(be,{children:e.map(({_id:a,calories:d,amount:s,recommend:o,date:m,productId:{category:c,title:x}})=>i.jsxs(ye,{children:[i.jsx(v,{value:x,children:"Title"}),i.jsx(v,{value:c,children:"Category"}),i.jsxs(ce,{children:[i.jsxs(le,{children:[i.jsx(v,{value:d,children:"Calories"}),i.jsx(v,{value:s,children:"Weight"}),i.jsx(v,{value:o,children:"Recommend"})]}),i.jsx(we,{onClick:()=>{n(z.deleteDiaryProduct({productId:a,date:m}))},children:i.jsx(ue,{children:i.jsx(W,{width:20,height:20,className:"orange",children:i.jsx("use",{href:`${l}#icon-trash`})})})})]})]},a))})]}):i.jsx(_e,{})})},v=({width:e,value:n,children:r})=>{let a=n;const d=typeof n=="boolean";d&&(a=n?"Yes":"No");let s=a;return typeof n>"u"&&(n=""),n.length>18&&(s=n.slice(0,18)+"..."),i.jsxs(xe,{name:r,children:[i.jsx(pe,{children:r}),i.jsxs(he,{width:e,children:[d&&i.jsx(je,{value:n}),i.jsx(me,{children:a}),i.jsx(ge,{children:s})]})]})},Oe=()=>i.jsxs(ke,{children:[i.jsx(De,{children:"Title"}),i.jsx(Te,{children:"Category"}),i.jsx(Ee,{children:"Calories"}),i.jsx(Ce,{children:"Weight"}),i.jsx(ze,{children:"Recommend"})]}),_e=()=>i.jsx(ve,{children:"Not found products"}),Be=t.div`
  /* 320-375 */
  box-sizing: border-box;
  max-height: 824px;
  width: 335px;
  padding: 16px;
  padding-right: 8px;
  border: 1px solid rgb(239, 237, 235, 0.2);
  border-radius: 12px;
  background-color: rgb(239, 237, 235, 0.05);
  font-size: 12px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 234px;
    padding-top: 19px;
  }
  @media screen and (min-width: 1440px) {
    width: 826px;
    height: 234px;
  }
`,We=t.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,Le=t.p`
  /* 320-375 */

  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Me=t.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Fe=t.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex: 1.4;
    column-gap: 8px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    flex: 1.3;
  }
`,Re=t.div`
  display: flex;
  gap: 0;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex: 1;
    gap: 0px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
  }
`,qe=t.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1;
    
  }
`,Ae=t.div`
  /* 320-375 */
  flex: 1;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
    /* flex: 1; */
    /* flex: ${e=>e.name==="Target"?1.3:1}; */
    flex: ${e=>{switch(e.name){case"Body Part":return .3;case"Equipment":return .4;case"Name":return .35;case"Target":return .8;case"Burned Calories":return .5;case"Time":return .4}}};
    @media screen and (min-width: 1440px) {
       flex: ${e=>{switch(e.name){case"Body Part":return .3;case"Equipment":return .4;case"Name":return .35;case"Target":return .6;case"Burned Calories":return .5;case"Time":return .4}}}


    };
  }
`,Ve=t.div`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,He=t.div`
  /* 320-375 */

  display: flex;
  
  align-items: center;
  margin-bottom: 16px;
  padding: 8px 14px;
  font-size: 16px;
  color: rgb(239, 237, 232);
  max-width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"auto"};
  border: 1px solid rgb(239, 237, 235, 0.2);
  border-radius: 12px;
  background-color: rgb(239, 237, 235, 0.05);

  @media screen and (min-width: 768px) {
    flex:1;
    margin-bottom: 0;
    padding: 8px 14px;
  }
  @media screen and (min-width: 1440px) {
  }
`,Ke=t.div`
  display: flex;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,Ue=t.div`
   display: none;
   font-size: 16px;
  @media screen and (min-width: 768px) {
    display: flex;
    /* display: none;
    font-size: 16px; */
  }
  @media screen and (min-width: 1440px) {
  }
`,Ye=t.div`
  font-size: 12px;
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    /* display: none; */
  }
`,Ge=t.div`
  font-size: 11px;
  @media screen and (min-width: 768px) {
    /* display: flex; */
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`,Qe=t.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,Je=t(P)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;t.div`
  display: flex;
  flex-wrap: nowrap;
`;const Xe=t.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: fit-content;
  }
`,Ze=t.ul`
  box-sizing: border-box;

  max-height: 755px;
  overflow-y: auto;
  padding-right: 8px;
  padding-bottom: 16px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(239, 237, 232, 0.1);
    border-radius: 12px;
    height: 90px;
  }

  @media screen and (min-width: 768px) {
    max-height: 130px;
  }
  @media screen and (min-width: 1440px) {
  }
`,ei=t.li`
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
  }
`;t.div`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${e=>e.value?"#419B09":"#E9101D"};
`;const ii=t.div`
  height: 335px;
  width: 100%;
  padding-top: 125px;
  color: var(--white);
  font-size: 14;
  font-weight: normal; 
  line-height: 18px; 
  text-align: center;  
  
  @media screen and (min-width: 768px) {
  height: auto;
  padding-top: 55px;
  font-size: 16;
  line-height: 24px; 
  }
`,ni=t.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
  }
`,ti=t.div``,ri=t.div`
  @media screen and (min-width: 768px) {
    margin-left: 65px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 80px;
  }
`,ai=t.div`
  @media screen and (min-width: 768px) {
    margin-left: 90px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 112px;
  }
`,di=t.div`
  @media screen and (min-width: 768px) {
    margin-left: 100px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 115px;
  }
`,si=t.div`
  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 62px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-left: 95px;
  }
`,oi=t.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 77px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
    margin-left: 95px;
  }
`,ci=t.div`
  @media screen and (min-width: 768px) {
    margin-left: 3px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 18px;
  }
`,L=t.svg`
  &.orange {
    stroke: ${({theme:e})=>e.acceptColor};
  }
`,li=()=>{const e=p(u.getDiary).doneExercises;return i.jsxs(Be,{children:[i.jsxs(We,{children:[i.jsx(Le,{children:"Execrcises"}),i.jsxs(Je,{to:"/exercises/bodyParts",children:[i.jsx(Me,{children:"Add exercise"}),i.jsx(L,{width:16,height:16,className:"orange",children:i.jsx("use",{href:`${l}#icon-start`})})]})]}),i.jsx(xi,{exercises:e})]})},xi=({exercises:e})=>{const n=E(),r=p(u.getIsLoading);return i.jsx(i.Fragment,{children:r?i.jsx(C,{display:"flex"}):e.length?i.jsxs(i.Fragment,{children:[i.jsx(pi,{}),i.jsx(Ze,{children:e.map(({burnedCalories:a,date:d,exerciseId:{bodyPart:s,equipment:o,name:m,target:c},time:x,_id:g})=>i.jsxs(ei,{children:[i.jsxs(Fe,{children:[i.jsx(w,{value:s,children:"Body Part"}),i.jsx(w,{value:o,children:"Equipment"}),i.jsx(w,{value:m,children:"Name"})]}),i.jsxs(Re,{children:[i.jsxs(qe,{children:[i.jsx(w,{value:c,children:"Target"}),i.jsx(w,{value:a,children:"Burned Calories"}),i.jsx(w,{value:x,children:"Time"})]}),i.jsx(Xe,{onClick:()=>{n(z.deleteDiaryExercise({exerciseId:g,date:d}))},children:i.jsx(Qe,{children:i.jsx(L,{width:20,height:20,className:"orange",children:i.jsx("use",{href:`${l}#icon-trash`})})})})]})]},g))})]}):i.jsx(hi,{})})},w=({width:e,value:n,children:r})=>{let a=n,d=a;n.length>8&&(d=n.slice(0,8)+"...");let s=r,o=s;return r.length>10&&(o=r.slice(0,10)+"..."),i.jsxs(Ae,{name:r,children:[i.jsxs(Ve,{children:[i.jsx(Ye,{children:s}),i.jsx(Ge,{children:o})]}),i.jsxs(He,{width:e,name:r,children:[i.jsx(Ke,{children:a}),i.jsx(Ue,{children:d})]})]})},pi=()=>i.jsxs(ni,{children:[i.jsx(ti,{children:"Body Part"}),i.jsx(ri,{children:"Equipment"}),i.jsx(ai,{children:"Name"}),i.jsx(di,{children:"Target"}),i.jsx(oi,{children:"Burned Calor..."}),i.jsx(si,{children:"Burned Calories"}),i.jsx(ci,{children:"Time"})]}),hi=()=>i.jsx(ii,{children:"Not found exercises"}),mi=t.div`
  display: flex;
  max-width: 335px;
  justify-content: space-between;
  flex-wrap: wrap;

  column-gap: 13px;
  row-gap: 20px;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    max-width: 593px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 390px;
    gap: 16px 16px;
  }
`,gi=t.div`
  height: 96px;
  padding: 14px;
  border: 1px solid var(--secondary-text-color);
  border-radius: 12px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 374px) {
    min-width: 118px;
    max-width: 157px;
  }
  @media screen and (max-width: 767px) {
    &:nth-child(odd) {
      width: 157px;
    }
    &:nth-child(even) {
      width: 165px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
    order: ${e=>{switch(e.title){case"Daily calorie intake":return 0;case"Daily norm of sports":return 3;case"Calories consumed":return 1;case"Calories burned":return 4;case"The rest of the calories":return 2;case"The rest of sports":return 5}}};
  }
  @media screen and (min-width: 1440px) {
    order: 0;
  }

  ${e=>{switch(!0){case(e.title==="The rest of the calories"&&e.value<0):return`
          border-color: var(--red);          
        `;case(e.title==="The rest of sports"&&e.value<0):return`
          border-color: var(--green);          
        `}switch(!0){case(e.title==="Daily calorie intake"||e.title==="Daily norm of sports"):return`
          background-color: var(--orange);          
        `;default:return`            
            background-color: rgb(239,237,232, 0.05);          
        `}}}
`,ui=t.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,fi=t.p`
  margin-left: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  @media screen and (min-width: 375px) {
    white-space: ${e=>e.children==="The rest of the calories"?"normal":"nowrap"};
  }

  @media screen and (min-width: 768px) {
    line-height: 18px;
  }
  @media screen and (min-width: 1440px) {

  }

  ${e=>{switch(!0){case(e.children==="Daily calorie intake"||e.children==="Daily norm of sports"):return`
          color: var(--white)
        `;default:return"color: rgb(239, 237, 232, 0.4)"}}}
`,wi=t.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
  @media screen and (min-width: 1440px) {
  }
`,b=t.svg`
  &.orange {
    fill: ${({theme:e})=>e.secondaryOrange};
  }
`,bi=()=>{const e=p(N.getUserMetricData),n=e?e.dailyIntakeCalories:null,r=e?e.dailyNormOfSport:null,a=p(u.getDiary).consumedCalories,d=p(u.getDiary).burnedCalories,s=n-a,o=r-Math.ceil(p(u.getDiary).sportTime/60);return i.jsxs(mi,{children:[i.jsx(y,{value:n,children:"Daily calorie intake"}),i.jsx(y,{value:r,children:"Daily norm of sports"}),i.jsx(y,{value:a,children:"Calories consumed"}),i.jsx(y,{value:d,children:"Calories burned"}),i.jsx(y,{value:s,children:"The rest of the calories"}),i.jsx(y,{value:o,children:"The rest of sports"})]})},y=({value:e,children:n})=>{const r=p(u.getIsLoading);let a="",d=e;switch(n){case"Daily calorie intake":a=i.jsx(b,{width:20,height:20,className:"orange",children:i.jsx("use",{href:`${l}#icon-fluent_food-24-filled`})});break;case"Daily norm of sports":a=i.jsx(b,{width:20,height:20,className:"orange",children:i.jsx("use",{href:`${l}#icon-dumbbell`})}),d=d!=null?d.toString()+" min":"N/A";break;case"Calories consumed":a=i.jsx(b,{width:20,height:20,className:"orange",children:i.jsx("use",{href:`${l}#icon-apple`})});break;case"Calories burned":a=i.jsx(b,{width:20,height:20,className:"orange",children:i.jsx("use",{href:`${l}#icon-calories-1`})});break;case"The rest of the calories":a=i.jsx(b,{width:20,height:20,className:"orange",children:i.jsx("use",{href:`${l}#icon-bubble`})});break;case"The rest of sports":a=i.jsx(b,{width:20,height:20,className:"orange",children:i.jsx("use",{href:`${l}#icon-running`})}),d=d.toString()+" min";break}return n==="The rest of the calories"&&e<0&&(d="- "+Math.abs(e).toString()),n==="The rest of sports"&&e<0&&(d="+ "+Math.abs(e).toString()+" min"),d||(d=0),i.jsxs(gi,{value:e,title:n,children:[i.jsxs(ui,{children:[a,i.jsx(fi,{children:n})]}),r?i.jsx(C,{display:"block"}):i.jsxs(wi,{children:[" ",d]})]})},yi=h.div`
  margin: 0 auto;
  padding-top: 106px;
  padding-bottom: 80px;

  @media screen and (min-width: 375px) {
    width: 375px; /* Добавлено из media query 375px в index.css */
  }

  @media screen and (min-width: 768px) {
    padding-top: 136px;
    padding: 0 32px; /* Добавлено из media query 768px в index.css */
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px; /* Добавлено из media query 1440px в index.css */
  }
`,ji=h.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  color: var(--white);

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    display: flex;
    align-items: end;
  }
`,vi=h.div`
  display: flex;
  
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`,ki=h.div`
  @media screen and (min-width: 768px) {
    display: none;
  }  
`,Di=h.div`
  display: none;
  @media screen and (min-width: 768px) {
  display: flex;
  }
`,Ti=h.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    height: 64px;
    margin-bottom: 32px;
    align-items: normal;
  }
`,Ei=h.p`
  /* font-family: Roboto, sans-serif; */
  margin-left: 8px;
  font-size: 14px;
  font-style: normal;
  line-height: 18px;
  letter-spacing: 0;
  color: var(--white);
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Ci=h.div`
  max-width: 335px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    max-width: 593px;
    margin-top: 32px;
    margin-bottom: 64px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 390px;
  }
`,zi=h.div`
  @media screen and (min-width: 768px) {
    order: 1;    
  }
`,$i=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 62px;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 826px;
    margin: 0;
  }
`,Ii=h.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1440px) {
   column-gap: 32px;
  }
`,Si=t.svg`
  &.orange {
    fill: ${({theme:e})=>e.secondaryOrange};
  }
`;function Pi(e){let n=e.getDate(),r=e.getMonth()+1;const a=e.getFullYear();return n=n<10?`0${n}`:n,r=r<10?`0${r}`:r,`${n}/${r}/${a}`}const Ni=()=>{R.warn("the date must be greater than your birthday",{theme:"dark"})},Li=()=>{const e=localStorage.getItem("PowerPulsDate"),n=e?new Date(e):new Date,[r,a]=T.useState(n),d=E(),s=p(u.getDiary),{eatenProducts:o,doneExercises:m}=s,c=p(N.getUserMetricData),x=c?new Date(c.birthday):null,g=j=>{j<x?(Ni(),a(x)):a(j),localStorage.setItem("PowerPulsDate",j)};return T.useEffect(()=>{d(z.getDiary("?date="+Pi(r)))},[d,r,o.length,m.length]),i.jsxs(yi,{children:[i.jsx(F,{}),i.jsxs(Ti,{children:[i.jsx(ji,{children:"Diary"}),i.jsxs(vi,{children:[i.jsx(ki,{children:i.jsx(S,{currentDate:r,handlerDate:g,birthdayDate:x,textSize:18,textWeight:"bold",textHeight:20,sizeArrow:18,iconColor:"var(--orange-1)"})}),i.jsx(Di,{children:i.jsx(S,{currentDate:r,handlerDate:g,textSize:24,textWeight:"bold",textHeight:32,sizeArrow:18,iconColor:"var(--orange-1)"})})]})]}),i.jsxs(Ii,{children:[i.jsxs(zi,{children:[i.jsx(bi,{}),i.jsxs(Ci,{children:[i.jsx(Oi,{size:24}),i.jsx(Ei,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]}),i.jsxs($i,{children:[i.jsx(Pe,{}),i.jsx(li,{})]})]})]})},Oi=({size:e})=>i.jsx("div",{style:{width:`${e}px`,height:`${e}px`},children:i.jsx(Si,{width:e,height:e,className:"orange",children:i.jsx("use",{href:`${l}#icon-exclamation-mark`})})});export{Oi as IconInfo,Li as default};
