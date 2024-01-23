import{G as $,k as n,r as v,j as e,s as c,L as C,c as l,a as k,M as T,v as D,w as z,n as p,x as B,Q as P}from"./index-9f7993e6.js";import{e as L,s as W,a as M}from"./react-datepicker-7f790ee3.js";import"./defineProperty-179e1ab7.js";function _(i){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(i)}function F(i){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(i)}const O=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`,R=n.input`
font-family: Roboto;
font-weight: bold;
background: transparent;
border: none;
background-color: inherit;
color: var(--white);
font-size: 18px;
line-height: 1.5;
outline: none;
cursor: pointer;
width: 100px;
height: 100%;

@media screen and (min-width: 768px) {
  width: 135px;
  font-size: 24px;
  line-height: 1.5;
}
`,q=n.div`
  display: flex;
  gap: 8px;
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
  margin-left: 26px;
  @media screen and (min-width: 768px) {
    margin-left: 26px;
  }
`,E=({textSize:i,textWeight:t,iconColor:a,sizeArrow:r,textHeight:d,handlerDate:s,currentDate:o,birthdayDate:w})=>{const g="dd/MM/yyyy",x=v.useRef(null),h=N=>{s(N)},y=()=>{x.current&&x.current.setOpen(!0)};return e.jsxs(O,{children:[e.jsxs(q,{children:[e.jsx(L,{selected:o,onChange:h,dateFormat:g,minDate:w,customInput:e.jsx(R,{className:"diary",$textSize:i,$textWeight:t,$textHeight:d}),ref:x,shouldCloseOnSelect:!0}),e.jsx(A,{onClick:y,stroke:a,children:e.jsx("use",{href:`${c}#icon-calendar`})})]}),e.jsxs(V,{children:[e.jsx(_,{onClick:()=>{h(W(o,1))},style:{cursor:"pointer",fontSize:r?`${r}px`:"16px",color:"var(--white)",userSelect:"none"}}),e.jsx(F,{onClick:()=>{h(M(o,1))},style:{cursor:"pointer",fontSize:r?`${r}px`:"16px",color:"var(--white)",userSelect:"none"}})]})]})},H=n.div`
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
`,U=n.p`
  /* 320-375 */
  
  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Y=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Q=n.div`
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
  fill: ${i=>i.color||"#ffffff"};
  display: inline-block;
  margin-left: 9px;
`;const ne=n.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,te=n(C)`
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
`,ae=n.ul`
  
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
`,ge=i=>i.diary.data,we=i=>i.diary.isLoading,fe=i=>i.diary.error,m={getDiary:ge,getIsLoading:we,getIsError:fe},I=n.svg`
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,ue=()=>{const i=l(m.getDiary).eatenProducts;return e.jsxs(H,{children:[e.jsxs(G,{children:[e.jsx(U,{children:"Products"}),e.jsxs(te,{to:"/products",children:[e.jsx(Y,{children:"Add product"}),e.jsx(I,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${c}#icon-start`})})]})]}),e.jsx(be,{products:i})]})},be=({products:i})=>{const t=k(),a=l(m.getIsLoading);return e.jsx(e.Fragment,{children:a?e.jsx(T,{display:"flex"}):i.length?e.jsxs(e.Fragment,{children:[e.jsx(ye,{}),e.jsx(ae,{children:i.map(({_id:r,calories:d,amount:s,recommend:o,date:w,productId:{category:g,title:x}})=>e.jsxs(de,{children:[e.jsx(j,{value:x,children:"Title"}),e.jsx(j,{value:g,children:"Category"}),e.jsxs(Q,{children:[e.jsxs(J,{children:[e.jsx(j,{value:d,children:"Calories"}),e.jsx(j,{value:s,children:"Weight"}),e.jsx(j,{value:o,children:"Recommend"})]}),e.jsx(re,{onClick:()=>{t(D.deleteDiaryProduct({productId:r,date:w}))},children:e.jsx(ne,{children:e.jsx(I,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-trash`})})})})]})]},r))})]}):e.jsx(je,{})})},j=({width:i,value:t,children:a})=>{let r=t;const d=typeof t=="boolean";d&&(r=t?"Yes":"No");let s=r;return typeof t>"u"&&(t=""),t.length>18&&(s=t.slice(0,18)+"..."),e.jsxs(K,{name:a,children:[e.jsx(X,{children:a}),e.jsxs(Z,{width:i,children:[d&&e.jsx(se,{value:t}),e.jsx(ee,{children:r}),e.jsx(ie,{children:s})]})]})},ye=()=>e.jsxs(ce,{children:[e.jsx(xe,{children:"Title"}),e.jsx(le,{children:"Category"}),e.jsx(pe,{children:"Calories"}),e.jsx(he,{children:"Weight"}),e.jsx(me,{children:"Recommend"})]}),je=()=>e.jsx(oe,{children:"Not found products"}),ve=n.div`
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
`,Te=n.p`
  /* 320-375 */

  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,De=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Ee=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex: 1.4;
    column-gap: 8px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    flex: 1.3;
  }
`,$e=n.div`
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
`,Ce=n.div`
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
`,Ie=n.div`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,Se=n.div`
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
`,Pe=n.div`
  font-size: 12px;
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    /* display: none; */
  }
`,Le=n.div`
  font-size: 11px;
  @media screen and (min-width: 768px) {
    /* display: flex; */
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`,We=n.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,Me=n(C)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
`;const _e=n.button`
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
`,qe=n.div`
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
`,Ue=n.div`
  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 62px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-left: 95px;
  }
`,Ye=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 77px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
    margin-left: 95px;
  }
`,Qe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 3px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 18px;
  }
`,S=n.svg`
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,Je=()=>{const i=l(m.getDiary).doneExercises;return e.jsxs(ve,{children:[e.jsxs(ke,{children:[e.jsx(Te,{children:"Execrcises"}),e.jsxs(Me,{to:"/exercises/bodyParts",children:[e.jsx(De,{children:"Add exercise"}),e.jsx(S,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${c}#icon-start`})})]})]}),e.jsx(Ke,{exercises:i})]})},Ke=({exercises:i})=>{const t=k(),a=l(m.getIsLoading);return e.jsx(e.Fragment,{children:a?e.jsx(T,{display:"flex"}):i.length?e.jsxs(e.Fragment,{children:[e.jsx(Xe,{}),e.jsx(Fe,{children:i.map(({burnedCalories:r,date:d,exerciseId:{bodyPart:s,equipment:o,name:w,target:g},time:x,_id:h})=>e.jsxs(Oe,{children:[e.jsxs(Ee,{children:[e.jsx(f,{value:s,children:"Body Part"}),e.jsx(f,{value:o,children:"Equipment"}),e.jsx(f,{value:w,children:"Name"})]}),e.jsxs($e,{children:[e.jsxs(Ce,{children:[e.jsx(f,{value:g,children:"Target"}),e.jsx(f,{value:r,children:"Burned Calories"}),e.jsx(f,{value:x,children:"Time"})]}),e.jsx(_e,{onClick:()=>{t(D.deleteDiaryExercise({exerciseId:h,date:d}))},children:e.jsx(We,{children:e.jsx(S,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-trash`})})})})]})]},h))})]}):e.jsx(Ze,{})})},f=({width:i,value:t,children:a})=>{let r=t,d=r;t.length>8&&(d=t.slice(0,8)+"...");let s=a,o=s;return a.length>10&&(o=a.slice(0,10)+"..."),e.jsxs(ze,{name:a,children:[e.jsxs(Ie,{children:[e.jsx(Pe,{children:s}),e.jsx(Le,{children:o})]}),e.jsxs(Se,{width:i,name:a,children:[e.jsx(Ne,{children:r}),e.jsx(Be,{children:d})]})]})},Xe=()=>e.jsxs(qe,{children:[e.jsx(Ae,{children:"Body Part"}),e.jsx(Ve,{children:"Equipment"}),e.jsx(He,{children:"Name"}),e.jsx(Ge,{children:"Target"}),e.jsx(Ye,{children:"Burned Calor..."}),e.jsx(Ue,{children:"Burned Calories"}),e.jsx(Qe,{children:"Time"})]}),Ze=()=>e.jsx(Re,{children:"Not found exercises"}),ei=n.div`
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

  ${i=>{switch(!0){case(i.title==="The rest of the calories"&&i.value<0):return`
          border-color: var(--red);          
        `;case(i.title==="The rest of sports"&&i.value<0):return`
          border-color: var(--green);          
        `}switch(!0){case(i.title==="Daily calorie intake"||i.title==="Daily norm of sports"):return`
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
    white-space: ${i=>i.children==="The rest of the calories"?"normal":"nowrap"};
  }

  @media screen and (min-width: 768px) {
    line-height: 18px;
  }
  @media screen and (min-width: 1440px) {

  }

  ${i=>{switch(!0){case(i.children==="Daily calorie intake"||i.children==="Daily norm of sports"):return`
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
`,u=n.svg`
  &.orange {
    fill: ${({theme:i})=>i.secondaryOrange};
  }
`,ai=()=>{const i=l(z.getUserMetricData),t=i?i.dailyIntakeCalories:null,a=i?i.dailyNormOfSport:null,r=l(m.getDiary).consumedCalories,d=l(m.getDiary).burnedCalories,s=t-r,o=a-Math.ceil(l(m.getDiary).sportTime/60);return e.jsxs(ei,{children:[e.jsx(b,{value:t,children:"Daily calorie intake"}),e.jsx(b,{value:a,children:"Daily norm of sports"}),e.jsx(b,{value:r,children:"Calories consumed"}),e.jsx(b,{value:d,children:"Calories burned"}),e.jsx(b,{value:s,children:"The rest of the calories"}),e.jsx(b,{value:o,children:"The rest of sports"})]})},b=({value:i,children:t})=>{const a=l(m.getIsLoading);let r="",d=i;switch(t){case"Daily calorie intake":r=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-fluent_food-24-filled`})});break;case"Daily norm of sports":r=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-dumbbell`})}),d=d!=null?d.toString()+" min":"N/A";break;case"Calories consumed":r=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-apple`})});break;case"Calories burned":r=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-calories-1`})});break;case"The rest of the calories":r=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-bubble`})});break;case"The rest of sports":r=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-running`})}),d=d.toString()+" min";break}return t==="The rest of the calories"&&i<0&&(d="- "+Math.abs(i).toString()),t==="The rest of sports"&&i<0&&(d="+ "+Math.abs(i).toString()+" min"),d||(d=0),e.jsxs(ii,{value:i,title:t,children:[e.jsxs(ni,{children:[r,e.jsx(ti,{children:t})]}),a?e.jsx(T,{display:"block"}):e.jsxs(ri,{children:[" ",d]})]})},di=p.div`
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
`,si=p.h2`
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
`,oi=p.div`
  display: flex;
  
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`,ci=p.div`
  @media screen and (min-width: 768px) {
    display: none;
  }  
`,xi=p.div`
  display: none;
  @media screen and (min-width: 768px) {
  display: flex;
  }
`,li=p.div`
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
`,pi=p.p`
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
`,hi=p.div`
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
`,mi=p.div`
  @media screen and (min-width: 768px) {
    order: 1;    
  }
`,gi=p.div`
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
`,wi=p.div`
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
`;function ui(i){let t=i.getDate(),a=i.getMonth()+1;const r=i.getFullYear();return t=t<10?`0${t}`:t,a=a<10?`0${a}`:a,`${t}/${a}/${r}`}const bi=()=>{P.warn("the date must be greater than your birthday",{theme:"dark"})},Ti=()=>{const i=localStorage.getItem("PowerPulsDate"),t=i?new Date(i):new Date,[a,r]=v.useState(t),d=k(),s=l(m.getDiary),{eatenProducts:o,doneExercises:w}=s,g=l(z.getUserMetricData),x=g?new Date(g.birthday):null,h=y=>{y<x?(bi(),r(x)):r(y),localStorage.setItem("PowerPulsDate",y)};return v.useEffect(()=>{d(D.getDiary("?date="+ui(a)))},[d,a,o.length,w.length]),e.jsxs(di,{children:[e.jsx(B,{}),e.jsxs(li,{children:[e.jsx(si,{children:"Diary"}),e.jsxs(oi,{children:[e.jsx(ci,{children:e.jsx(E,{currentDate:a,handlerDate:h,birthdayDate:x,textSize:18,textWeight:"bold",textHeight:20,sizeArrow:18,iconColor:"var(--orange-1)"})}),e.jsx(xi,{children:e.jsx(E,{currentDate:a,handlerDate:h,textSize:24,textWeight:"bold",textHeight:32,sizeArrow:18,iconColor:"var(--orange-1)"})})]})]}),e.jsxs(wi,{children:[e.jsxs(mi,{children:[e.jsx(ai,{}),e.jsxs(hi,{children:[e.jsx(yi,{size:24}),e.jsx(pi,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]}),e.jsxs(gi,{children:[e.jsx(ue,{}),e.jsx(Je,{})]})]})]})},yi=({size:i})=>e.jsx("div",{style:{width:`${i}px`,height:`${i}px`},children:e.jsx(fi,{width:i,height:i,className:"orange",children:e.jsx("use",{href:`${c}#icon-exclamation-mark`})})});export{yi as IconInfo,Ti as default};
