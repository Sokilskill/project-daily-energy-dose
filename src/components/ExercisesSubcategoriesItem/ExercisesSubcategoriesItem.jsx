import {
  SubcategoriesListItem,
  SubcategoriesImg,
  SubcategoriesTextWrapper,
  SubcategoriesTitle,
  SubcategoriesText,
} from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem.styled';
import Shoulders from '../../assets/Exercises/Shoulders.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getExercises } from '../../redux/exercises/exercisesOperations';

// export const ExercisesSubcategoriesItem = () => {
//   const navigate = useNavigate();
//   return (
//     <SubcategoriesListItem
//       onClick={() => {
//         navigate('/exercises/list');
//       }}
//     >
//       <SubcategoriesImg src={Shoulders}></SubcategoriesImg>
//       <SubcategoriesTextWrapper>
//         <SubcategoriesTitle>Shoulders</SubcategoriesTitle>
//         <SubcategoriesText>Body parts</SubcategoriesText>
//       </SubcategoriesTextWrapper>
//     </SubcategoriesListItem>
//   );
// };

export const ExercisesSubcategoriesItem = ({ data, onClick }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getExercises());
  // }, []);

  const handleImageClick = () => {
    // onClick(data);
    dispatch(getExercises());
  };
  return (
    <SubcategoriesListItem onClick={handleImageClick}>
      <SubcategoriesImg src={data.imgURL} alt={data.name}></SubcategoriesImg>
      <SubcategoriesTextWrapper>
        <SubcategoriesTitle>{data.name}</SubcategoriesTitle>
        <SubcategoriesText>{data.filter}</SubcategoriesText>
      </SubcategoriesTextWrapper>
    </SubcategoriesListItem>
  );
};
