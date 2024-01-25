import{G as T,p as n,r as v,j as e,s as p,L as E,c as g,a as k,q as D,t as I,v as N,w as B,x as M,n as m,y as W,z as _,Q as P}from"./index-12738446.js";import{e as L,s as O,a as F}from"./react-datepicker-7e49f968.js";import"./defineProperty-179e1ab7.js";function R(i){return T({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(i)}function q(i){return T({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(i)}const A=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    margin-right: 0;
    margin-bottom: 32px;
  }
`,V=n.input`
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
`,H=n.div`
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
`,G=n.svg`
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
`,Y=n.div`
  display: flex;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`,C=({textSize:i,textWeight:t,iconColor:r,sizeArrow:a,textHeight:d,handlerDate:s,currentDate:o,birthdayDate:w})=>{const h="dd/MM/yyyy",c=v.useRef(null),x=S=>{s(S)},l=()=>{c.current&&c.current.setOpen(!0)};return e.jsxs(A,{children:[e.jsxs(H,{children:[e.jsx(L,{selected:o,onChange:x,dateFormat:h,minDate:w,customInput:e.jsx(V,{className:"diary",$textSize:i,$textWeight:t,$textHeight:d}),ref:c,shouldCloseOnSelect:!0}),e.jsx(G,{onClick:l,stroke:r,children:e.jsx("use",{href:`${p}#icon-calendar`})})]}),e.jsxs(Y,{children:[e.jsx(R,{onClick:()=>{x(O(o,1))},style:{cursor:"pointer",fontSize:a?`${a}px`:"16px",color:"var(--white)",userSelect:"none"}}),e.jsx(q,{onClick:()=>{x(F(o,1))},style:{cursor:"pointer",fontSize:a?`${a}px`:"16px",color:"var(--white)",userSelect:"none"}})]})]})},Q=n.div`
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
`,U=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,J=n.p`
  /* 320-375 */
  
  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,K=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,X=n.div`
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
`,Z=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;
  
  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1.0;
     
  }
`,ee=n.div`
  /* 320-375 */
  flex: 1.2;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
    flex: ${i=>i.name==="Title"?1.3:1.2};
  }
  @media screen and (min-width: 1440px) {
  }
`,ie=n.p`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;    
  }
  @media screen and (min-width: 1440px) {
  }
`,ne=n.div`
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
`,te=n.div`
    font-size: 14px;
  @media screen and (min-width: 768px) {
    display: none;
   }
  @media screen and (min-width: 1440px) {
  }
`,re=n.div`
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
`;const ae=n.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,de=n(E)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
  
`;const se=n.button`
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
`,oe=n.ul`
  
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
`,ce=n.li`
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
`,xe=n.div`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${i=>i.value?"#419B09":"#E9101D"};
`,le=n.div`
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
`,pe=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;

    
    
  }
  @media screen and (min-width: 1440px) {
    
  }
`,he=n.div`
`,me=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 182px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 220px;
  }
`,ge=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 145px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 176px;
  }
`,we=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 37px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 55px;
  }
`,ue=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 46px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 65px;
  }
