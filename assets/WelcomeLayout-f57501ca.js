import{n as t,j as e,s as r,c as a,a as o,r as p,g as s}from"./index-6c3abf05.js";import{b as x,a as g,c as h,d as c,e as m,f as l}from"./people-training-gym-desk-2x-eb4104ef.js";const u=t.div`
  display: flex;
  gap: 8px;
  padding: 14px 18px;
  align-items: center;
  width: 146px;
  height: 66px;
  margin-bottom: 70px;
  border-radius: 12px;
  background-color: var(--grey, #303030);

  @media (min-width: 768px) {
    width: 206px;
    height: 96px;
    gap: 12px;
    padding: 20px 36px 20px 23px;
    margin-bottom: 56px;
    align-items: end;
  }

  @media (min-width: 1440px) {
    margin-bottom: 40px;
  }
`,b=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--orange-1, #ef8964);

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,w=t.svg`
  width: 12px;
  height: 12px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,f=t.p`
  color: var(--white, #efede8);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 8px;
  }
`,v=t.p`
  color: var(--vievs-text, #efede8a6);
  font-size: 12px;
  line-height: 1.33;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,j=({videoCount:i})=>e.jsxs(u,{children:[e.jsx(b,{children:e.jsx(w,{children:e.jsx("use",{href:`${r}#icon-polygon1`})})}),e.jsxs("div",{children:[e.jsx(f,{children:i||"350 +"}),e.jsx(v,{children:"Video tutorial"})]})]}),k=t.div`
  width: fit-content;
  min-width: 119px;
  height: 76px;
  padding: 14px 18px;
  margin-left: auto;
  border-radius: 12px;
  background-color: var(--orange-1, #ef8964);

  @media (min-width: 768px) {
    width: fit-content;
    min-width: 180px;
    height: 110px;
    padding: 14px 38px 14px 28px;
  }
`,z=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--beige, #efa082);
  margin-bottom: 4px;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`,C=t.svg`
  width: 12px;
  height: 12px;
  fill: var(--white, #efede8);

  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,_=t.span`
  color: var(--white, #efede8);
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;
  text-transform: uppercase;
  margin-right: 4px;

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 1.04;
    margin-right: 6px;
  }
`,y=t.span`
  @media (min-width: 768px) {
    font-size: 24px;
  }
`,$=t.span`
  color: var(--vievs-text, #efede8a6);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.33;
  margin-left: 4px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,S=({caloriesSum:i})=>{const n=Math.round(i/1e3);return e.jsxs(k,{children:[e.jsx(z,{children:e.jsx(C,{children:e.jsx("use",{href:`${r}#icon-running-stick-figure-svgrepo-com-1-1`})})}),e.jsx(_,{children:i?i>1e3?n:i:500}),e.jsx(y,{children:i>1e3&&"K "}),e.jsx($,{children:"cal"})]})},B=i=>i.statistics.videoCount,V=i=>i.statistics.burnedCaloriesSum,E=()=>{const i=a(B),n=a(V),d=o();return p.useEffect(()=>{(!i||!n)&&d(s())},[]),e.jsxs(e.Fragment,{children:[e.jsx(j,{videoCount:i}),e.jsx(S,{caloriesSum:n})]})},I=t.div`
  position: relative;
  padding-top: 180px;

  @media (min-width: 768px) {
    padding-top: 48px;
  }

  @media (min-width: 1440px) {
    padding-top: 0;
  }
`,W=t.div`
  position: absolute;
  top: 66px;

  @media (min-width: 768px) {
    top: 105px;
  }

  @media (min-width: 1440px) {
    top: 200px;
  }
`,D=t.div`
  max-width: 298px;
  height: 100%;
  margin-left: auto;
  margin-right: -20px;
  padding: 319px 20px 40px 44px;
  background-image: url(${i=>i.bgi[0]}), var(--bg-gradient);
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${i=>i.bgi[1]}), var(--bg-gradient);
  }

  @media (min-width: 768px) {
    max-width: 437px;
    padding: 583px 32px 48px 0;
    margin-right: -32px;
    background: url(${i=>i.bgi[2]}), var(--bg-gradient);

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${i=>i.bgi[3]}), var(--bg-gradient);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  @media (min-width: 1440px) {
    max-width: 670px;
    margin-top: -84px;
    margin-right: -96px;
    padding: 384px 32px 172px 0;
    background-image: url(${i=>i.bgi[4]}), var(--bg-desk-gradient);

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${i=>i.bgi[5]}), var(--bg-desk-gradient);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`,P=({children:i})=>e.jsx(e.Fragment,{children:e.jsx("section",{children:e.jsxs(I,{className:"container",children:[e.jsx(W,{children:i}),e.jsx(D,{bgi:[x,g,h,c,m,l],children:e.jsx(E,{})})]})})});export{P as W};
