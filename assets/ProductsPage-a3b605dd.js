import{n as t,L as o,j as f}from"./index-59c17565.js";const e=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,a=t.div`
  text-align: center;
`,x=t.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,n=t(o)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s;
  display: block;
  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`,c=()=>f.jsx(e,{children:f.jsxs(a,{children:[f.jsx(x,{children:"Second Page"}),f.jsx(n,{to:"/second/5",children:"Half"})]})});export{c as default};
