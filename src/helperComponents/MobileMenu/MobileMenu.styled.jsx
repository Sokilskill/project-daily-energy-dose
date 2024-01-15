import styled from 'styled-components';

export const Nav = styled.nav`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Modal = styled.div`
  
    display: ({show}) => show? "block" : "none";
    @media screen and (min-width: 1200px) {
    display: none;
`;
