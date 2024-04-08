import{n as r,r as j,j as e,s as o,L as w,a as b,b as v}from"./index-6c3abf05.js";import{W as y}from"./WelcomeLayout-f57501ca.js";import{F as S,a as k,c as F,b as x,d as z,E as p}from"./index.esm-59687299.js";import"./people-training-gym-desk-2x-eb4104ef.js";import"./hoist-non-react-statics.cjs-835f650e.js";const $=r(S)`
  width: 335px;
  height: fit-content;

  @media (min-width: 768px) {
    width: 364px;
  }
`,E=r.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`,h=r(k)`
  width: 100%;
  padding: 14px;
  margin-bottom: 4px;
  color: var(--secondary-text-color-1, #efede899);
  font-size: 14px;
  line-height: 1.28;
  background-color: transparent;
  border-radius: 12px;
  outline: none;
  border: ${n=>n.red?"1px solid var(--error-color, #d80027);":n.green?"1px solid var(--success-color, #3cbf61);":"1px solid var(--border, #efede84d);"};
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
`,I=r.div`
  display: flex;
  align-items: center;
`,T=r.svg`
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
`,u=r.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: var(--success-color, #3cbf61);
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.12px;
`,g=r.svg`
  fill: var(--error-color, #d80027);
  width: 16px;
  height: 16px;
`,f=r.svg`
  fill: var(--success-color, #3cbf61);
  width: 16px;
  height: 16px;
`,P=r.button`
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
`,q={name:"",email:"",password:""},U=F().shape({name:x().min(2,"Too Short!").matches(/^[A-Za-z]+$/,"Only English letters").required("Required"),email:x().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Is not in correct format").required("Email is required"),password:x().required("Password is required").min(6,"Password is too short - should be 6 chars minimum")}),D=({onSubmit:n})=>{const[t,a]=j.useState(!1);function c(s,i){if(s.errors[i]&&s.touched[i])return{red:"true"};if(!s.errors[i]&&s.values[i])return{green:"true"}}return e.jsx(z,{initialValues:q,validationSchema:U,onSubmit:(s,{resetForm:i})=>{n(s),i()},children:s=>{const{errors:i,touched:l,values:d}=s;return e.jsx(e.Fragment,{children:e.jsxs($,{children:[e.jsxs(E,{children:[e.jsxs("div",{className:"form-row",children:[e.jsx("label",{htmlFor:"name"}),e.jsx(h,{...c(s,"name"),type:"name",name:"name",id:"name",autoComplete:"off",placeholder:"Name"}),i.name&&l.name?e.jsxs(m,{children:[e.jsx(g,{children:e.jsx("use",{href:`${o}#checkbox-circle`})}),e.jsx(p,{name:"name"})]}):null,!i.name&&d.name?e.jsxs(u,{children:[e.jsx(f,{children:e.jsx("use",{href:`${o}#checkbox-circle`})}),e.jsx("p",{children:"Success name"})]}):null]}),e.jsxs("div",{className:"form-row",children:[e.jsx("label",{htmlFor:"email"}),e.jsx(h,{...c(s,"email"),type:"email",name:"email",id:"email",autoComplete:"off",placeholder:"Email"}),i.email&&l.email?e.jsxs(m,{children:[e.jsx(g,{children:e.jsx("use",{href:`${o}#checkbox-circle`})}),e.jsx(p,{name:"email"})]}):null,!i.email&&d.email?e.jsxs(u,{children:[e.jsx(f,{children:e.jsx("use",{href:`${o}#checkbox-circle`})}),e.jsx("p",{children:"Success email"})]}):null]}),e.jsxs("div",{className:"form-row",children:[e.jsx("label",{htmlFor:"password"}),e.jsxs(I,{children:[e.jsx(h,{...c(s,"password"),type:t?"text":"password",name:"password",id:"password",autoComplete:"off",placeholder:"Password"}),e.jsx(T,{onClick:()=>a(!t),children:t?e.jsx("use",{href:`${o}#eye`}):e.jsx("use",{href:`${o}#eye-off`})})]}),i.password&&l.password?e.jsxs(m,{children:[e.jsx(g,{children:e.jsx("use",{href:`${o}#checkbox-circle`})}),e.jsx(p,{name:"password"})]}):null,!i.password&&d.password?e.jsxs(u,{children:[e.jsx(f,{children:e.jsx("use",{href:`${o}#checkbox-circle`})}),e.jsx("p",{children:"Success password"})]}):null]})]}),e.jsx(P,{type:"submit",children:"Sign Up"})]})})}})},A=r.div`
  background: linear-gradient(
    330deg,
    rgba(4, 4, 4, 0) 8%,
    rgba(0, 0, 0, 0.8) 40%
  );

  @media (min-width: 768px) {
    background: none;
  }
`,C=r.div`
  max-width: 335px;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    min-width: 496px;
    margin-bottom: 32px;
  }
`,L=r.h2`
  color: var(--white, #efede8);
  font-size: 24px;
  font-weight: 700;
  line-height: 1.17;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
    margin-bottom: 16px;
  }
`,N=r.p`
  color: var(--border, #efede84d);
  font-size: 14px;
  line-height: 1.28;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,R=r.p`
  margin-top: 12px;
  color: var(--secondary-text-color-1, #efede899);
  font-size: 12px;
  line-height: 1.5;
`,B=r(w)`
  color: var(--white, #efede8);
  text-decoration-line: underline;
`,_=()=>{const n=b(),t=a=>{n(v(a))};return e.jsx(y,{children:e.jsxs(A,{children:[e.jsxs(C,{children:[e.jsx(L,{children:"Sign Up"}),e.jsx(N,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."})]}),e.jsx(D,{onSubmit:t}),e.jsxs(R,{children:["Already have an account?",e.jsx("span",{children:e.jsx(B,{to:"/signin",children:"  Sign In"})})]})]})})};export{_ as default};
