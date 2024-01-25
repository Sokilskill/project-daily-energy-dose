import{G as C,p as n,r as v,j as e,s as c,L as E,c as m,a as k,q as D,t as I,n as x,v as N,w as B,Q as W}from"./index-178dd765.js";import{e as _,s as P,a as M}from"./react-datepicker-98772885.js";import"./defineProperty-179e1ab7.js";function L(i){return C({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(i)}function F(i){return C({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(i)}const q=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    margin-right: 0;
    margin-bottom: 32px;
  }
`,O=n.input`
font-family: Roboto;
font-weight: bold;
background: transparent;
border: 0;
padding: 0;
margin-right: 8px;
box-sizing: border-box;
background-color: inherit;
color: var(--white);
font-size: 18px;
line-height: 1.5;
outline: none;
cursor: pointer;
width: 96px;


@media screen and (min-width: 768px) {
  width: 129px;
  height: 32px;
  font-size: 24px;
  line-height: 1.5;
}
`,R=n.div`
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
`,A=n.svg`
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
`,V=n.div`
  display: flex;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`,T=({textSize:i,textWeight:t,iconColor:a,sizeArrow:r,textHeight:d,handlerDate:s,currentDate:o,birthdayDate:h})=>{const p="dd/MM/yyyy",l=v.useRef(null),g=S=>{s(S)},b=()=>{l.current&&l.current.setOpen(!0)};return e.jsxs(q,{children:[e.jsxs(R,{children:[e.jsx(_,{selected:o,onChange:g,dateFormat:p,minDate:h,customInput:e.jsx(O,{className:"diary",$textSize:i,$textWeight:t,$textHeight:d}),ref:l,shouldCloseOnSelect:!0}),e.jsx(A,{onClick:b,stroke:a,children:e.jsx("use",{href:`${c}#icon-calendar`})})]}),e.jsxs(V,{children:[e.jsx(L,{onClick:()=>{g(P(o,1))},style:{cursor:"pointer",fontSize:r?`${r}px`:"16px",color:"var(--white)",userSelect:"none"}}),e.jsx(F,{onClick:()=>{g(M(o,1))},style:{cursor:"pointer",fontSize:r?`${r}px`:"16px",color:"var(--white)",userSelect:"none"}})]})]})},H=n.div`
  /* 320-375 */
  margin: 0 auto;
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
`,G=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,Y=n.p`
  /* 320-375 */
  
  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Q=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,U=n.div`
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
`,J=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;
  
  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1.0;
     
  }
`,K=n.div`
  /* 320-375 */
  flex: 1.2;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
    flex: ${i=>i.name==="Title"?1.3:1.2};
  }
  @media screen and (min-width: 1440px) {
  }
`,X=n.p`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;    
  }
  @media screen and (min-width: 1440px) {
  }
`,Z=n.div`
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
`,ee=n.div`
    font-size: 14px;
  @media screen and (min-width: 768px) {
    display: none;
   }
  @media screen and (min-width: 1440px) {
  }
`,ie=n.div`
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
  stroke: #EF8964;
  display: inline-block;
  margin-left: 9px;
`;const ne=n.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,te=n(E)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
  
`;const ae=n.button`
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
`,re=n.ul`
  
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
`,de=n.li`
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
`,se=n.div`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${i=>i.value?"#419B09":"#E9101D"};
`,oe=n.div`
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
`,ce=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;

    
    
  }
  @media screen and (min-width: 1440px) {
    
  }
`,xe=n.div`
`,le=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 182px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 220px;
  }
`,pe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 145px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 176px;
  }
`,he=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 37px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 55px;
  }
`,me=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 46px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 65px;
  }
