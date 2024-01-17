import styled from '@emotion/styled';

export const ExercisesWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    background-image: url('/src/assets/Exercises/Exercises.png');
    background-repeat: no-repeat;
    background-size: 35%;
    background-position: right;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 32px;
    width: 704px;
    height: 726px;
    margin-top: 32px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 8px;
      background-color: rgba(239, 237, 232, 0.1);
      border-radius: 12px;
    }
    ::-webkit-scrollbar-thumb {
      background: #ef8964;
      border-radius: 12px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 850px;
    height: 487px;
  }
`;
