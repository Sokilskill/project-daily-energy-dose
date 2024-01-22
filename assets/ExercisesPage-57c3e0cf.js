import{t as a,N as x,a as p,j as e,D as g,F as d,n as i,H as m,u as f,I as u,r,J as h,M as y,O as b}from"./index-54a52f0d.js";import{T as c}from"./TitlePage-5eb6c68d.js";const j=a.div`
  display: flex;
  gap: 32px;
`,v=a.li`
  list-style: none;
`,k=a(x)`
  color: rgba(239, 237, 232, 0.4);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  position: relative;
  &.active {
    color: #efede8;
  }
  &.active::after {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    height: 4px;
    left: 0;
    bottom: -8px;

    background-color: #ef8964;
    border-radius: 2px;
  }
`;a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;a.div`
  margin-top: 64px;
  /* border: 1px solid #fff; */
`;a.div`
  position: absolute;
  top: 116px;
`;const w=()=>{const t=[{title:"Body parts",category:"bodyPart"},{title:"Equipment",category:"equipment"},{title:"Muscles",category:"target"}],s=p();return e.jsx(j,{children:t.map(({title:o,category:n},l)=>e.jsx(v,{children:e.jsx(k,{to:n,onClick:()=>{s(g(o)),s(d.getCategories({category:o}))},children:o})},l))})},C=i.div`
  padding-top: 40px;
  padding-bottom: 80px;
  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 78px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 92px;
  }
`;i.h3`
  font-size: 24px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;const B=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,E=i.div`
  position: absolute;
  top: 116px;
`,N=()=>{const t=m(),{from:s}=t.state,o=f(),n=()=>{o(s.pathname)};return e.jsx(e.Fragment,{children:e.jsx("button",{onClick:()=>n(),children:"Back"})})},L=()=>{const{subCategory:t}=u(),s=p();return r.useEffect(()=>{s(d.getCategories({category:"Body parts"}))},[s]),e.jsxs(C,{className:"container",children:[t&&e.jsx(E,{children:e.jsx(N,{})}),e.jsxs(B,{children:[t?e.jsx(c,{text:h(t)}):e.jsx(c,{text:"Exercises"}),e.jsx(w,{})]}),e.jsx(r.Suspense,{fallback:e.jsx(y,{}),children:e.jsx(b,{})})]})};export{L as default};
