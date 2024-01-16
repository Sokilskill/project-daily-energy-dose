import css from './Videobox.module.css';
import sprite from '../../assets/sprite.svg';

const VideoBox = () => {
  return (
    <div className={css.video_box}>
      <div className={css.ellips}>
        <svg className={css.icon_play}>
          <use className={css.icon_play} href={`${sprite}#icon-polygon1`} />
        </svg>
      </div>
      <div>
        <p className={css.views}>350 +</p>
        <p className={css.views_text}>Video tutorial</p>
      </div>
    </div>
  );
};
export default VideoBox;
