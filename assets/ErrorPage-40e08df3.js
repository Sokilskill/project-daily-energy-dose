import{n,N as o,a,r as d,K as t,j as i,P as p}from"./index-e14e4ef8.js";const r=n.div`
  // position: relative;
  padding: 0;


  background-image: url(${e=>e.bgi[0]}),
    var(--bg-gradient);
  background-repeat: no-repeat;
  background-position: 107px 240px;

  @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
    max-width: 447px,
    background-image: url(${e=>e.bgi[1]}),
      var(--bg-gradient);
       background-repeat: no-repeat;
  background-position: 107px 240px;
}

  @media screen and (min-width: 768px) {
    background-image: url(${e=>e.bgi[2]}),
      var(--bg-gradient);
    background-repeat: no-repeat;
    background-position: 330px 130px;
  
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
      max-width: 670px,
      background-image: url(${e=>e.bgi[3]}),
        var(--bg-gradient);
      background-repeat: no-repeat;
     background-position: 330px 130px;
    }
  }  

  @media screen and (min-width: 1440px) {
     height: 800px;
    background-image: url(${e=>e.bgi[4]});
      var(--bg-gradient);
    background-repeat: no-repeat;
    background-position: right top;
 
   @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
      max-width: 670px,
      background-image: url(${e=>e.bgi[5]}),
        var(--bg-desk-gradient);
      background-repeat: no-repeat;
      background-position: right top;
    }
  }
`,s=n.div`
padding-top: 250px ;
padding-bottom: 250px;

   @media screen and (min-width: 768px) {
  padding-top: 309px ;
  padding-bottom: 309px;
   }
   
  @media screen and (min-width: 1440px) {
  padding-top: 221px;
  padding-bottom: 221px;
`,g=n.header`
  position: relative;
`,c=n.header`
  position: absolute;
  top: 0;
`,x=n.div`
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
`,m=n.div`
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
`,l=n.h1`
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
`,h=n.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,b=n(o)`
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
`,u="/project-daily-energy-dose/assets/people-training-gym-mob-09d55cdf.webp",w="/project-daily-energy-dose/assets/people-training-gym-mob-2x-dc1a54ad.webp",f="/project-daily-energy-dose/assets/people-training-gym-tab-953f4b24.webp",k="/project-daily-energy-dose/assets/people-training-gym-tab-2x-0729540b.webp",y="/project-daily-energy-dose/assets/people-training-gym-desk-865deed9.webp",v="/project-daily-energy-dose/assets/people-training-gym-desk-2x-81eedaf3.webp",_=()=>{const e=a();return d.useEffect(()=>(e(t(!0)),()=>{e(t(!1))}),[e]),i.jsx(i.Fragment,{children:i.jsx(r,{bgi:[u,w,f,k,y,v],className:"container section-wrapper",children:i.jsx(x,{children:i.jsxs(g,{className:"container",children:[i.jsx(c,{children:i.jsx(p,{colorWhite:"true"})}),i.jsx(s,{children:i.jsxs(m,{children:[i.jsx(l,{children:"404"}),i.jsx(h,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),i.jsx(b,{to:"/",children:"Go Home"})]})})]})})})})};export{_ as default};
