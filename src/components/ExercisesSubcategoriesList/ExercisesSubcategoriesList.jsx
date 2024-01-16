import {
  SubcategoriesList,
  SubcategoriesListItem,
  SubcategoriesImg,
  SubcategoriesTextWrapper,
  SubcategoriesTitle,
  SubcategoriesText,
} from '../ExercisesSubcategoriesList/ExercisesSubcategoriesList.styled';
import Shoulders from '../../assets/Exercises/Shoulders.png';

export const ExercisesSubcategoriesList = () => {
  return (
    <SubcategoriesList>
      <SubcategoriesListItem>
        <SubcategoriesImg src={Shoulders}></SubcategoriesImg>
        <SubcategoriesTextWrapper>
          <SubcategoriesTitle>Shoulders</SubcategoriesTitle>
          <SubcategoriesText>Body parts</SubcategoriesText>
        </SubcategoriesTextWrapper>
      </SubcategoriesListItem>
      <SubcategoriesListItem>
        <SubcategoriesImg src={Shoulders}></SubcategoriesImg>
        <SubcategoriesTextWrapper>
          <SubcategoriesTitle>Waist</SubcategoriesTitle>
          <SubcategoriesText>Body parts</SubcategoriesText>
        </SubcategoriesTextWrapper>
      </SubcategoriesListItem>
      <SubcategoriesListItem>
        <SubcategoriesImg src={Shoulders}></SubcategoriesImg>
        <SubcategoriesTextWrapper>
          <SubcategoriesTitle>Back</SubcategoriesTitle>
          <SubcategoriesText>Body parts</SubcategoriesText>
        </SubcategoriesTextWrapper>
      </SubcategoriesListItem>
      <SubcategoriesListItem>
        <SubcategoriesImg src={Shoulders}></SubcategoriesImg>
        <SubcategoriesTextWrapper>
          <SubcategoriesTitle>Upper arms</SubcategoriesTitle>
          <SubcategoriesText>Body parts</SubcategoriesText>
        </SubcategoriesTextWrapper>
      </SubcategoriesListItem>
      <SubcategoriesListItem>
        <SubcategoriesImg src={Shoulders}></SubcategoriesImg>
        <SubcategoriesTextWrapper>
          <SubcategoriesTitle>Upper legs</SubcategoriesTitle>
          <SubcategoriesText>Body parts</SubcategoriesText>
        </SubcategoriesTextWrapper>
      </SubcategoriesListItem>
      <SubcategoriesListItem>
        <SubcategoriesImg src={Shoulders}></SubcategoriesImg>
        <SubcategoriesTextWrapper>
          <SubcategoriesTitle>Cardio</SubcategoriesTitle>
          <SubcategoriesText>Body parts</SubcategoriesText>
        </SubcategoriesTextWrapper>
      </SubcategoriesListItem>
      <SubcategoriesListItem>
        <SubcategoriesImg src={Shoulders}></SubcategoriesImg>
        <SubcategoriesTextWrapper>
          <SubcategoriesTitle>Chest</SubcategoriesTitle>
          <SubcategoriesText>Body parts</SubcategoriesText>
        </SubcategoriesTextWrapper>
      </SubcategoriesListItem>
      <SubcategoriesListItem>
        <SubcategoriesImg src={Shoulders}></SubcategoriesImg>
        <SubcategoriesTextWrapper>
          <SubcategoriesTitle>Neck</SubcategoriesTitle>
          <SubcategoriesText>Body parts</SubcategoriesText>
        </SubcategoriesTextWrapper>
      </SubcategoriesListItem>
      <SubcategoriesListItem>
        <SubcategoriesImg src={Shoulders}></SubcategoriesImg>
        <SubcategoriesTextWrapper>
          <SubcategoriesTitle>Lower arms</SubcategoriesTitle>
          <SubcategoriesText>Body parts</SubcategoriesText>
        </SubcategoriesTextWrapper>
      </SubcategoriesListItem>
      <SubcategoriesListItem>
        <SubcategoriesImg src={Shoulders}></SubcategoriesImg>
        <SubcategoriesTextWrapper>
          <SubcategoriesTitle>Lower legs</SubcategoriesTitle>
          <SubcategoriesText>Body parts</SubcategoriesText>
        </SubcategoriesTextWrapper>
      </SubcategoriesListItem>
    </SubcategoriesList>
  );
};
