import{n as t,u as o,j as e,s as r}from"./index-6c3abf05.js";import{W as s}from"./WelcomeLayout-f57501ca.js";import"./people-training-gym-desk-2x-eb4104ef.js";const a=t.div`
  display: flex;
  gap: 14px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`,n=t.button`
  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-weight: 500;
  line-height: 1.12;
  color: var(--white, #efede8);
  border: 1px solid var(--border, #efede84d);
  transition:
    border-color 250ms linear,
    background-color 250ms linear;
  background-color: ${i=>i.orange?"var(--orange, #e6533c);":"transparent"};
  &:hover,
  &:focus {
    ${i=>i.orange?"background-color: var(--orange-1, #ef8964)":"border-color: var(--orange, #e6533c)"}
  }

  @media (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`,p=()=>{const i=o();return e.jsxs(a,{children:[e.jsx(n,{orange:!0,type:"button",onClick:()=>i("signup"),children:"Sign Up"}),e.jsx(n,{type:"button",onClick:()=>i("signin"),children:"Sign In"})]})},x=t.div`
  max-width: 335px;
  height: 120px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    max-width: 598px;
    height: 234px;
    margin-bottom: 64px;
  }
`,d=t.h1`
  position: relative;
  color: var(--white, #efede8);
  font-size: 38px;
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: 0.38px;
  z-index: 10;

  @media (min-width: 768px) {
    font-size: 70px;
    line-height: 1.11;
    letter-spacing: 0.7px;
  }
`,c=t.svg`
  position: absolute;
  top: 43px;
  left: -9px;
  width: 98px;
  height: 35px;
  z-index: -1;
  stroke: var(--orange-1, #ef8964);

  @media (min-width: 768px) {
    top: 84px;
    left: -16px;
    width: 185px;
    height: 67px;
  }
`,h=()=>e.jsxs("div",{children:[e.jsx(x,{children:e.jsxs(d,{children:["Transforming your body shape with Power Pulse",e.jsx(c,{children:e.jsx("use",{href:`${r}#icon-Line`})})]})}),e.jsx(p,{})]}),u=()=>e.jsx(s,{children:e.jsx(h,{})});export{u as default};
