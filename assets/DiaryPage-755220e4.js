import{p as n,r as v,j as e,s as c,I as N,q as P,L as $,c as l,a as k,M as T,t as D,v as C,n as p,w as B,Q as W}from"./index-e3a30834.js";import{e as _,s as M,a as L}from"./react-datepicker-9b95838b.js";import"./defineProperty-179e1ab7.js";const F=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-right: 0;
  }
`,O=n.input`
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
`,q=n.div`
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
`,R=n.svg`
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
`,A=n.div`
  display: flex;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`,E=({textSize:i,textWeight:t,iconColor:a,sizeArrow:r,textHeight:d,handlerDate:s,currentDate:o,birthdayDate:w})=>{const g="dd/MM/yyyy",x=v.useRef(null),h=S=>{s(S)},y=()=>{x.current&&x.current.setOpen(!0)};return e.jsxs(F,{children:[e.jsxs(q,{children:[e.jsx(_,{selected:o,onChange:h,dateFormat:g,minDate:w,customInput:e.jsx(O,{className:"diary",$textSize:i,$textWeight:t,$textHeight:d}),ref:x,shouldCloseOnSelect:!0}),e.jsx(R,{onClick:y,stroke:a,children:e.jsx("use",{href:`${c}#icon-calendar`})})]}),e.jsxs(A,{children:[e.jsx(N,{onClick:()=>{h(M(o,1))},style:{cursor:"pointer",fontSize:r?`${r}px`:"16px",color:"var(--white)",userSelect:"none"}}),e.jsx(P,{onClick:()=>{h(L(o,1))},style:{cursor:"pointer",fontSize:r?`${r}px`:"16px",color:"var(--white)",userSelect:"none"}})]})]})},V=n.div`
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
`,H=n.div`
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
`,G=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;
  
  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1.0;
     
  }
`,J=n.div`
  /* 320-375 */
  flex: 1.2;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
    flex: ${i=>i.name==="Title"?1.3:1.2};
  }
  @media screen and (min-width: 1440px) {
  }
`,K=n.p`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;    
  }
  @media screen and (min-width: 1440px) {
  }
`,X=n.div`
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
`,Z=n.div`
    font-size: 14px;
  @media screen and (min-width: 768px) {
    display: none;
   }
  @media screen and (min-width: 1440px) {
  }
`,ee=n.div`
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
`;const ie=n.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,ne=n($)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
  
`;const te=n.button`
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
`,ae=n.li`
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
`,de=n.div`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${i=>i.value?"#419B09":"#E9101D"};
`,se=n.div`
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
`,oe=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;

    
    
  }
  @media screen and (min-width: 1440px) {
    
  }
`,ce=n.div`
`,xe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 182px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 220px;
  }
`,le=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 145px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 176px;
  }
`,pe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 37px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 55px;
  }
