import styled from '@emotion/styled';

export const ExercisesWrapper = styled.div`
  background-image: url('/src/assets/Exercises/Exercises.png');
  background-repeat: no-repeat;
  background-size: 35%;

  background-position: right;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 32px;
  margin-top: 43px;

  width: 850px;
  height: 487px;
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
`;
