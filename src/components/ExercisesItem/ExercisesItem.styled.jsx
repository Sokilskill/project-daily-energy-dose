import styled from '@emotion/styled';

export const ExerciseItem = styled.div`
  width: 405px;
  height: 141px;
  padding: 16px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
`;

export const ItemTopBloc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Workout = styled.p`
  padding: 5px 7.5px;
  font-size: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
`;

export const StartBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const StartBtn = styled.p`
  color: #e6533c;
  background-color: transparent;
`;

export const ArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #e6533c;
`;

export const ExerciseTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-top: 27px;
  margin-bottom: 8px;
`;

export const FigureIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #efede8;
  fill: #efede8;
  background-color: #efa082;
  border-radius: 50%;
  padding: 4px 5px;
`;

export const ExerciseTitle = styled.p`
  font-size: #efede8;
`;

export const TargetsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TargetsListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
`;

export const TargetsListTitle = styled.p`
  color: rgba(239, 237, 232, 0.4);
`;

export const TargetsListText = styled.p`
  color: #efede8;
`;
