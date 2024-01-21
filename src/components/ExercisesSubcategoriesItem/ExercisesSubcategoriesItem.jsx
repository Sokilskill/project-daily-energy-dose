import {
  SubcategoriesListItem,
  SubcategoriesImg,
  SubcategoriesTextWrapper,
  SubcategoriesTitle,
  SubcategoriesText,
} from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem.styled';
import Shoulders from '../../assets/Exercises/Shoulders.png';
import { useNavigate } from 'react-router-dom';

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
  const handleImageClick = () => {
    onClick(data);
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
