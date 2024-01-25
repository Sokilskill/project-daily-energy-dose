import{G as $,p as n,r as v,j as e,s as c,L as E,c as p,a as k,M as D,q as T,t as N,n as l,v as B,w as L,Q as W}from"./index-95f57d4b.js";import{e as M,s as _,a as P}from"./react-datepicker-9dd3e900.js";import"./defineProperty-179e1ab7.js";function F(i){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(i)}function q(i){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(i)}const O=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-right: 0;
  }
`,R=n.input`
font-family: Roboto;
font-weight: bold;
background: transparent;
border: 0;
padding: 0;
box-sizing: border-box;
background-color: inherit;
color: var(--white);
font-size: 18px;
line-height: 1.5;
outline: none;
cursor: pointer;


@media screen and (min-width: 768px) {
  width: 135px;
  font-size: 24px;
  line-height: 1.5;
}
`,A=n.div`
  display: flex;
  align-items: center;
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

  .react-datepicker__close-icon {
    margin-left: 8px; /* Этот margin компенсирует смещение из-за gap */
  }
`,V=n.svg`
width: 20px;
height: 20px;
stroke: var(--white);
cursor: pointer;
transition: stroke 0.3s ease;

&:hover,
&:focus {
  stroke: #EF8964;
}

@media screen and (min-width: 768px) {
  width: 24px;
  height: 24px;
}
`,H=n.div`
  display: flex;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`,C=({textSize:i,textWeight:t,iconColor:r,sizeArrow:a,textHeight:d,handlerDate:s,currentDate:o,birthdayDate:w})=>{const m="dd/MM/yyyy",x=v.useRef(null),h=S=>{s(S)},y=()=>{x.current&&x.current.setOpen(!0)};return e.jsxs(O,{children:[e.jsxs(A,{children:[e.jsx(M,{selected:o,onChange:h,dateFormat:m,minDate:w,customInput:e.jsx(R,{className:"diary",$textSize:i,$textWeight:t,$textHeight:d}),ref:x,shouldCloseOnSelect:!0}),e.jsx(V,{onClick:y,stroke:r,children:e.jsx("use",{href:`${c}#icon-calendar`})})]}),e.jsxs(H,{children:[e.jsx(F,{onClick:()=>{h(_(o,1))},style:{cursor:"pointer",fontSize:a?`${a}px`:"16px",color:"var(--white)",userSelect:"none"}}),e.jsx(q,{onClick:()=>{h(P(o,1))},style:{cursor:"pointer",fontSize:a?`${a}px`:"16px",color:"var(--white)",userSelect:"none"}})]})]})},G=n.div`
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
`,Y=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,Q=n.p`
  /* 320-375 */
  
  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,U=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,J=n.div`
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
`,K=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;
  
  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1.0;
     
  }
`,X=n.div`
  /* 320-375 */
  flex: 1.2;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
    flex: ${i=>i.name==="Title"?1.3:1.2};
  }
  @media screen and (min-width: 1440px) {
  }
`,Z=n.p`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;    
  }
  @media screen and (min-width: 1440px) {
  }
`,ee=n.div`
  /* 320-375 */

  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 8px 14px;
  font-size: 16px;
  color: rgb(239, 237, 232);
  max-width: ${i=>i.width||"100%"};
  height: ${i=>i.height||"auto"};
  border: 1px solid rgb(239, 237, 235, 0.2);
  border-radius: 12px;
  background-color: rgb(239, 237, 235, 0.05);

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 8px 14px;
  }
  @media screen and (min-width: 1440px) {
    
  }
`,ie=n.div`
    font-size: 14px;
  @media screen and (min-width: 768px) {
    display: none;
   }
  @media screen and (min-width: 1440px) {
  }
`,ne=n.div`
    display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;n.svg`
  width: ${i=>i.size||"13px"};
  height: ${i=>i.size||"13px"};
  fill: ${i=>i.color||"#ffffff"};
  display: inline-block;
  margin-left: 9px;
`;const te=n.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,ae=n(E)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
  
`;const re=n.button`
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
`,de=n.ul`
  
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
`,se=n.li`
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
`,oe=n.div`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${i=>i.value?"#419B09":"#E9101D"};
`,ce=n.div`
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
`,xe=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;

    
    
  }
  @media screen and (min-width: 1440px) {
    
  }
`,le=n.div`
`,pe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 182px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 220px;
  }
`,he=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 145px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 176px;
  }
`,me=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 37px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 55px;
  }