`,he=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 46px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 65px;
  }
`,me=i=>i.diary.data,ge=i=>i.diary.isLoading,we=i=>i.diary.error,m={getDiary:me,getIsLoading:ge,getIsError:we},z=n.svg`
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,fe=()=>{const i=l(m.getDiary).eatenProducts;return e.jsxs(V,{children:[e.jsxs(H,{children:[e.jsx(U,{children:"Products"}),e.jsxs(ne,{to:"/products",children:[e.jsx(Y,{children:"Add product"}),e.jsx(z,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${c}#icon-start`})})]})]}),e.jsx(ue,{products:i})]})},ue=({products:i})=>{const t=k(),a=l(m.getIsLoading);return e.jsx(e.Fragment,{children:a?e.jsx(T,{display:"flex"}):i.length?e.jsxs(e.Fragment,{children:[e.jsx(be,{}),e.jsx(re,{children:i.map(({_id:r,calories:d,amount:s,recommend:o,date:w,productId:{category:g,title:x}})=>e.jsxs(ae,{children:[e.jsx(j,{value:x,children:"Title"}),e.jsx(j,{value:g,children:"Category"}),e.jsxs(Q,{children:[e.jsxs(G,{children:[e.jsx(j,{value:d,children:"Calories"}),e.jsx(j,{value:s,children:"Weight"}),e.jsx(j,{value:o,children:"Recommend"})]}),e.jsx(te,{onClick:()=>{t(D.deleteDiaryProduct({productId:r,date:w}))},children:e.jsx(ie,{children:e.jsx(z,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-trash`})})})})]})]},r))})]}):e.jsx(ye,{})})},j=({width:i,value:t,children:a})=>{let r=t;const d=typeof t=="boolean";d&&(r=t?"Yes":"No");let s=r;return typeof t>"u"&&(t=""),t.length>18&&(s=t.slice(0,18)+"..."),e.jsxs(J,{name:a,children:[e.jsx(K,{children:a}),e.jsxs(X,{width:i,children:[d&&e.jsx(de,{value:t}),e.jsx(Z,{children:r}),e.jsx(ee,{children:s})]})]})},be=()=>e.jsxs(oe,{children:[e.jsx(ce,{children:"Title"}),e.jsx(xe,{children:"Category"}),e.jsx(le,{children:"Calories"}),e.jsx(pe,{children:"Weight"}),e.jsx(he,{children:"Recommend"})]}),ye=()=>e.jsx(se,{children:"Not found products"}),je=n.div`
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
`,ve=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,ke=n.p`
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
`,De=n.div`
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
`,Ce=n.div`
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
`,ze=n.div`
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
`,Se=n.div`
  display: flex;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,Ne=n.div`
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
`,Be=n.div`
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
`,_e=n($)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
`;const Me=n.button`
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
`,Le=n.ul`
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
`,Fe=n.li`
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
`,Re=n.div``,Ae=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 65px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 80px;
  }
`,Ve=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 90px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 112px;
  }
`,He=n.div`
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
`,I=n.svg`
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,Ge=()=>{const i=l(m.getDiary).doneExercises;return e.jsxs(je,{children:[e.jsxs(ve,{children:[e.jsx(ke,{children:"Execrcises"}),e.jsxs(_e,{to:"/exercises/bodyParts",children:[e.jsx(Te,{children:"Add exercise"}),e.jsx(I,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${c}#icon-start`})})]})]}),e.jsx(Je,{exercises:i})]})},Je=({exercises:i})=>{const t=k(),a=l(m.getIsLoading);return e.jsx(e.Fragment,{children:a?e.jsx(T,{display:"flex"}):i.length?e.jsxs(e.Fragment,{children:[e.jsx(Ke,{}),e.jsx(Le,{children:i.map(({burnedCalories:r,date:d,exerciseId:{bodyPart:s,equipment:o,name:w,target:g},time:x,_id:h})=>e.jsxs(Fe,{children:[e.jsxs(De,{children:[e.jsx(f,{value:s,children:"Body Part"}),e.jsx(f,{value:o,children:"Equipment"}),e.jsx(f,{value:w,children:"Name"})]}),e.jsxs(Ee,{children:[e.jsxs($e,{children:[e.jsx(f,{value:g,children:"Target"}),e.jsx(f,{value:r,children:"Burned Calories"}),e.jsx(f,{value:x,children:"Time"})]}),e.jsx(Me,{onClick:()=>{t(D.deleteDiaryExercise({exerciseId:h,date:d}))},children:e.jsx(We,{children:e.jsx(I,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-trash`})})})})]})]},h))})]}):e.jsx(Xe,{})})},f=({width:i,value:t,children:a})=>{let r=t,d=r;t.length>8&&(d=t.slice(0,8)+"...");let s=a,o=s;return a.length>10&&(o=a.slice(0,10)+"..."),e.jsxs(Ce,{name:a,children:[e.jsxs(ze,{children:[e.jsx(Pe,{children:s}),e.jsx(Be,{children:o})]}),e.jsxs(Ie,{width:i,name:a,children:[e.jsx(Se,{children:r}),e.jsx(Ne,{children:d})]})]})},Ke=()=>e.jsxs(qe,{children:[e.jsx(Re,{children:"Body Part"}),e.jsx(Ae,{children:"Equipment"}),e.jsx(Ve,{children:"Name"}),e.jsx(He,{children:"Target"}),e.jsx(Ye,{children:"Burned Calor..."}),e.jsx(Ue,{children:"Burned Calories"}),e.jsx(Qe,{children:"Time"})]}),Xe=()=>e.jsx(Oe,{children:"Not found exercises"}),Ze=n.div`
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
`,ei=n.div`
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
`,ii=n.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,ni=n.p`
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
`,ti=n.p`
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
`,ri=()=>{const i=l(C.getUserMetricData),t=i?i.dailyIntakeCalories:null,a=i?i.dailyNormOfSport:null,r=l(m.getDiary).consumedCalories,d=l(m.getDiary).burnedCalories,s=t-r,o=a-Math.ceil(l(m.getDiary).sportTime/60);return e.jsxs(Ze,{children:[e.jsx(b,{value:t,children:"Daily calorie intake"}),e.jsx(b,{value:a,children:"Daily norm of sports"}),e.jsx(b,{value:r,children:"Calories consumed"}),e.jsx(b,{value:d,children:"Calories burned"}),e.jsx(b,{value:s,children:"The rest of the calories"}),e.jsx(b,{value:o,children:"The rest of sports"})]})},b=({value:i,children:t})=>{const a=l(m.getIsLoading);let r="",d=i;switch(t){case"Daily calorie intake":r=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-fluent_food-24-filled`})});break;case"Daily norm of sports":r=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-dumbbell`})}),d=d!=null?d.toString()+" min":"N/A";break;case"Calories consumed":r=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-apple`})});break;case"Calories burned":r=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-calories-1`})});break;case"The rest of the calories":r=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-bubble`})});break;case"The rest of sports":r=e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-running`})}),d=d.toString()+" min";break}return t==="The rest of the calories"&&i<0&&(d="- "+Math.abs(i).toString()),t==="The rest of sports"&&i<0&&(d="+ "+Math.abs(i).toString()+" min"),d||(d=0),e.jsxs(ei,{value:i,title:t,children:[e.jsxs(ii,{children:[r,e.jsx(ni,{children:t})]}),a?e.jsx(T,{display:"block"}):e.jsxs(ti,{children:[" ",d]})]})},ai=p.div`
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
`,di=p.h2`
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
`,si=p.div`
  display: flex;
  
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`,oi=p.div`
  @media screen and (min-width: 768px) {
    display: none;
  }  
`,ci=p.div`
  display: none;
  @media screen and (min-width: 768px) {
  display: flex;
  }
`,xi=p.div`
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
`,li=p.p`
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
`,pi=p.div`
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
`,hi=p.div`
  @media screen and (min-width: 768px) {
    order: 1;    
  }
`,mi=p.div`
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
`,gi=p.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1440px) {
   column-gap: 32px;
  }
`,wi=n.svg`
  &.orange {
    fill: ${({theme:i})=>i.secondaryOrange};
  }
`;function fi(i){let t=i.getDate(),a=i.getMonth()+1;const r=i.getFullYear();return t=t<10?`0${t}`:t,a=a<10?`0${a}`:a,`${t}/${a}/${r}`}const ui=()=>{W.warn("the date must be greater than your birthday",{theme:"dark"})},ki=()=>{const i=localStorage.getItem("PowerPulsDate"),t=i?new Date(i):new Date,[a,r]=v.useState(t),d=k(),s=l(m.getDiary),{eatenProducts:o,doneExercises:w}=s,g=l(C.getUserMetricData),x=g?new Date(g.birthday):null,h=y=>{y<x?(ui(),r(x)):r(y),localStorage.setItem("PowerPulsDate",y)};return v.useEffect(()=>{d(D.getDiary("?date="+fi(a)))},[d,a,o.length,w.length]),e.jsxs(ai,{children:[e.jsx(B,{}),e.jsxs(xi,{children:[e.jsx(di,{children:"Diary"}),e.jsxs(si,{children:[e.jsx(oi,{children:e.jsx(E,{currentDate:a,handlerDate:h,birthdayDate:x,textSize:18,textWeight:"bold",textHeight:20,sizeArrow:18,iconColor:"var(--orange-1)"})}),e.jsx(ci,{children:e.jsx(E,{currentDate:a,handlerDate:h,textSize:24,textWeight:"bold",textHeight:32,sizeArrow:18,iconColor:"var(--orange-1)"})})]})]}),e.jsxs(gi,{children:[e.jsxs(hi,{children:[e.jsx(ri,{}),e.jsxs(pi,{children:[e.jsx(bi,{size:24}),e.jsx(li,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]}),e.jsxs(mi,{children:[e.jsx(fe,{}),e.jsx(Ge,{})]})]})]})},bi=({size:i})=>e.jsx("div",{style:{width:`${i}px`,height:`${i}px`},children:e.jsx(wi,{width:i,height:i,className:"orange",children:e.jsx("use",{href:`${c}#icon-exclamation-mark`})})});export{bi as IconInfo,ki as default};
