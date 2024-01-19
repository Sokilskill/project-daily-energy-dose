import styled from '@emotion/styled';




export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 439px;
    margin: 0 auto;

    
  }

  @media (min-width: 1440px) {
    width: 439px;
  
    
  }
`;

export const WrapperAvatar = styled.div`
  position: relative;
  display: inline-block;
  width: 90px;
  height: 90px;
  background-color: var(----background-color-avatar, rgba(48, 48, 48, 0.3));
  border-radius: 100%;
  margin-top: 40px;
  border: 1px solid var(--orange, #e6533c);

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

export const AvatarInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
`;

export const Label = styled.label`
  cursor: pointer;
  position: absolute;
  top: 47%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const AvatarPickerSvg = styled.svg`
  width: 24px;
  height: 24px;

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const NewAvatar = styled.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const DefaultAvatarSvg = styled.svg`
  width: 62px;
  height: 62px;
  position: absolute;
  top: 10%;
  left: 15%;
  fill: var(--default-avatar-fill, rgba(239, 237, 232, 0.1));

  @media (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`;

export const NameUserWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: center;
  gap: 8px;

  @media (min-width: 768px) {
    margin-top: 18px;
  }
  @media (min-width: 1440px) {
    margin-top: 32px;
  }
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.1;
  color: var(--white: #efede8);

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.2;
  }
 
`;

export const UserNameDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  color: var(--secondary-color-text, rgba(239, 237, 232, 0.5));
`;

export const UserParamsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  margin: 40px 0 0 0;

  @media (min-width: 768px) {
    margin: 32px 0 0 0;
    gap: 16px;
  }
`;

export const CalorieShower = styled.div`
  display: flex;
  width: 157px;
  height: 96px;
  flex-wrap: wrap;
  background-color: var(--orange, #e6533c);
  padding: 14px;
  align-items: flex-start;
  border-radius: 12px;
  gap: 32px;

  @media (min-width: 768px) {
    width: 214px;
    height: 108px;
    gap: 28px;
    flex-direction: column;
  }
`;

export const WrapperIntakeFood = styled.div`
  display: flex;
  gap: 8px;
`;

export const FoodSvg = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--icon-color, rgba(239, 137, 100, 1));
`;

export const TextCalorie = styled.p`
  font-feature-settings: ('clig' off), ('liga' off);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--text-calorie-intake, rgba(239, 237, 232, 0.8)) @media
    (min-width: 768px) {
    line-height: 18px;
  }
`;

export const SpanIntake = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.1;
  color: var(--white, #efede8);

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.3;
  }
`;

export const ActivityShower = styled.div`
  display: flex;
  width: 157px;
  height: 96px;
  flex-wrap: wrap;
  background-color: var(--orange, #e6533c);
  padding: 14px;
  align-items: flex-start;
  border-radius: 12px;
  gap: 16px;

  @media (min-width: 768px) {
    width: 214px;
    height: 108px;
    gap: 28px;
  }
`;

export const WrapperIntake = styled.div`
  display: flex;
  gap: 8px;
`;

export const ParamsSvg = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--icon-color, rgba(239, 137, 100, 1));
`;

export const Text = styled.p`
  font-feature-settings: ('clig' off), ('liga' off);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--text-calorie-intake, rgba(239, 237, 232, 0.8)) @media
    (min-width: 768px) {
    line-height: 18px;
  }
`;

export const Span = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.1;
  color: var(--white, #efede8);

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.3;
  }
`;

export const DescWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 335px;
  margin: 40px 0 0 0;
  gap: 8px;

  @media (min-width: 768px) {
    margin: 32px 0 0 0;
    width: 439px;
  }
`;

export const ExcellMarkIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Desc = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  color: var(--secondary-text-color, #efede866);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const WrapperLogOut = styled.div`
width: 100%;
display: inline-flex;
justify-content: flex-end;
margin: 41px 40px 0 0;

@media (min-width: 768px) {
  margin: 32px 0 0 0;
}

@media (min-width: 1440px) {
  margin: 32px 0 0 0;
}
`;

