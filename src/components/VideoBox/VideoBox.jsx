import css from './VideoBox.module.css';
import sprite from '../../assets/sprite.svg';

const VideoBox = ({ videoCount }) => {
  return (
    <div className={css.video_box}>
      <div className={css.ellips}>
        <svg className={css.icon_play}>
          <use href={`${sprite}#icon-polygon1`} />
        </svg>
      </div>
      <div>
        <p className={css.views}>{!videoCount ? `350 +` : videoCount}</p>
        <p className={css.views_text}>Video tutorial</p>
      </div>
    </div>
  );
};
export default VideoBox;