`,ge=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 46px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 65px;
  }
`,we=i=>i.diary.data.diary,ue=i=>i.diary.isLoading,fe=i=>i.diary.error,g={getDiary:we,getIsLoading:ue,getIsError:fe},z=n.svg`
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,be=()=>{const i=p(g.getDiary).date,t=p(g.getDiary).products;return e.jsxs(G,{children:[e.jsxs(Y,{children:[e.jsx(Q,{children:"Products"}),e.jsxs(ae,{to:"/products",children:[e.jsx(U,{children:"Add product"}),e.jsx(z,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${c}#icon-start`})})]})]}),e.jsx(ye,{products:t,date:i})]})},ye=({products:i,date:t})=>{const r=k(),a=p(g.getIsLoading);return e.jsx(e.Fragment,{children:a?e.jsx(D,{display:"flex"}):i.length?e.jsxs(e.Fragment,{children:[e.jsx(je,{}),e.jsx(de,{children:i.map(({_id:d,calories:s,amount:o,recommend:w,productId:{category:m,title:x}})=>e.jsxs(se,{children:[e.jsx(j,{value:x,children:"Title"}),e.jsx(j,{value:m,children:"Category"}),e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsx(j,{value:Math.round(s),children:"Calories"}),e.jsx(j,{value:o,children:"Weight"}),e.jsx(j,{value:w,children:"Recommend"})]}),e.jsx(re,{onClick:()=>{r(T.deleteDiaryProduct({productId:d,date:t}))},children:e.jsx(te,{children:e.jsx(z,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-trash-03`})})})})]})]},d))})]}):e.jsx(ve,{})})},j=({width:i,value:t,children:r})=>{let a=t;const d=typeof t=="boolean";d&&(a=t?"Yes":"No");let s=a;return typeof t>"u"&&(t=""),t.length>18&&(s=t.slice(0,18)+"..."),e.jsxs(X,{name:r,children:[e.jsx(Z,{children:r}),e.jsxs(ee,{width:i,children:[d&&e.jsx(oe,{value:t}),e.jsx(ie,{children:a}),e.jsx(ne,{children:s})]})]})},je=()=>e.jsxs(xe,{children:[e.jsx(le,{children:"Title"}),e.jsx(pe,{children:"Category"}),e.jsx(he,{children:"Calories"}),e.jsx(me,{children:"Weight"}),e.jsx(ge,{children:"Recommend"})]}),ve=()=>e.jsx(ce,{children:"Not found products"}),ke=n.div`
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
`,De=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,Te=n.p`
  /* 320-375 */

  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Ce=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,$e=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex: 1.4;
    column-gap: 8px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    flex: 1.3;
  }
`,Ee=n.div`
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
`,ze=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1;
    
  }
`,Ie=n.div`
  /* 320-375 */
  flex: 1;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
    /* flex: 1; */
    /* flex: ${i=>i.name==="Target"?1.3:1}; */
    flex: ${i=>{switch(i.name){case"Body Part":return .3;case"Equipment":return .4;case"Name":return .35;case"Target":return .8;case"Burned Calories":return .5;case"Time":return .4}}};
    @media screen and (min-width: 1440px) {
       flex: ${i=>{switch(i.name){case"Body Part":return .3;case"Equipment":return .4;case"Name":return .35;case"Target":return .6;case"Burned Calories":return .5;case"Time":return .4}}}


    };
  }
`,Se=n.div`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,Ne=n.div`
  /* 320-375 */

  display: flex;
  
  align-items: center;
  margin-bottom: 16px;
  padding: 8px 14px;
  font-size: 16px;
  color: rgb(239, 237, 232);
  max-width: ${i=>i.width||"100%"};
  height: ${i=>i.height||"auto"};
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
`,Be=n.div`
  display: flex;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,Le=n.div`
   display: none;
   font-size: 16px;
  @media screen and (min-width: 768px) {
    display: flex;
    /* display: none;
    font-size: 16px; */
  }
  @media screen and (min-width: 1440px) {
  }
`,We=n.div`
  font-size: 12px;
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    /* display: none; */
  }
`,Me=n.div`
  font-size: 11px;
  @media screen and (min-width: 768px) {
    /* display: flex; */
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`,_e=n.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,Pe=n(E)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
`;const Fe=n.button`
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
`,qe=n.ul`
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
`,Oe=n.li`
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
`;n.div`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${i=>i.value?"#419B09":"#E9101D"};
`;const Re=n.div`
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
`,Ae=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
  }
`,Ve=n.div``,He=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 65px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 80px;
  }
`,Ge=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 90px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 112px;
  }
`,Ye=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 100px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 115px;
  }
`,Qe=n.div`
  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 62px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-left: 95px;
  }
`,Ue=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 77px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
    margin-left: 95px;
  }
`,Je=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 3px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 18px;
  }
`,I=n.svg`
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,Ke=()=>{const i=p(g.getDiary).date,t=p(g.getDiary).exercises;return e.jsxs(ke,{children:[e.jsxs(De,{children:[e.jsx(Te,{children:"Execrcises"}),e.jsxs(Pe,{to:"/exercises/body",children:[e.jsx(Ce,{children:"Add exercise"}),e.jsx(I,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${c}#icon-start`})})]})]}),e.jsx(Xe,{exercises:t,date:i})]})},Xe=({exercises:i,date:t})=>{const r=k(),a=p(g.getIsLoading);return e.jsx(e.Fragment,{children:a?e.jsx(D,{display:"flex"}):i.length?e.jsxs(e.Fragment,{children:[e.jsx(Ze,{}),e.jsx(qe,{children:i.map(({burnedCalories:d,exerciseId:{bodyPart:s,equipment:o,name:w,target:m},time:x,_id:h})=>e.jsxs(Oe,{children:[e.jsxs($e,{children:[e.jsx(u,{value:s,children:"Body Part"}),e.jsx(u,{value:o,children:"Equipment"}),e.jsx(u,{value:w,children:"Name"})]}),e.jsxs(Ee,{children:[e.jsxs(ze,{children:[e.jsx(u,{value:m,children:"Target"}),e.jsx(u,{value:Math.round(d),children:"Burned Calories"}),e.jsx(u,{value:x,children:"Time"})]}),e.jsx(Fe,{onClick:()=>{r(T.deleteDiaryExercise({exerciseId:h,date:t}))},children:e.jsx(_e,{children:e.jsx(I,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-trash`})})})})]})]},h))})]}):e.jsx(ei,{})})},u=({width:i,value:t,children:r})=>{let a=t,d=a;t.length>8&&(d=t.slice(0,8)+"...");let s=r,o=s;return r.length>10&&(o=r.slice(0,10)+"..."),e.jsxs(Ie,{name:r,children:[e.jsxs(Se,{children:[e.jsx(We,{children:s}),e.jsx(Me,{children:o})]}),e.jsxs(Ne,{width:i,name:r,children:[e.jsx(Be,{children:a}),e.jsx(Le,{children:d})]})]})},Ze=()=>e.jsxs(Ae,{children:[e.jsx(Ve,{children:"Body Part"}),e.jsx(He,{children:"Equipment"}),e.jsx(Ge,{children:"Name"}),e.jsx(Ye,{children:"Target"}),e.jsx(Ue,{children:"Burned Calor..."}),e.jsx(Qe,{children:"Burned Calories"}),e.jsx(Je,{children:"Time"})]}),ei=()=>e.jsx(Re,{children:"Not found exercises"}),ii=n.div`
  display: flex;
  max-width: 335px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;

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
`,ni=n.div`
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
    order: ${i=>{switch(i.title){case"Daily calorie intake":return 0;case"Daily norm of sports":return 3;case"Calories consumed":return 1;case"Calories burned":return 4;case"The rest of the calories":return 2;case"The rest of sports":return 5}}};
  }
  @media screen and (min-width: 1440px) {
    order: 0;
  }

  ${i=>{switch(!0){case(i.title==="Calories remaining"&&i.value<0):return`
          border-color: var(--red);          
        `;case(i.title==="Sports remaining"&&i.value<0):return`
          border-color: var(--green);          
        `}switch(!0){case(i.title==="Daily calorie intake"||i.title==="Daily physical activity"):return`
          background-color: var(--orange);          
        `;default:return`            
            background-color: rgb(239,237,232, 0.05);          
        `}}}
`,ti=n.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,ai=n.p`
  margin-left: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  @media screen and (min-width: 375px) {
    white-space: ${i=>i.children==="Sports remaining"?"normal":"nowrap"};
  }

  @media screen and (min-width: 768px) {
    line-height: 18px;
  }
  @media screen and (min-width: 1440px) {
  }

  ${i=>{switch(!0){case(i.children==="Daily calorie intake"||i.children==="Daily physical activity"):return`
          color: var(--white)
        `;default:return"color: rgb(239, 237, 232, 0.4)"}}}
`,ri=n.p`
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
`,f=n.svg`
  &.orange {
    fill: ${({theme:i})=>i.secondaryOrange};
  }
`,b=({value:i,children:t})=>{const r=p(g.getIsLoading);let a="",d=i;switch(t){case"Daily calorie intake":a=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-fluent_food-24-filled`})});break;case"Daily physical activity":a=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-dumbbell`})}),d=d.toString()+" min";break;case"Calories consumed":a=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-apple`})});break;case"Calories burned":a=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-calories-1`})});break;case"Calories remaining":a=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-bubble`})});break;case"Sports remaining":a=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-running`})}),d=d.toString()+" min";break}return t==="Calories remaining"&&i<0&&(d="- "+Math.abs(i).toString()),t==="Sports remaining"&&i<0&&(d="+ "+Math.abs(i).toString()+" min"),d||(d=0),e.jsxs(ni,{value:i,title:t,children:[e.jsxs(ti,{children:[a,e.jsx(ai,{children:t})]}),r?e.jsx(D,{display:"block"}):e.jsxs(ri,{children:[" ",d]})]})},di=()=>{const t=Math.ceil(p(N)),r=110,a=400,d=500,s=t-a,o=777;return e.jsxs(ii,{children:[e.jsx(b,{value:t,children:"Daily calorie intake"}),e.jsx(b,{value:r,children:"Daily physical activity"}),e.jsx(b,{value:a,children:"Calories consumed"}),e.jsx(b,{value:d,children:"Calories burned"}),e.jsx(b,{value:s,children:"Calories remaining"}),e.jsx(b,{value:o,children:"Sports remaining"})]})},si=l.div`
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
    padding: 0 96px;
  }
`,oi=l.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  color: var(--white);
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    display: flex;
    align-items: end;
    margin-left: 0;
  }
`,ci=l.div`
  display: flex;
  
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`,xi=l.div`
  @media screen and (min-width: 768px) {
    display: none;
  }  
`,li=l.div`
  display: none;
  @media screen and (min-width: 768px) {
  display: flex;
  }
`,pi=l.div`
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
`,hi=l.p`
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
`,mi=l.div`
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
`,gi=l.div`
  @media screen and (min-width: 768px) {
    order: 1;    
  }
`,wi=l.div`
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
`,ui=l.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1440px) {
   column-gap: 32px;
  }
`,fi=n.svg`
  &.orange {
    fill: ${({theme:i})=>i.secondaryOrange};
  }
`;function bi(i){let t=i.getDate(),r=i.getMonth()+1;const a=i.getFullYear();return t=t<10?`0${t}`:t,r=r<10?`0${r}`:r,`${a}-${r}-${t}`}const yi=()=>{W.warn("the date must be greater than your birthday",{theme:"dark"})},Ti=()=>{const i=localStorage.getItem("PowerPulsDate"),t=i?new Date(i):new Date,[r,a]=v.useState(t),d=k(),s=p(g.getDiary),{products:o,exercises:w}=s,m=p(B.getUserMetricData),x=m?new Date(m.birthday):null,h=y=>{y<x?(yi(),a(x)):a(y),localStorage.setItem("PowerPulsDate",y)};return v.useEffect(()=>{d(T.getDiary(bi(r)))},[d,r,o.length,w.length]),e.jsxs(si,{children:[e.jsx(L,{}),e.jsxs(pi,{children:[e.jsx(oi,{children:"Diary"}),e.jsxs(ci,{children:[e.jsx(xi,{children:e.jsx(C,{currentDate:r,handlerDate:h,birthdayDate:x,textSize:18,textWeight:"bold",textHeight:20,sizeArrow:18,iconColor:"var(--orange-1)"})}),e.jsx(li,{children:e.jsx(C,{currentDate:r,handlerDate:h,textSize:24,textWeight:"bold",textHeight:32,sizeArrow:18,iconColor:"var(--orange-1)"})})]})]}),e.jsxs(ui,{children:[e.jsxs(gi,{children:[e.jsx(di,{}),e.jsxs(mi,{children:[e.jsx(ji,{size:24}),e.jsx(hi,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]}),e.jsxs(wi,{children:[e.jsx(be,{}),e.jsx(Ke,{})]})]})]})},ji=({size:i})=>e.jsx("div",{style:{width:`${i}px`,height:`${i}px`},children:e.jsx(fi,{width:i,height:i,className:"orange",children:e.jsx("use",{href:`${c}#icon-exclamation-mark`})})});export{ji as IconInfo,Ti as default};
