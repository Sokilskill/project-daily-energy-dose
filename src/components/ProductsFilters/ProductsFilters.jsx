import { useState, useEffect } from 'react';
import Select from 'react-select';
import {
  ProductsFilters,
  Form,
  Input,
  Btn,
  Icon,
} from './ProductsFilters.styled';
import sprite from '../../assets/sprite.svg';



export function Filters({ optionsCategories, optionsRecommendation }) {
  const [currentCategory, setCurrentCategory] = useState('');
  const [recommended, setRecomended] = useState('');

  const onChangeCategory = (newId) => {
    setCurrentCategory(newId.id);
  };

  const onChangeRec = (newId) => {
    setRecomended(newId.value);
  };

  const getCategoryId = () => {
    const gg = currentCategory
      ? optionsCategories.find((category) => category.id === currentCategory)
      : '';
    console.log(gg);
    return gg;
  };
  const getRecommendId = () => {
    return recommended
      ? optionsRecommendation.find((rec) => rec.value === recommended)
      : '';
  };

  return (
    <ProductsFilters>
      <Form>
        <Input
          type="text"
          name="request"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Search"
          required
        />
        <Btn right={'40px'}>
          <Icon color={'#E6533C'}>
            <use href={sprite + '#icon-clear'} />
          </Icon>
        </Btn>
        <Btn right={'14px'}>
          <Icon color={'#EFEDE8'}>
            <use href={sprite + '#icon-search'} />
          </Icon>
        </Btn>
      </Form>

      <Select
        onChange={onChangeCategory}
        value={getCategoryId()}
        options={optionsCategories}
        classNamePrefix="custom-select"
        className="custom-select-container"
        placeholder="Categories"
      />

      <Select
        onChange={onChangeRec}
        value={getRecommendId()}
        options={optionsRecommendation}
        classNamePrefix="custom-select-second"
        className="custom-select-second-container"
        placeholder="All"
      />
    </ProductsFilters>
  );
}