`,ge=i=>i.diary.data.diary,we=i=>i.diary.isLoading,ue=i=>i.diary.error,j={getDiary:ge,getIsLoading:we,getIsError:ue},$=n.svg`
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,fe=()=>{const i=m(j.getDiary).date,t=m(j.getDiary).products;return e.jsxs(H,{children:[e.jsxs(G,{children:[e.jsx(Y,{children:"Products"}),e.jsxs(te,{to:"/products",children:[e.jsx(Q,{children:"Add product"}),e.jsx($,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${c}#icon-start`})})]})]}),e.jsx(be,{products:t,date:i})]})},be=({products:i,date:t})=>{const a=k();return e.jsx(e.Fragment,{children:i.length?e.jsxs(e.Fragment,{children:[e.jsx(ye,{}),e.jsx(re,{children:i.map(({_id:r,calories:d,amount:s,recommend:o,productId:{category:h,title:p}})=>e.jsxs(de,{children:[e.jsx(y,{value:p,children:"Title"}),e.jsx(y,{value:h,children:"Category"}),e.jsxs(U,{children:[e.jsxs(J,{children:[e.jsx(y,{value:Math.round(d),children:"Calories"}),e.jsx(y,{value:s,children:"Weight"}),e.jsx(y,{value:o,children:"Recommend"})]}),e.jsx(ae,{onClick:()=>{a(D.deleteDiaryProduct({productId:r,date:t}))},children:e.jsx(ne,{children:e.jsx($,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-trash-03`})})})})]})]},r))})]}):e.jsx(je,{})})},y=({width:i,value:t,children:a})=>{let r=t;const d=typeof t=="boolean";d&&(r=t?"Yes":"No");let s=r;return typeof t>"u"&&(t=""),t.length>18&&(s=t.slice(0,18)+"..."),e.jsxs(K,{name:a,children:[e.jsx(X,{children:a}),e.jsxs(Z,{width:i,children:[d&&e.jsx(se,{value:t}),e.jsx(ee,{children:r}),e.jsx(ie,{children:s})]})]})},ye=()=>e.jsxs(ce,{children:[e.jsx(xe,{children:"Title"}),e.jsx(le,{children:"Category"}),e.jsx(pe,{children:"Calories"}),e.jsx(he,{children:"Weight"}),e.jsx(me,{children:"Recommend"})]}),je=()=>e.jsx(oe,{children:"Not found products"}),ve=n.div`
  /* 320-375 */
  margin: 0 auto;
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
`,ke=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,De=n.p`
  /* 320-375 */

  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Te=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Ce=n.div`
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
`,$e=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1;
    
  }
`,ze=n.div`
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
`,Ie=n.div`
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
`,Ne=n.div`
  display: flex;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,Be=n.div`
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
`,_e=n.div`
  font-size: 11px;
  @media screen and (min-width: 768px) {
    /* display: flex; */
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`,Pe=n.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,Me=n(E)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
`;const Le=n.button`
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
`,Fe=n.ul`
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
`,qe=n.li`
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
`;const Oe=n.div`
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
`,Re=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
  }
`,Ae=n.div``,Ve=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 65px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 80px;
  }
`,He=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 90px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 112px;
  }
`,Ge=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 100px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 115px;
  }
`,Ye=n.div`
  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 62px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-left: 95px;
  }
`,Qe=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 77px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
    margin-left: 95px;
  }
`,Ue=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 3px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 18px;
  }
`,z=n.svg`
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,Je=()=>{const i=m(j.getDiary).date,t=m(j.getDiary).exercises;return e.jsxs(ve,{children:[e.jsxs(ke,{children:[e.jsx(De,{children:"Execrcises"}),e.jsxs(Me,{to:"/exercises/body",children:[e.jsx(Te,{children:"Add exercise"}),e.jsx(z,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${c}#icon-start`})})]})]}),e.jsx(Ke,{exercises:t,date:i})]})},Ke=({exercises:i,date:t})=>{const a=k();return e.jsx(e.Fragment,{children:i.length?e.jsxs(e.Fragment,{children:[e.jsx(Xe,{}),e.jsx(Fe,{children:i.map(({burnedCalories:r,exerciseId:{bodyPart:d,equipment:s,name:o,target:h},time:p,_id:l})=>e.jsxs(qe,{children:[e.jsxs(Ce,{children:[e.jsx(w,{value:d,children:"Body Part"}),e.jsx(w,{value:s,children:"Equipment"}),e.jsx(w,{value:o,children:"Name"})]}),e.jsxs(Ee,{children:[e.jsxs($e,{children:[e.jsx(w,{value:h,children:"Target"}),e.jsx(w,{value:Math.round(r),children:"Burned Calories"}),e.jsx(w,{value:p,children:"Time"})]}),e.jsx(Le,{onClick:()=>{a(D.deleteDiaryExercise({exerciseId:l,date:t}))},children:e.jsx(Pe,{children:e.jsx(z,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-trash-03`})})})})]})]},l))})]}):e.jsx(Ze,{})})},w=({width:i,value:t,children:a})=>{let r=t,d=r;t.length>8&&(d=t.slice(0,8)+"...");let s=a,o=s;return a.length>10&&(o=a.slice(0,10)+"..."),e.jsxs(ze,{name:a,children:[e.jsxs(Se,{children:[e.jsx(We,{children:s}),e.jsx(_e,{children:o})]}),e.jsxs(Ie,{width:i,name:a,children:[e.jsx(Ne,{children:r}),e.jsx(Be,{children:d})]})]})},Xe=()=>e.jsxs(Re,{children:[e.jsx(Ae,{children:"Body Part"}),e.jsx(Ve,{children:"Equipment"}),e.jsx(He,{children:"Name"}),e.jsx(Ge,{children:"Target"}),e.jsx(Qe,{children:"Burned Calor..."}),e.jsx(Ye,{children:"Burned Calories"}),e.jsx(Ue,{children:"Time"})]}),Ze=()=>e.jsx(Oe,{children:"Not found exercises"}),ei=n.div`
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
`,ii=n.div`
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
`,ni=n.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,ti=n.p`
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
`,ai=n.p`
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
`,u=n.svg`
  &.orange {
    fill: ${({theme:i})=>i.secondaryOrange};
  }
`,f=({value:i,children:t})=>{let a="",r=i;switch(t){case"Daily calorie intake":a=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-fluent_food-24-filled`})});break;case"Daily physical activity":a=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-dumbbell`})}),r=r.toString()+" min";break;case"Calories consumed":a=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-apple`})});break;case"Calories burned":a=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-calories-1`})});break;case"Calories remaining":a=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-bubble`})});break;case"Sports remaining":a=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-running`})}),r=r.toString()+" min";break}return t==="Calories remaining"&&i<0&&(r="- "+Math.abs(i).toString()),t==="Sports remaining"&&i<0&&(r="+ "+Math.abs(i).toString()+" min"),r||(r=0),e.jsxs(ii,{value:i,title:t,children:[e.jsxs(ni,{children:[a,e.jsx(ti,{children:t})]}),e.jsxs(ai,{children:[" ",r]})]})},ri=()=>{const t=Math.ceil(m(I)),a=110,r=400,d=500,s=t-r,o=777;return e.jsxs(ei,{children:[e.jsx(f,{value:t,children:"Daily calorie intake"}),e.jsx(f,{value:a,children:"Daily physical activity"}),e.jsx(f,{value:r,children:"Calories consumed"}),e.jsx(f,{value:d,children:"Calories burned"}),e.jsx(f,{value:s,children:"Calories remaining"}),e.jsx(f,{value:o,children:"Sports remaining"})]})},di=x.div`
  margin: 0 auto;
  padding-top: 40px;
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
`,si=x.h2`
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
`,oi=x.div`
  display: flex;
  
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`,ci=x.div`
  @media screen and (min-width: 768px) {
    display: none;
  }  
`,xi=x.div`
  display: none;
  @media screen and (min-width: 768px) {
  display: flex;
  }
`,li=x.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 72px;
    margin-bottom: 32px;
    align-items: normal;
  }
`,pi=x.p`
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
`,hi=x.div`
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
`,mi=x.div`
  @media screen and (min-width: 768px) {
    order: 1;    
  }
`,gi=x.div`
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
`,wi=x.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1440px) {
   column-gap: 32px;
  }
`,ui=n.svg`
  &.orange {
    fill: ${({theme:i})=>i.secondaryOrange};
  }
`;function fi(i){let t=i.getDate(),a=i.getMonth()+1;const r=i.getFullYear();return t=t<10?`0${t}`:t,a=a<10?`0${a}`:a,`${r}-${a}-${t}`}const bi=()=>{W.warn("the date must be greater than your birthday",{theme:"dark"})},Di=()=>{const i=localStorage.getItem("PowerPulsDate"),t=i?new Date(i):new Date,[a,r]=v.useState(t),d=k(),s=m(j.getDiary),{products:o,exercises:h}=s,p=m(N.getUserMetricData),l=p?new Date(p.birthday):null,g=b=>{b<l?(bi(),r(l)):r(b),localStorage.setItem("PowerPulsDate",b)};return v.useEffect(()=>{d(D.getDiary(fi(a)))},[d,a,o.length,h.length]),e.jsxs(di,{children:[e.jsx(B,{}),e.jsxs(li,{children:[e.jsx(si,{children:"Diary"}),e.jsxs(oi,{children:[e.jsx(ci,{children:e.jsx(T,{currentDate:a,handlerDate:g,birthdayDate:l,textSize:18,textWeight:"bold",textHeight:20,sizeArrow:18,iconColor:"var(--orange-1)"})}),e.jsx(xi,{children:e.jsx(T,{currentDate:a,handlerDate:g,textSize:24,textWeight:"bold",textHeight:32,sizeArrow:18,iconColor:"var(--orange-1)"})})]})]}),e.jsxs(wi,{children:[e.jsxs(mi,{children:[e.jsx(ri,{}),e.jsxs(hi,{children:[e.jsx(yi,{size:24}),e.jsx(pi,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]}),e.jsxs(gi,{children:[e.jsx(fe,{}),e.jsx(Je,{})]})]})]})},yi=({size:i})=>e.jsx("div",{style:{width:`${i}px`,height:`${i}px`},children:e.jsxs(ui,{width:i,height:i,className:"orange",children:[e.jsx("use",{href:c+"#icon-Ellipse-1",style:{fill:"rgba(239, 160, 130, 1)",width:"100%",height:"100%",position:"relative"}}),e.jsx("use",{href:c+"#icon-tabler_exclamation-mark",style:{fill:"rgba(239, 237, 232, 1)",position:"absolute",top:"50%",left:"50%",width:"100%",height:"100%"}})]})});export{yi as IconInfo,Di as default};