`,fe=i=>i.diary.data.diary,be=i=>i.diary.isLoading,ye=i=>i.diary.error,j={getDiary:fe,getIsLoading:be,getIsError:ye},$=n.svg`
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,je=()=>{const i=g(j.getDiary).date,t=g(j.getDiary).products;return e.jsxs(Q,{children:[e.jsxs(U,{children:[e.jsx(J,{children:"Products"}),e.jsxs(de,{to:"/products",children:[e.jsx(K,{children:"Add product"}),e.jsx($,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${p}#icon-start`})})]})]}),e.jsx(ve,{products:t,date:i})]})},ve=({products:i,date:t})=>{const r=k();return e.jsx(e.Fragment,{children:i.length?e.jsxs(e.Fragment,{children:[e.jsx(ke,{}),e.jsx(oe,{children:i.map(({_id:a,calories:d,amount:s,recommend:o,productId:{category:w,title:h}})=>e.jsxs(ce,{children:[e.jsx(y,{value:h,children:"Title"}),e.jsx(y,{value:w,children:"Category"}),e.jsxs(X,{children:[e.jsxs(Z,{children:[e.jsx(y,{value:Math.round(d),children:"Calories"}),e.jsx(y,{value:s,children:"Weight"}),e.jsx(y,{value:o,children:"Recommend"})]}),e.jsx(se,{onClick:()=>{r(D.deleteDiaryProduct({productId:a,date:t}))},children:e.jsx(ae,{children:e.jsx($,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${p}#icon-trash-03`})})})})]})]},a))})]}):e.jsx(De,{})})},y=({width:i,value:t,children:r})=>{let a=t;const d=typeof t=="boolean";d&&(a=t?"Yes":"No");let s=a;return typeof t>"u"&&(t=""),t.length>18&&(s=t.slice(0,18)+"..."),e.jsxs(ee,{name:r,children:[e.jsx(ie,{children:r}),e.jsxs(ne,{width:i,children:[d&&e.jsx(xe,{value:t}),e.jsx(te,{children:a}),e.jsx(re,{children:s})]})]})},ke=()=>e.jsxs(pe,{children:[e.jsx(he,{children:"Title"}),e.jsx(me,{children:"Category"}),e.jsx(ge,{children:"Calories"}),e.jsx(we,{children:"Weight"}),e.jsx(ue,{children:"Recommend"})]}),De=()=>e.jsx(le,{children:"Not found products"}),Ce=n.div`
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
`,Te=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,Ee=n.p`
  /* 320-375 */

  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,$e=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,ze=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex: 1.4;
    column-gap: 8px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    flex: 1.3;
  }
`,Se=n.div`
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
`,Ie=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1;
    
  }
`,Ne=n.div`
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
`,Be=n.div`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,Me=n.div`
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
`,We=n.div`
  display: flex;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,_e=n.div`
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
`,Oe=n.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,Fe=n(E)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
`;const Re=n.button`
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
`,Ae=n.li`
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
`;const Ve=n.div`
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
`,He=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
  }
`,Ge=n.div``,Ye=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 65px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 80px;
  }
`,Qe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 90px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 112px;
  }
`,Ue=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 100px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 115px;
  }
`,Je=n.div`
  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 62px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-left: 95px;
  }
`,Ke=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 77px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
    margin-left: 95px;
  }
`,Xe=n.div`
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
`,Ze=()=>{const i=g(j.getDiary).date,t=g(j.getDiary).exercises;return e.jsxs(Ce,{children:[e.jsxs(Te,{children:[e.jsx(Ee,{children:"Execrcises"}),e.jsxs(Fe,{to:"/exercises/body",children:[e.jsx($e,{children:"Add exercise"}),e.jsx(z,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${p}#icon-start`})})]})]}),e.jsx(ei,{exercises:t,date:i})]})},ei=({exercises:i,date:t})=>{const r=k();return e.jsx(e.Fragment,{children:i.length?e.jsxs(e.Fragment,{children:[e.jsx(ii,{}),e.jsx(qe,{children:i.map(({burnedCalories:a,exerciseId:{bodyPart:d,equipment:s,name:o,target:w},time:h,_id:c})=>e.jsxs(Ae,{children:[e.jsxs(ze,{children:[e.jsx(u,{value:d,children:"Body Part"}),e.jsx(u,{value:s,children:"Equipment"}),e.jsx(u,{value:o,children:"Name"})]}),e.jsxs(Se,{children:[e.jsxs(Ie,{children:[e.jsx(u,{value:w,children:"Target"}),e.jsx(u,{value:Math.round(a),children:"Burned Calories"}),e.jsx(u,{value:h,children:"Time"})]}),e.jsx(Re,{onClick:()=>{r(D.deleteDiaryExercise({exerciseId:c,date:t}))},children:e.jsx(Oe,{children:e.jsx(z,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${p}#icon-trash-03`})})})})]})]},c))})]}):e.jsx(ni,{})})},u=({width:i,value:t,children:r})=>{let a=t,d=a;t.length>8&&(d=t.slice(0,8)+"...");let s=r,o=s;return r.length>10&&(o=r.slice(0,10)+"..."),e.jsxs(Ne,{name:r,children:[e.jsxs(Be,{children:[e.jsx(Pe,{children:s}),e.jsx(Le,{children:o})]}),e.jsxs(Me,{width:i,name:r,children:[e.jsx(We,{children:a}),e.jsx(_e,{children:d})]})]})},ii=()=>e.jsxs(He,{children:[e.jsx(Ge,{children:"Body Part"}),e.jsx(Ye,{children:"Equipment"}),e.jsx(Qe,{children:"Name"}),e.jsx(Ue,{children:"Target"}),e.jsx(Ke,{children:"Burned Calor..."}),e.jsx(Je,{children:"Burned Calories"}),e.jsx(Xe,{children:"Time"})]}),ni=()=>e.jsx(Ve,{children:"Not found exercises"}),ti=n.div`
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
`,ri=n.div`
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
`,ai=n.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,di=n.p`
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
`,si=n.p`
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
`,b=({value:i,children:t})=>{let r="",a=i;switch(t){case"Daily calorie intake":r=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${p}#icon-fluent_food-24-filled`})});break;case"Daily physical activity":r=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${p}#icon-dumbbell`})}),a=a.toString()+" min";break;case"Calories consumed":r=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${p}#icon-apple`})});break;case"Calories burned":r=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${p}#icon-calories-1`})});break;case"Calories remaining":r=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${p}#icon-bubble`})});break;case"Sports remaining":r=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${p}#icon-running`})}),a=a.toString()+" min";break}return t==="Calories remaining"&&i<0&&(a="- "+Math.abs(i).toString()),t==="Sports remaining"&&i<0&&(a="+ "+Math.abs(i).toString()+" min"),a||(a=0),e.jsxs(ri,{value:i,title:t,children:[e.jsxs(ai,{children:[r,e.jsx(di,{children:t})]}),e.jsxs(si,{children:[" ",a]})]})},oi=()=>{const i=Math.ceil(g(I)),t=g(N),r=g(B),a=g(M),d=Math.round(r.reduce((x,l)=>x+l.calories,0)),s=Math.round(a.reduce((x,l)=>x+l.burnedCalories,0)),o=()=>i-d,w=()=>{const x=Math.floor(t),l=Math.floor(t-x/60);return console.log("restOfSports:",l),l},h=o(),c=w();return e.jsxs(ti,{children:[e.jsx(b,{value:i,children:"Daily calorie intake"}),e.jsx(b,{value:t,children:"Daily physical activity"}),e.jsx(b,{value:d,children:"Calories consumed"}),e.jsx(b,{value:s,children:"Calories burned"}),e.jsx(b,{value:h,highlight:h<0,children:"Calories remaining"}),e.jsx(b,{value:c,highlight:c<0,children:"Sports remaining"})]})},ci=m.div`
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
`,xi=m.h2`
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
`,li=m.div`
  display: flex;
  
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`,pi=m.div`
  @media screen and (min-width: 768px) {
    display: none;
  }  
`,hi=m.div`
  display: none;
  @media screen and (min-width: 768px) {
  display: flex;
  }
`,mi=m.div`
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
`,gi=m.p`
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
`,wi=m.div`
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
`,ui=m.div`
  @media screen and (min-width: 768px) {
    order: 1;    
  }
`,fi=m.div`
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
`,bi=m.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1440px) {
   column-gap: 32px;
  }
`,yi=n.svg`
  &.orange {
    fill: ${({theme:i})=>i.secondaryOrange};
  }
`;function ji(i){let t=i.getDate(),r=i.getMonth()+1;const a=i.getFullYear();return t=t<10?`0${t}`:t,r=r<10?`0${r}`:r,`${a}-${r}-${t}`}const vi=()=>{P.warn("the date must be greater than your birthday",{position:"top-center",theme:"dark"})},Ei=()=>{const i=localStorage.getItem("PowerPulsDate"),t=i?new Date(i):new Date,[r,a]=v.useState(t),d=k(),s=g(j.getDiary),{products:o,exercises:w}=s,h=g(W.getUserMetricData),c=h?new Date(h.birthday):null,x=l=>{l<c?(vi(),a(c)):a(l),localStorage.setItem("PowerPulsDate",l)};return v.useEffect(()=>{d(D.getDiary(ji(r)))},[d,r,o.length,w.length]),e.jsxs(ci,{children:[e.jsx(_,{}),e.jsxs(mi,{children:[e.jsx(xi,{children:"Diary"}),e.jsxs(li,{children:[e.jsx(pi,{children:e.jsx(C,{currentDate:r,handlerDate:x,birthdayDate:c,textSize:18,textWeight:"bold",textHeight:20,sizeArrow:18,iconColor:"var(--orange-1)"})}),e.jsx(hi,{children:e.jsx(C,{currentDate:r,handlerDate:x,textSize:24,textWeight:"bold",textHeight:32,sizeArrow:18,iconColor:"var(--orange-1)"})})]})]}),e.jsxs(bi,{children:[e.jsxs(ui,{children:[e.jsx(oi,{}),e.jsxs(wi,{children:[e.jsx(ki,{size:24}),e.jsx(gi,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]}),e.jsxs(fi,{children:[e.jsx(je,{}),e.jsx(Ze,{})]})]})]})},ki=({size:i})=>e.jsx("div",{style:{width:`${i}px`,height:`${i}px`},children:e.jsxs(yi,{width:i,height:i,className:"orange",children:[e.jsx("use",{href:p+"#icon-Ellipse-1",style:{fill:"rgba(239, 160, 130, 1)",width:"100%",height:"100%",position:"relative"}}),e.jsx("use",{href:p+"#icon-tabler_exclamation-mark",style:{fill:"rgba(239, 237, 232, 1)",position:"absolute",top:"50%",left:"50%",width:"100%",height:"100%"}})]})});export{ki as IconInfo,Ei as default};
