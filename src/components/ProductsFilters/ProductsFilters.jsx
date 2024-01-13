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
    setRecomended(newId.id);
  };

  const getCategoryId = () => {
    return currentCategory
      ? optionsCategories.find((category) => category.id === currentCategory)
      : '';
  };
  const getRecommendId = () => {
    return recommended
      ? optionsRecommendation.find((rec) => rec.id === recommended)
      : '';
  };

  return (
    <ProductsFilters>
      <Form>
        <Input
          type="text"
          name="request"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
      />

      <Select
        onChange={onChangeRec}
        value={getRecommendId()}
        options={optionsRecommendation}
      />
    </ProductsFilters>
  );
}
