import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
// import sprite from '../../assets/block2.jpg';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/first">
          <IconWrapper>
            {/* <use href={`${sprite}#icon-logo`} /> */}
          </IconWrapper>
          First Page
        </StyledLink>
        <StyledLink to="/second">
          <IconWrapper>
            {/* <use href={`${sprite}#icon-logo`} /> */}
          </IconWrapper>
          Second Page
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
