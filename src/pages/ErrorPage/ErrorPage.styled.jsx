import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import backgroundImage from '../../assets/Welcome/images/people-training-gym-mob.webp';

export const SectionWrapper = styled.div`
  // position: relative;
  padding: 0;
  background-image: url(${backgroundImage}), var(--bg-gradient);

  background-image: url('/src/assets/Welcome/images/people-training-gym-mob.webp'),
    var(--bg-gradient);
  background-repeat: no-repeat;
  background-position: 107px 240px;

  @media screen and (min-width: 768px) {
    background-image: url('/src/assets/Welcome/images/people-training-gym-tab.webp'),
      var(--bg-gradient);
    background-repeat: no-repeat;
    background-position: 330px 130px;
  }

  @media screen and (min-width: 1440px) {

    background-image: url('/public/assets/side-view-people-training-gym-desk.png');
      var(--bg-gradient);
    background-repeat: no-repeat;
    background-position: right top;
  }
`;

export const SectionContainer = styled.div`
padding-top: 250px ;
padding-bottom: 250px;

   @media screen and (min-width: 768px) {
  padding-top: 309px ;
  padding-bottom: 309px;

  @media screen and (min-width: 1440px) {
  padding-top: 221 ;
  padding-bottom: 221;
`;

export const Container = styled.header`
  position: relative;
`;

export const LogoWrap = styled.header`
  position: absolute;
  top: 0;
`;

export const BackgroundColor = styled.div`
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
`;

export const ContentBox = styled.div`
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
`;

export const Title = styled.h1`
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
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const Link = styled(NavLink)`
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
`;
