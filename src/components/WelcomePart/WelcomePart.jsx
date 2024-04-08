import sprite from '../../assets/sprite.svg';
import { SignBtns } from '../SignBtns/SignBtns';
import { TextBox, Title, IconLine } from './WelcomePart.styled';

export const WelcomePart = () => {
  return (
    <div>
      <TextBox>
        <Title>
          Transforming your body shape with Power Pulse
          <IconLine>
            <use href={`${sprite}#icon-Line`} />
          </IconLine>
        </Title>
      </TextBox>
      <SignBtns />
    </div>
  );
};
