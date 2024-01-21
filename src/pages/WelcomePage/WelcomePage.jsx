import css from "./WelcomePage.module.css"
import style from "../../index.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import sprite from '../../assets/sprite.svg'
// import AddProductSuccess from '../../components/AddProductSuccess/AddProductSuccess.jsx'; 
// import AddProductForm from '../../components/AddProductForm/AddProductForm';
// import AddExerciseSuccess from '../../components/AddExerciseSuccess/AddExerciseSuccess';
import AddExerciseForm from "../../components/AddExerciseForm/AddExerciseForm";
const WelcomePage = () => {
  const navigate = useNavigate()
  
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onCloseModal = () => { setIsOpenModal(false) };

  return (
    <>
      <div className={css.welcome_section}>
        <div className={style.container}>
        
              <div className={css.welcome_part}>
                <div className={css.text_box}>
              <h1 className={css.title}>Transforming your body shape with Power Pulse<svg className={css.icon_line}>
                <use className={css.icon_line} href={`${sprite}#icon-Line`} />
              </svg>
                </h1>
                  </div>
            
                <div className={css.btns} >
                  <button type="button" className={`${css.sing_btn} ${css.up} `} onClick={() => navigate('signup')}>Sign Up</button>
                  <button type="button" className={`${css.sing_btn} ${css.in}`} onClick={()=> navigate('ignin')}>Sign In</button>  
                </div> 
              </div>
              <div className={css.welcome_bgd}>
            <div className={css.video_box}>
              <div className={css.ellips}>
                <svg className={css.icon_play}>
                  <use className={css.icon_play} href={`${sprite}#icon-polygon1`} />
                </svg>
              </div>
                      <div>
                      <p className={css.views}>350 +</p>
                      <p className={css.views_text}>Video tutorial</p></div>    
                      </div>      
            <div className={css.cal_box}>
              <div className={css.cal_ellips}>
              <svg className={css.icon_run}>
                  <use className={css.icon_run} href={`${sprite}#icon-running-stick-figure-svgrepo-com-1-1`} />
                </svg>
              </div>
              <span className={css.cal}>500</span>
              <span className={css.cal_text}>cal</span></div>  
              </div>
          </div>
      </div>
      {/* <button type="button" className={css.btn_modal} onClick={() => setIsOpenModal(true)}>Modal</button>
        <AddProductSuccess
        open={isOpenModal}
        onClose={onCloseModal}
     
      />  */}
      {/* <AddProductSuccess
        open={isOpenModal}
        onClose={onCloseModal}
        title="Modal title"
        text={<p>Modal text</p>}
        icon={foodIcon}
        linkTo="#"
        linkText="To the diary"
      /> */}
      {/* <button type="button" className={css.btn_modal} onClick={() => setIsOpenModal(true)}>Modal-2</button>
      <AddProductForm
        open={isOpenModal}
        onClose={onCloseModal}
      /> */}

{/* <button type="button" className={css.btn_modal} onClick={() => setIsOpenModal(true)}>Modal-3</button>
      <AddExerciseSuccess
        open={isOpenModal}
        onClose={onCloseModal}
      /> */}
      <button type="button" className={css.btn_modal} onClick={() => setIsOpenModal(true)}>Modal-4</button>
      <AddExerciseForm
        open={isOpenModal}
        onClose={onCloseModal}
        time={180}
        exerciseId={1}
        calories={500}
      />


   
    </>
  );
};

export default WelcomePage;
