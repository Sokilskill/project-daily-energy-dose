import{n as i,N as b,u as g,I as m,r as h,j as e,s as u,O as c}from"./index-e7cca045.js";const j=i.ul`
  display: flex;
  gap: 28px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    justify-content: flex-end;
    margin-top: -60px;
  }
`,o=i.li``,r=i(b)`
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
`,d=({children:t})=>{const s=g(),{categoryType:n}=m();return h.useEffect(()=>{n||s("body")},[]),e.jsxs("div",{children:[e.jsxs(j,{children:[e.jsx(o,{children:e.jsx(r,{to:"body",children:" Body Parts"})}),e.jsx(o,{children:e.jsx(r,{to:"muscles",children:"Muscles"})}),e.jsx(o,{children:e.jsx(r,{to:"equipment",children:"Equipments"})})]}),t]})},f=i.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    background-image: linear-gradient(
        107deg,
        rgba(4, 4, 4, 1) 50%,
        rgba(4, 4, 4, 0) 100%
      ),
      url(${t=>t.bgi[0]});

    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          107deg,
          rgba(4, 4, 4, 1) 50%,
          rgba(4, 4, 4, 0) 100%
        ),
        url(${t=>t.bgi[1]});

      background-size: contain;
    }
  }
`,p=i.div`
  padding-top: 40px;
  padding-top: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 66px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 80px;
  }
`,v=i.div`
  position: relative;
`,x=i.h3`
  position: relative;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 42px;
  }
`,k=i.div`
  position: absolute;
  bottom: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,y=i.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(239, 237, 232, 0.4);
  transform: scaleX(-1);
`,w=i.div`
  font-size: 16px;
  color: rgba(239, 237, 232, 0.4);
  background-color: transparent;
`;i.div`
  position: absolute;
  top: 116px;
`;const l="/project-daily-energy-dose/assets/side-view-people-training-gym-a43dbb35.jpg",C=()=>{const{categoryType:t,group:s}=m(),n=g();h.useEffect(()=>{t||n("/exercises/body")},[t,n]);const a=(s==null?void 0:s.charAt(0).toUpperCase())+(s==null?void 0:s.slice(1));return e.jsx(e.Fragment,{children:s?e.jsx(f,{bgi:[l,l],children:e.jsxs(p,{className:"container",children:[e.jsxs(v,{children:[s&&e.jsxs(k,{children:[e.jsx(y,{children:e.jsx("use",{href:`${u}#icon-arrow`})}),e.jsx(w,{onClick:()=>n(-1),children:"Back"})]}),e.jsx(x,{children:a||"Exercises"})]}),e.jsx(d,{children:e.jsx(c,{})})]})}):e.jsxs(p,{className:"container",children:[e.jsx(x,{children:a||"Exercises"}),e.jsx(d,{children:e.jsx(c,{})})]})})};export{C as default};
