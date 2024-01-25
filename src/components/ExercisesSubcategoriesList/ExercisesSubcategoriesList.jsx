import { useDispatch } from 'react-redux';
import { ExercisesSubcategoriesItem } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import {
  SubcategoriesList,
  Pagination,
  PaginationItem,
  PaginationIcon,
} from '../ExercisesSubcategoriesList/ExercisesSubcategoriesList.styled';
import { useEffect, useState } from 'react';
import { getExercisesByCategories } from '../../redux/exercises/exercisesOperations';
import { useParams } from 'react-router-dom';

export const ExercisesSubcategoriesList = () => {
  const dispatch = useDispatch();
  const { categoryType } = useParams();
  const [exercisesList, setExercisesList] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(0);
  const [total, setTotal] = useState(0);
  const category =
    categoryType === 'body'
      ? 'Body Part'
      : categoryType === 'muscles'
      ? 'Muscles'
      : categoryType === 'equipment'
      ? 'Equipment'
      : '';

  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (width >= 1440) {
      setLimit(10);
    } else if (width < 1440 && width >= 768) {
      setLimit(9);
    } else if (width < 768 && width >= 375) {
      setLimit(10);
    }
  }, [width]);

  useEffect(() => {
    const options = { page, limit, category };
    dispatch(getExercisesByCategories(options)).then(({ payload }) => {
      setTotal(payload.total);
      setExercisesList(payload.data);
    });
  }, [dispatch, category, categoryType, limit, page]);

  const pages = [];
  const pagesAmount = Math.ceil(total / limit);
  for (let i = 1; i <= pagesAmount; i++) {
    pages.push(i);
  }

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
        {pages.map((number, index) => (
          <div key={number}>
            <PaginationItem
              onClick={() => {
                setPage(number);
                // dispatch(
                //   getExercisesByCategories({ page: number, category, limit })
                // ).then(({ payload }) => {
                //   setTotal(payload.total);
                //   setExercisesList(payload.data);
                // });
              }}
              color={`${
                page === index + 1 ? 'transparent' : 'rgba(239, 237, 232, 0.2)'
              }`}
              active={`${page === index + 1 ? '#E6533C' : 'transparent'}`}
            >
              <PaginationIcon
                color={`${page === index + 1 ? '#E6533C' : 'transparent'}`}
              />
            </PaginationItem>
          </div>
        ))}
      </Pagination>
    </div>
  );
};
