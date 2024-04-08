import sprite from '../../assets/sprite.svg';
import {
  VideoBoxDiv,
  Ellips,
  IconPlay,
  ViewsSum,
  ViewsText,
} from './VideoBox.styled';

const VideoBox = ({ videoCount }) => {
  return (
    <VideoBoxDiv>
      <Ellips>
        <IconPlay>
          <use href={`${sprite}#icon-polygon1`} />
        </IconPlay>
      </Ellips>
      <div>
        <ViewsSum>{!videoCount ? `350 +` : videoCount}</ViewsSum>
        <ViewsText>Video tutorial</ViewsText>
      </div>
    </VideoBoxDiv>
  );
};
export default VideoBox;
