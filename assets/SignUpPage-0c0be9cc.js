import{r as p,j as e,s as t,a as h,L as g,b as x}from"./index-e14e4ef8.js";import{W as f}from"./WelcomeLayout-35fea943.js";import{c as j,a,F as v,b,d as m,E as d}from"./index.esm-13e9ce45.js";import"./hoist-non-react-statics.cjs-c999793e.js";const w="_container_18hte_1",N="_signup_part_18hte_3",$="_text_box_18hte_10",k="_signup_title_18hte_14",y="_signup_text_18hte_21",S="_signin_option_18hte_26",F="_signin_link_18hte_32",_={"custom-select-container":"_custom-select-container_18hte_1","custom-select-second-container":"_custom-select-second-container_18hte_1","custom-select__control":"_custom-select__control_18hte_1","custom-select-second__control":"_custom-select-second__control_18hte_1","custom-select__control--menu-is-open":"_custom-select__control--menu-is-open_18hte_1","custom-select-second__control--menu-is-open":"_custom-select-second__control--menu-is-open_18hte_1","custom-select__input-container":"_custom-select__input-container_18hte_1","custom-select-second__input-container":"_custom-select-second__input-container_18hte_1","custom-select__value-container":"_custom-select__value-container_18hte_1","custom-select-second__value-container":"_custom-select-second__value-container_18hte_1","custom-select__indicator-separator":"_custom-select__indicator-separator_18hte_1","custom-select-second__indicator-separator":"_custom-select-second__indicator-separator_18hte_1","custom-select__indicators":"_custom-select__indicators_18hte_1","custom-select-second__indicators":"_custom-select-second__indicators_18hte_1","custom-select__indicator":"_custom-select__indicator_18hte_1","custom-select-second__indicator":"_custom-select-second__indicator_18hte_1","custom-select__single-value":"_custom-select__single-value_18hte_1","custom-select-second__single-value":"_custom-select-second__single-value_18hte_1","custom-select__menu":"_custom-select__menu_18hte_1","custom-select-second__menu":"_custom-select-second__menu_18hte_1","custom-select__option":"_custom-select__option_18hte_1","custom-select-second__option":"_custom-select-second__option_18hte_1","custom-select__option--is-focused":"_custom-select__option--is-focused_18hte_1","custom-select-second__option--is-focused":"_custom-select-second__option--is-focused_18hte_1","custom-select__option--is-selected":"_custom-select__option--is-selected_18hte_1","custom-select-second__option--is-selected":"_custom-select-second__option--is-selected_18hte_1","custom-select__menu-list":"_custom-select__menu-list_18hte_1","custom-select-second__menu-list":"_custom-select-second__menu-list_18hte_1",container:w,signup_part:N,text_box:$,signup_title:k,signup_text:y,signin_option:S,signin_link:F},E="_container_otgo5_1",q="_form_otgo5_3",U="_inputs_otgo5_7",A="_form_input_otgo5_12",C="_error_input_otgo5_28",P="_success_input_otgo5_31",T="_input_pass_field_otgo5_34",z="_icon_eye_otgo5_38",L="_form_btn_otgo5_43",Z="_icon_checkbox_error_otgo5_60",D="_icon_checkbox_succsess_otgo5_65",I="_error_row_otgo5_70",R="_success_row_otgo5_79",s={"custom-select-container":"_custom-select-container_otgo5_1","custom-select-second-container":"_custom-select-second-container_otgo5_1","custom-select__control":"_custom-select__control_otgo5_1","custom-select-second__control":"_custom-select-second__control_otgo5_1","custom-select__control--menu-is-open":"_custom-select__control--menu-is-open_otgo5_1","custom-select-second__control--menu-is-open":"_custom-select-second__control--menu-is-open_otgo5_1","custom-select__input-container":"_custom-select__input-container_otgo5_1","custom-select-second__input-container":"_custom-select-second__input-container_otgo5_1","custom-select__value-container":"_custom-select__value-container_otgo5_1","custom-select-second__value-container":"_custom-select-second__value-container_otgo5_1","custom-select__indicator-separator":"_custom-select__indicator-separator_otgo5_1","custom-select-second__indicator-separator":"_custom-select-second__indicator-separator_otgo5_1","custom-select__indicators":"_custom-select__indicators_otgo5_1","custom-select-second__indicators":"_custom-select-second__indicators_otgo5_1","custom-select__indicator":"_custom-select__indicator_otgo5_1","custom-select-second__indicator":"_custom-select-second__indicator_otgo5_1","custom-select__single-value":"_custom-select__single-value_otgo5_1","custom-select-second__single-value":"_custom-select-second__single-value_otgo5_1","custom-select__menu":"_custom-select__menu_otgo5_1","custom-select-second__menu":"_custom-select-second__menu_otgo5_1","custom-select__option":"_custom-select__option_otgo5_1","custom-select-second__option":"_custom-select-second__option_otgo5_1","custom-select__option--is-focused":"_custom-select__option--is-focused_otgo5_1","custom-select-second__option--is-focused":"_custom-select-second__option--is-focused_otgo5_1","custom-select__option--is-selected":"_custom-select__option--is-selected_otgo5_1","custom-select-second__option--is-selected":"_custom-select-second__option--is-selected_otgo5_1","custom-select__menu-list":"_custom-select__menu-list_otgo5_1","custom-select-second__menu-list":"_custom-select-second__menu-list_otgo5_1",container:E,form:q,inputs:U,form_input:A,error_input:C,success_input:P,input_pass_field:T,icon_eye:z,form_btn:L,icon_checkbox_error:Z,icon_checkbox_succsess:D,error_row:I,success_row:R},V={name:"",email:"",password:""},W=j().shape({name:a().min(2,"Too Short!").matches(/^[A-Za-z]+$/,"Only English letters").required("Required"),email:a().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Is not in correct format").required("Email is required"),password:a().required("Password is required").min(6,"Password is too short - should be 6 chars minimum")}),M=({onSubmit:i})=>{const[n,l]=p.useState(!1);return e.jsx(v,{initialValues:V,validationSchema:W,onSubmit:(r,{resetForm:o})=>{i(r),o()},children:r=>{const{errors:o,touched:c,values:u}=r;return e.jsx(e.Fragment,{children:e.jsxs(b,{className:s.form,children:[e.jsxs("div",{className:s.inputs,children:[e.jsxs("div",{className:"form-row",children:[e.jsx("label",{htmlFor:"name"}),e.jsx(m,{type:"name",name:"name",id:"name",autoComplete:"off",placeholder:"Name",className:o.name?`${s.form_input} ${s.error_input}`:c.name?`${s.form_input} ${s.success_input}`:`${s.form_input}`}),o.name&&c.name?e.jsxs("div",{className:s.error_row,children:[e.jsx("svg",{className:s.icon_checkbox_error,children:e.jsx("use",{href:`${t}#checkbox-circle`})}),e.jsx(d,{name:"name"})]}):null,!o.name&&u.name?e.jsxs("div",{className:s.success_row,children:[e.jsx("svg",{className:s.icon_checkbox_succsess,children:e.jsx("use",{href:`${t}#checkbox-circle`})}),e.jsx("p",{children:"Success name"})]}):null]}),e.jsxs("div",{className:"form-row",children:[e.jsx("label",{htmlFor:"email"}),e.jsx(m,{type:"email",name:"email",id:"email",autoComplete:"off",placeholder:"Email",className:o.email?`${s.form_input} ${s.error_input}`:c.email?`${s.form_input} ${s.success_input}`:`${s.form_input}`}),o.email&&c.email?e.jsxs("div",{className:s.error_row,children:[e.jsx("svg",{className:s.icon_checkbox_error,children:e.jsx("use",{href:`${t}#checkbox-circle`})}),e.jsx(d,{name:"email"})]}):null,!o.email&&u.email?e.jsxs("div",{className:s.success_row,children:[e.jsx("svg",{className:s.icon_checkbox_succsess,children:e.jsx("use",{href:`${t}#checkbox-circle`})}),e.jsx("p",{children:"Success email"})]}):null]}),e.jsxs("div",{className:"form-row",children:[e.jsx("label",{htmlFor:"password"}),e.jsxs("div",{className:s.input_pass_field,children:[e.jsx(m,{type:n?"text":"password",name:"password",id:"password",autoComplete:"off",placeholder:"Password",className:o.password?`${s.form_input} ${s.error_input}`:c.password?`${s.form_input} ${s.success_input}`:`${s.form_input}`}),e.jsx("svg",{className:s.icon_eye,onClick:()=>l(!n),children:n?e.jsx("use",{href:`${t}#eye`}):e.jsx("use",{href:`${t}#eye-off`})})]}),o.password&&c.password?e.jsxs("div",{className:s.error_row,children:[e.jsx("svg",{className:s.icon_checkbox_error,children:e.jsx("use",{href:`${t}#checkbox-circle`})}),e.jsx(d,{name:"password"})]}):null,!o.password&&u.password?e.jsxs("div",{className:s.success_row,children:[e.jsx("svg",{className:s.icon_checkbox_succsess,children:e.jsx("use",{href:`${t}#checkbox-circle`})}),e.jsx("p",{children:"Success password"})]}):null]})]}),e.jsx("button",{type:"submit",className:s.form_btn,children:"Sign Up"})]})})}})},J=()=>{const i=h(),n=l=>{i(x(l))};return e.jsx(f,{children:e.jsxs("div",{className:_.signup_part,children:[e.jsxs("div",{className:_.text_box,children:[e.jsx("h2",{className:_.signup_title,children:"Sign Up"}),e.jsx("p",{className:_.signup_text,children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."})]}),e.jsx(M,{onSubmit:n}),e.jsxs("p",{className:_.signin_option,children:["Already have an account?",e.jsx("span",{children:e.jsx(g,{className:_.signin_link,to:"/signin",children:"Sign In"})})]})]})})};export{J as default};
