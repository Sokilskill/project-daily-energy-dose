import {
  CategoriesList,
  CategoriesListItem,
  Link,
} from '../ExercisesCategories/ExercisesCategories.styled';
import {
  getExercisesByBodyParts,
  getExercisesByEquipment,
  getExercisesByMuscles,
} from '../../redux/exercises/exercisesOperations';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ExercisesSubcategoriesList } from '../ExercisesSubcategoriesList/ExercisesSubcategoriesList';

const categories = [
  {
    id: nanoid(),
    to: '/exercises/bodyParts',
    text: 'Body Parts',
    name: 'body',
  },
  {
    id: nanoid(),
    to: '/exercises/muscles',
    text: 'Muscles',
    name: 'muscles',
  },
  {
    id: nanoid(),
    to: '/exercises/equipment',
    text: 'Equipment',
    name: 'equipment',
  },
];

export const ExercisesCategories = () => {
  const dispatch = useDispatch();
  const [activeSubcategory, setActiveSubcategory] = useState('body');

  //функція, яка записує активну категорію по кліку
  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(subcategory);
  };

  useEffect(() => {
    if (activeSubcategory === 'body') {
      dispatch(getExercisesByBodyParts());
    } else if (activeSubcategory === 'muscles') {
      dispatch(getExercisesByMuscles());
    } else if (activeSubcategory === 'equipment') {
      dispatch(getExercisesByEquipment());
    }
  }, [dispatch, activeSubcategory]);

  //встановлена активна категорія в даному компоненті відображається коректно
  console.log(activeSubcategory);

  return (
    <div>
      <CategoriesList>
        {categories.map(({ text, id, name }) => (
          <CategoriesListItem key={id}>
            <Link onClick={() => handleSubcategoryClick(name)}>{text}</Link>
          </CategoriesListItem>
        ))}
      </CategoriesList>
      {activeSubcategory && (
        <ExercisesSubcategoriesList
          subcategory={activeSubcategory}
          // onSelectExercise={(exercise) => console.log(exercise)}
        />
      )}
    </div>
  );
};
