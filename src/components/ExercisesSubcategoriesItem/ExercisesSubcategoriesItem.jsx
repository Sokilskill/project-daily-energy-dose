import {
  SubcategoriesListItem,
  SubcategoriesImg,
  SubcategoriesTextWrapper,
  SubcategoriesTitle,
  SubcategoriesText,
} from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem.styled';
import Shoulders from '../../assets/Exercises/Shoulders.png';
import { useNavigate } from 'react-router-dom';

export const ExercisesSubcategoriesItem = () => {
  const navigate = useNavigate();
  return (
    <SubcategoriesListItem
      onClick={() => {
        navigate('/exercises/list');
      }}
    >
      <SubcategoriesImg src={Shoulders}></SubcategoriesImg>
      <SubcategoriesTextWrapper>
        <SubcategoriesTitle>Shoulders</SubcategoriesTitle>
        <SubcategoriesText>Body parts</SubcategoriesText>
      </SubcategoriesTextWrapper>
    </SubcategoriesListItem>
  );
};
