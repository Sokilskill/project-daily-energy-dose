import { useState } from 'react';
import {
  ExerciseItem,
  ItemTopBloc,
  Workout,
  ArrowIcon,
  StartBtnWrapper,
  StartBtn,
  ExerciseTitleWrapper,
  FigureIcon,
  ExerciseTitle,
  TargetsList,
  TargetsListItem,
  TargetsListTitle,
  TargetsListText,
} from '../ExercisesItem/ExercisesItem.styled';
import sprite from '../../assets/sprite.svg';
import AddExerciseForm from '../AddExerciseForm/AddExerciseForm.jsx';

export const ExercisesItem = () => {

  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false)
  }
  
  return (
    <>
      <ExerciseItem>
        <ItemTopBloc>
          <Workout>WORKOUT</Workout>
          <StartBtnWrapper>
            <StartBtn onClick={() => setOpenModal(true)}>Start</StartBtn>
            <ArrowIcon>
              <use href={`${sprite}#icon-arrow`}></use>
            </ArrowIcon>
          </StartBtnWrapper>
        </ItemTopBloc>
        <ExerciseTitleWrapper>
          <FigureIcon>
            <use
              href={`${sprite}#icon-running-stick-figure-svgrepo-com-1-1`}
            ></use>
          </FigureIcon>
          <ExerciseTitle>Air bike</ExerciseTitle>
        </ExerciseTitleWrapper>
        <TargetsList>
          <TargetsListItem>
            <TargetsListTitle>Burned calories:</TargetsListTitle>
            <TargetsListText>312</TargetsListText>
          </TargetsListItem>
          <TargetsListItem>
            <TargetsListTitle>Body part:</TargetsListTitle>
            <TargetsListText>Waist</TargetsListText>
          </TargetsListItem>
          <TargetsListItem>
            <TargetsListTitle>Target:</TargetsListTitle>
            <TargetsListText>Abs</TargetsListText>
          </TargetsListItem>
        </TargetsList>
      </ExerciseItem>
      <AddExerciseForm
      onClose={handleCloseModal} 
      open={openModal}
      time={180}
      exerciseId={1}
      calories={500} />
    </>
    
  );
};
