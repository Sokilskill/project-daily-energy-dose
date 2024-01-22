import { useDispatch, useSelector } from 'react-redux';
import {
  CategoriesList,
  CategoriesPaginationWrap,
} from './ExercisesCategories.styled';
import {
  selectCategory,
  selectListCategories,
  selectPageCategories,
  selectTotalCategories,
} from '../../redux/exercises/exercisesSelectors';
// import { useLocation } from 'react-router-dom';
import exercisesOperations from '../../redux/exercises/exercisesOperations';
import { ExercisesSubcategoriesItem } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';

export const ExercisesCategories = () => {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);
  const subCategories = useSelector(selectListCategories);
  const page = useSelector(selectPageCategories);
  const total = useSelector(selectTotalCategories);
  // const location = useLocation();
  // console.log(category);
  // console.log(page);
  // console.log(total);

  return (
    <>
      <CategoriesList>
        {subCategories.map(({ _id, name, imgURL, filter }) => (
          <ExercisesSubcategoriesItem
            key={_id}
            name={name}
            imgURL={imgURL}
            filter={filter}
          />
        ))}
      </CategoriesList>
      {total > 10 && (
        <CategoriesPaginationWrap>
          <button
            onClick={() =>
              dispatch(
                exercisesOperations.getCategories({
                  category: category,
                  page: page,
                })
              )
            }
          >
            Load more
          </button>
        </CategoriesPaginationWrap>
      )}
    </>
    //   <CategoriesList>
    //     <CategoriesListItem
    //       onClick={() => {
    //         dispatch(getExercisesByBodyParts());
    //       }}
    //     >
    //       <Link to="bodyParts">Body parts</Link>
    //     </CategoriesListItem>
    //     <CategoriesListItem
    //       onClick={() => {
    //         dispatch(getExercisesByMuscles());
    //       }}
    //     >
    //       <Link to="muscles">Muscles</Link>
    //     </CategoriesListItem>
    //     <CategoriesListItem
    //       onClick={() => {
    //         dispatch(getExercisesByEquipment());
    //       }}
    //     >
    //       <Link to="equipment">Equipment</Link>
    //     </CategoriesListItem>
    //   </CategoriesList>
  );
};
