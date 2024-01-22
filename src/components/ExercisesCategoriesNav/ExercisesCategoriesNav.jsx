import { useDispatch } from 'react-redux';
import {
  NavWrap,
  CategoryLink,
  CategoryItem,
} from './ExercisesCategoriesNav.styled';
import { setCategory } from '../../redux/exercises/categories/categoriesSlice';
import exercisesOperations from '../../redux/exercises/exercisesOperations';

const ExercisesCategoriesNav = () => {
  const categories = [
    { title: 'Body parts', category: 'bodyPart' },
    { title: 'Equipment', category: 'equipment' },
    { title: 'Muscles', category: 'target' },
  ];
  const dispatch = useDispatch();
  return (
    <NavWrap>
      {categories.map(({ title, category }, index) => (
        <CategoryItem key={index}>
          <CategoryLink
            to={category}
            onClick={() => {
              dispatch(setCategory(title));
              dispatch(exercisesOperations.getCategories({ category: title }));
            }}
          >
            {title}
          </CategoryLink>
        </CategoryItem>
      ))}
    </NavWrap>
  );
};

export default ExercisesCategoriesNav;
