import{n as t,N as d,u as r,H as a,r as p,j as e,s as x,O as l}from"./index-7efa2b53.js";const g=t.ul`
  display: flex;
  gap: 28px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    justify-content: flex-end;
    margin-top: -24px;
  }
`,o=t.li``,n=t(d)`
  position: relative;
  padding-bottom: 5px;
  font-size: 14px;
  cursor: pointer;
  color: rgba(239, 237, 232, 0.4);
  transition: color 250ms linear;

  @media screen and (min-width: 768px) {
    padding-bottom: 7px;
    font-size: 16px;
  }

  &.active {
    color: #efede8;
  }

  &.active::after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #ef8964;
    border-radius: 2px;
  }

  &:hover,
  &:focus {
    color: #efede8;
  }
`,m=({children:s})=>{const i=r(),{categoryType:c}=a();return p.useEffect(()=>{c||i("body")},[]),e.jsxs("div",{children:[e.jsxs(g,{children:[e.jsx(o,{children:e.jsx(n,{to:"body",children:" Body Parts"})}),e.jsx(o,{children:e.jsx(n,{to:"muscles",children:"Muscles"})}),e.jsx(o,{children:e.jsx(n,{to:"equipment",children:"Equipments"})})]}),s]})},h=t.div`
  padding-top: 40px;
  padding-bottom: 80px;
  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 78px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 92px;
  }
`,u=t.h3`
  font-size: 24px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`,f=t.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,j=t.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(239, 237, 232, 0.4);
  transform: scaleX(-1);
`,b=t.div`
  font-size: 16px;
  color: rgba(239, 237, 232, 0.4);
  background-color: transparent;
`;t.div`
  position: absolute;
  top: 116px;
`;const w=()=>{const{group:s}=a(),i=r();return e.jsxs(h,{className:"container",children:[s&&e.jsxs(f,{children:[e.jsx(j,{children:e.jsx("use",{href:`${x}#icon-arrow`})}),e.jsx(b,{onClick:()=>i(-1),children:"Back"})]}),e.jsx(u,{children:s||"Exercises"}),e.jsx(m,{children:e.jsx(l,{})})]})};export{w as default};
