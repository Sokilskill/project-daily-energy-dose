import { useDispatch, useSelector } from 'react-redux';
import { ExercisesSubcategoriesItem } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import {
  Pagination,
  PaginationActiveIcon,
  PaginationIcon,
  SubcategoriesList,
} from '../ExercisesSubcategoriesList/ExercisesSubcategoriesList.styled';
import {
  selectExercisesByBodyParts,
  selectExercisesByEquipment,
  selectExercisesByMuscles,
} from '../../redux/exercises/exercisesSelectors';
import { useEffect, useState } from 'react';
import {
  getExercisesByBodyParts,
  // getExercisesByEquipment,
  // getExercisesByMuscles,
} from '../../redux/exercises/exercisesOperations';
import { useParams } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

export const ExercisesSubcategoriesList = () => {
  const dispatch = useDispatch();
  const { categoryType } = useParams();

  // const bodyList = useSelector(selectExercisesByBodyParts);
  // const musclesList = useSelector(selectExercisesByMuscles);
  // const equipmentList = useSelector(selectExercisesByEquipment);
  // const exercisesList =
  //   categoryType === 'body'
  //     ? bodyList
  //     : categoryType === 'Muscles'
  //     ? musclesList
  //     : categoryType === 'equipment'
  //     ? equipmentList
  //         : [];
  const [exercisesList, setExercisesList] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);
  const totalPages = Math.ceil(total / limit);
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1440) {
      setLimit(10);
    } else if (screenWidth < 1440) {
      setLimit(9);
    } else if (screenWidth <= 375) {
      setLimit(10);
    }
  }, []);

  // useEffect(() => {
  //   const category =
  //     categoryType === 'body'
  //       ? 'bodyPart'
  //       : categoryType === 'Muscles'
  //       ? 'Muscles'
  //       : categoryType === 'equipment'
  //       ? 'equipment'
  //       : '';
  //   const options = { page, limit };
  //   const optionsforMuscles = { page, limit, category };
  //   if (categoryType === 'body') {
  //     dispatch(getExercisesByBodyParts(options)).then((data) => {
  //       console.log(data);
  //     });
  //   } else if (categoryType === 'Muscles') {
  //     dispatch(getExercisesByMuscles(optionsforMuscles)).then((data) => {
  //       console.log(data);
  //     });
  //   } else if (categoryType === 'equipment') {
  //     dispatch(getExercisesByEquipment());
  //   }
  // }, [dispatch, categoryType, limit, page]);

  useEffect(() => {
    const category =
      categoryType === 'body'
        ? 'Body Part'
        : categoryType === 'Muscles'
        ? 'Muscles'
        : categoryType === 'equipment'
        ? 'Equipment'
        : '';

    const options = { page, limit, category };
    dispatch(getExercisesByBodyParts(options)).then(({ payload }) => {
      setTotal(payload.total);
      setExercisesList(payload.data);
    });
  }, [dispatch, categoryType, limit, page]);

  const handlePageChange = (page) => {
    const newPage = Math.min(Math.max(1, page), totalPages);
    const newStartIndex = (newPage - 1) * limit;

    // if (newStartIndex < exercisesTotalRecords) {
    //   setCurrentPage(newPage);
    // }
  };

  return (
    <div>
      <SubcategoriesList>
        {exercisesList?.map((exercise) => (
          <ExercisesSubcategoriesItem
            key={exercise._id}
            data={exercise}
          ></ExercisesSubcategoriesItem>
        ))}
      </SubcategoriesList>
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={
              page === index + 1
              // ? color={'#EFEDE8'}
              // :color={'#E6533C'}
            }
          ></span>
        ))}
        <PaginationIcon onClick={() => setPage(page + 1)} />
        <PaginationActiveIcon>
          <use href={`${sprite}#icon-block`}></use>
        </PaginationActiveIcon>
      </Pagination>
    </div>
  );
};
