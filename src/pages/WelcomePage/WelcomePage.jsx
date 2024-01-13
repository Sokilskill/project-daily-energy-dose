import css from "./WelcomePage.module.css"
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../assets/Welcome/Icons/Icon';

const WelcomePage = () => {
   const navigate = useNavigate()
   
  return (
    <div className={css.welcome_body}>
      <div className={css.container}>
        <div className={css.logo}>
          <Icon id="vector" className={css.icon_vector} />
          <Icon id="power-pulse" className={css.icon_power}/>
        </div>
            <div className={css.welcome_part}>
               <div className={css.text_box}>
                 <h1 className={css.title}>Transforming your body shape with Power Pulse<Icon id="line" className={css.icon_line}/></h1>
                </div>
           
               <div className={css.btns} >
                 <button type="button" className={`${css.sing_btn} ${css.up} `} onClick={() => navigate('register')}>Sign Up</button>
                 <button type="button" className={`${css.sing_btn} ${css.in}`} onClick={()=> navigate('login')}>Sign In</button>  
               </div> 
            </div>
            <div className={css.welcome_bgd}>
          <div className={css.video_box}>
            <div className={css.ellips}><Icon id="play" className={css.icon_play}/></div>
                    <div>
                    <p className={css.views}>+ 350</p>
                    <p className={css.views_text}>Video tutorial</p></div>    
                    </div>      
          <div className={css.cal_box}>
            <div className={css.cal_ellips}><Icon id="running-figure" className={css.icon_run}/></div>
             <span className={css.cal}>500</span>
            <span className={css.cal_text}>cal</span></div>  
            </div>
        </div>
    </div>
  );
};

export default WelcomePage;
