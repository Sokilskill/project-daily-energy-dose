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
import sprite from '../../assets/sprite.svg';

export const ExercisesSubcategoriesList = () => {
  const dispatch = useDispatch();
  const { categoryType } = useParams();
  const [exercisesList, setExercisesList] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);

  const pages = [];
  const pagesAmount = Math.ceil(total / limit);
  for (let i = 1; i <= pagesAmount; i++) {
    pages.push(i);
  }

  const category =
    categoryType === 'body'
      ? 'Body Part'
      : categoryType === 'muscles'
      ? 'Muscles'
      : categoryType === 'equipment'
      ? 'Equipment'
      : '';

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

  useEffect(() => {
    const options = { page, limit, category };
    dispatch(getExercisesByCategories(options)).then(({ payload }) => {
      setTotal(payload.total);
      setExercisesList(payload.data);
    });
  }, [dispatch, category, categoryType, limit, page]);

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
      {total > 10 && (
        <Pagination>
          {pages.map((number, index) => (
            <div key={number}>
              <PaginationItem
                onClick={() => {
                  setPage(number);
                }}
                color={`${
                  page === index + 1
                    ? 'transparent'
                    : 'rgba(239, 237, 232, 0.2)'
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
      )}
    </div>
  );
};
