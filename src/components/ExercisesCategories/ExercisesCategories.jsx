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
import { useDispatch, useSelector } from 'react-redux';
import { ExercisesSubcategoriesList } from '../ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import {
  selectExercisesByBodyParts,
  selectExercisesByEquipment,
  selectExercisesByMuscles,
} from '../../redux/exercises/exercisesSelectors';

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
  const [exercises, setExercises] = useState([]);

  // const handleSubcategoryClick = (subcategory) => {
  //   setActiveSubcategory(subcategory);
  // };

  useEffect(() => {
    if (activeSubcategory === 'body') {
      dispatch(getExercisesByBodyParts());
    } else if (activeSubcategory === 'muscles') {
      dispatch(getExercisesByMuscles());
    } else if (activeSubcategory === 'equipment') {
      dispatch(getExercisesByEquipment());
    }
  }, [dispatch, activeSubcategory]);

  const bodyList = useSelector(selectExercisesByBodyParts);
  const musclesList = useSelector(selectExercisesByMuscles);
  const equipmentList = useSelector(selectExercisesByEquipment);

  useEffect(() => {
    setExercises(bodyList);
  }, []);

  const setActiveExByBody = (subcategory) => {
    setActiveSubcategory(subcategory);
    setExercises(bodyList);
  };

  const setActiveExByMuscles = (subcategory) => {
    setActiveSubcategory(subcategory);
    setExercises(musclesList);
  };
  const setActiveExByEquipmen = (subcategory) => {
    setActiveSubcategory(subcategory);
    setExercises(equipmentList);
  };
  return (
    <div>
      {/* <CategoriesList>
        {categories.map(({ text, id, name }) => (
          <CategoriesListItem key={id}>
            <Link onClick={() => handleSubcategoryClick(name)}>{text}</Link>
          </CategoriesListItem>
        ))}
      </CategoriesList> */}
      <div>
        <button onClick={() => setActiveExByBody('body')}>Body Parts</button>

        <button onClick={() => setActiveExByMuscles('muscles')}>Muscles</button>

        <button onClick={() => setActiveExByEquipmen('equipment')}>
          Equipments
        </button>
      </div>
      {activeSubcategory && (
        <ExercisesSubcategoriesList
          // subcategory={activeSubcategory}
          exercises={exercises}
          // onSelectExercise={(exercise) => console.log(exercise)}
        />
      )}
    </div>
  );
};
