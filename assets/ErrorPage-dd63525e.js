import{n as i,N as n,j as e,I as t}from"./index-4a8699f1.js";const o="/project-daily-energy-dose/assets/people-training-gym-mob-09d55cdf.webp",a=i.div`
  // position: relative;
  padding: 0;
  background-image: url(${o}), var(--bg-gradient);

  background-image: url('/src/assets/Welcome/images/people-training-gym-mob.webp'),
    var(--bg-gradient);
  background-repeat: no-repeat;
  background-position: 107px 240px;

  @media screen and (min-width: 768px) {
    background-image: url('/src/assets/Welcome/images/people-training-gym-tab.webp'),
      var(--bg-gradient);
    background-repeat: no-repeat;
    background-position: 330px 130px;
  }

  @media screen and (min-width: 1440px) {

    background-image: url('/public/assets/side-view-people-training-gym-desk.png');
      var(--bg-gradient);
    background-repeat: no-repeat;
    background-position: right top;
  }
`,d=i.div`
padding-top: 250px ;
padding-bottom: 250px;

   @media screen and (min-width: 768px) {
  padding-top: 309px ;
  padding-bottom: 309px;

  @media screen and (min-width: 1440px) {
  padding-top: 221 ;
  padding-bottom: 221;
`,p=i.header`
  position: relative;
`,r=i.header`
  position: absolute;
  top: 0;
`,s=i.div`
  // position: absolute;
  // top: -100px;
  // left: 0;
  // z-index: -1;

  height: 100%;
  width: 240px;
  background: #e6533c;

  @media screen and (min-width: 768px) {
    width: 420px;
  }

  @media screen and (min-width: 1440px) {
    width: 669px;
  }
`,g=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 200px;

  // padding-top: 250px;
  // padding-top: 350px;

  @media screen and (min-width: 768px) {
    // padding-top: 309px;
    // padding-top: 409px;

    width: 356px;
  }

  @media screen and (min-width: 1440px) {
    // padding-top: 221px;
    // padding-top: 321px;

    width: 477px;
  }
`,c=i.h1`
  font-size: 66px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.66px;
  margin-bottom: 14px;

   @media screen and (min-width: 768px) {
font-size: 160px;
line-height: 93.75%;
letter-spacing: 1.6px;
  margin-bottom: 28px;

   @media screen and (min-width: 768px) {
line-height:  93.75%;
   }
`,x=i.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,h=i(n)`
  color: var(--white, #efede8);
  font-size: 16px;
  font-weight: 500;
  line-height: 112.5%;
  padding: 12px 40px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  &:hover,
  &:focus {
    border: 1px solid #efede8;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 120%;
  }
`,l=()=>e.jsx(e.Fragment,{children:e.jsx(a,{className:"container",children:e.jsx(s,{children:e.jsxs(p,{className:"container",children:[e.jsx(r,{children:e.jsx(t,{colorWhite:"true"})}),e.jsx(d,{children:e.jsxs(g,{children:[e.jsx(c,{children:"404"}),e.jsx(x,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),e.jsx(h,{to:"/",children:"Go Home"})]})})]})})})});export{l as default};
