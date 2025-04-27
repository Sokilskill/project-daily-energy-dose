import{n as r,r as j,j as e,s as n,L as w,a as v,l as b}from"./index-5f67e98f.js";import{W as S}from"./WelcomeLayout-ef879a48.js";import{F as y,a as I,c as k,b as p,d as F,E as x}from"./index.esm-86b622c5.js";import"./people-training-gym-desk-2x-eb4104ef.js";import"./hoist-non-react-statics.cjs-31cb9e56.js";const z=r(y)`
  width: 335px;
  height: fit-content;

  @media (min-width: 768px) {
    width: 364px;
  }
`,$=r.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`,h=r(I)`
  width: 100%;
  padding: 14px;
  margin-bottom: 4px;
  color: var(--secondary-text-color-1, #efede899);
  font-size: 14px;
  line-height: 1.28;
  background-color: transparent;
  border-radius: 12px;
  outline: none;
  border: ${i=>i.red?"1px solid var(--error-color, #d80027);":i.green?"1px solid var(--success-color, #3cbf61);":"1px solid var(--border, #efede84d);"};
  transition: border 250ms linear;
  &:hover,
  &:focus {
    border: 1px solid var(--orange, #e6533c);
  }

  @media (min-width: 768px) {
    padding: 16px;
    font-size: 16px;
    line-height: 1.5;
  }
`,E=r.div`
  display: flex;
  align-items: center;
`,P=r.svg`
  width: 20px;
  height: 20px;
  margin-left: -34px;
`,m=r.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: var(--error-color, #d80027);
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.12px;
`,g=r.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: var(--success-color, #3cbf61);
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.12px;
`,u=r.svg`
  fill: var(--error-color, #d80027);
  width: 16px;
  height: 16px;
`,f=r.svg`
  fill: var(--success-color, #3cbf61);
  width: 16px;
  height: 16px;
`,D=r.button`
  display: flex;
  width: 136px;
  margin-top: 28px;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-weight: 500;
  line-height: 1.12;
  color: var(--white, #efede8);
  background-color: var(--orange, #e6533c);
  transition: background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: var(--orange-1, #ef8964);
  }

  @media (min-width: 768px) {
    min-width: 190px;
    margin-top: 64px;
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`,T={email:"",password:""},q=k().shape({email:p().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Is not in correct format").required("Email is required"),password:p().required("Password is required").min(6,"Password is too short - should be 6 chars minimum")}),L=({onSubmit:i})=>{const[t,a]=j.useState(!1);function c(o,s){if(o.errors[s]&&o.touched[s])return{red:"true"};if(!o.errors[s]&&o.values[s])return{green:"true"}}return e.jsx(F,{initialValues:T,validationSchema:q,onSubmit:(o,{resetForm:s})=>{i(o),s()},children:o=>{const{errors:s,touched:l,values:d}=o;return e.jsx(e.Fragment,{children:e.jsxs(z,{children:[e.jsxs($,{children:[e.jsxs("div",{className:"form-row",children:[e.jsx("label",{htmlFor:"email"}),e.jsx(h,{...c(o,"email"),type:"email",name:"email",id:"email",autoComplete:"off",placeholder:"Email"}),s.email&&l.email?e.jsxs(m,{children:[e.jsx(u,{children:e.jsx("use",{href:`${n}#checkbox-circle`})}),e.jsx(x,{name:"email"})]}):null,!s.email&&d.email?e.jsxs(g,{children:[e.jsx(f,{children:e.jsx("use",{href:`${n}#checkbox-circle`})}),e.jsx("p",{children:"Success email"})]}):null]}),e.jsxs("div",{className:"form-row",children:[e.jsx("label",{htmlFor:"password"}),e.jsxs(E,{children:[e.jsx(h,{...c(o,"password"),type:t?"text":"password",name:"password",id:"password",autoComplete:"off",placeholder:"Password"}),e.jsx(P,{onClick:()=>a(!t),children:t?e.jsx("use",{href:`${n}#eye`}):e.jsx("use",{href:`${n}#eye-off`})})]}),s.password&&l.password?e.jsxs(m,{children:[e.jsx(u,{children:e.jsx("use",{href:`${n}#checkbox-circle`})}),e.jsx(x,{name:"password"})]}):null,!s.password&&d.password?e.jsxs(g,{children:[e.jsx(f,{children:e.jsx("use",{href:`${n}#checkbox-circle`})}),e.jsx("p",{children:"Success password"})]}):null]})]}),e.jsx(D,{type:"submit",children:"Sign In"})]})})}})},B=r.div`
  padding-bottom: 74px;
  background: linear-gradient(
    330deg,
    rgba(4, 4, 4, 0) 8%,
    rgba(0, 0, 0, 0.8) 40%
  );
`,C=r.div`
  max-width: 335px;
  margin-bottom: 28px;
`,R=r.h2`
  color: var(--white, #efede8);
  font-size: 24px;
  font-weight: 700;
  line-height: 1.17;
  margin-bottom: 14px;
`,W=r.p`
  color: var(--border, #efede84d);
  font-size: 14px;
  line-height: 1.28;
`,A=r.p`
  margin-top: 12px;
  color: var(--secondary-text-color-1, #efede899);
  font-size: 12px;
  line-height: 1.5;
`,N=r(w)`
  color: var(--white, #efede8);
  text-decoration-line: underline;
`,_=()=>{const i=v(),t=a=>{i(b(a))};return e.jsx(S,{children:e.jsxs(B,{children:[e.jsxs(C,{children:[e.jsx(R,{children:"Sign In"}),e.jsx(W,{children:"Welcome! Please enter your credentials to login to the platform:"})]}),e.jsx(L,{onSubmit:t}),e.jsxs(A,{children:["Don’t have an account?",e.jsx("span",{children:e.jsx(N,{to:"/signup",children:" Sign Up"})})]})]})})};export{_ as default};
