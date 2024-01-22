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

  // useEffect(() => {
  //   const options = {
  //     params: { body, equipment, muscles },
  //   };

  //   getExercises(options).then(({ data }) => {
  //     setbody(data.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   const options = {
  //     params: { body, equipment, muscles },
  //   };

  //   if (fetching) {
  //     getProducts(options)
  //       .then(({ data }) => {
  //         setProducts([...products, ...data.data]);
  //         setCurrentTotal(data.total);
  //         setPage((p) => p + 1);
  //       })
  //       .finally(() => setFetching(false));
  //   }
  // }, [fetching]);

  // const setParams = (params) => {
  //   setProducts([]);
  //   setCategory(params.category);
  //   setGroupBloodNotAllowed(params.groupBloodNotAllowed);
  //   setSearch(params.search);
  //   setPage(1);
  //   setFetching(true);
  //   setCurrentTotal(0);
  // };

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
