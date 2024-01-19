import{n as s,N as a,a as r,u as c,r as d,j as e,z as p,A as x,B as l,O as m}from"./index-4be27a84.js";const g=s.ul`
  display: flex;
  gap: 28px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,t=s.li``,n=s(a)`
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
`,h=()=>{const i=r(),o=c();return d.useEffect(()=>{o("/exercises/bodyParts")},[]),e.jsxs(g,{children:[e.jsx(t,{onClick:()=>{i(p())},children:e.jsx(n,{to:"bodyParts",children:"Body parts"})}),e.jsx(t,{onClick:()=>{i(x())},children:e.jsx(n,{to:"muscles",children:"Muscles"})}),e.jsx(t,{onClick:()=>{i(l())},children:e.jsx(n,{to:"equipment",children:"Equipment"})})]})},u=s.div`
  padding-top: 40px;
  padding-bottom: 80px;
  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 78px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 92px;
  }
`,f=s.h3`
  font-size: 24px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`,j=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,E=()=>e.jsxs(u,{className:"container",children:[e.jsxs(j,{children:[e.jsx(f,{children:"Exercises"}),e.jsx(h,{})]}),e.jsx(m,{})]});export{E as default};
