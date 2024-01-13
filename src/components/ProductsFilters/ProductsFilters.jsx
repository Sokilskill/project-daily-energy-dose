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

const categories = [
    { value: 'alcoholic-drinks', name: 'alcoholic drinks' },
    { value: 'berries', name: 'berries' },
    { value: 'cereals', name: 'cereals' },
    { value: 'dairy', name: 'dairy' },
    { value: 'dried-fruits', name: 'dried fruits' },
    { value: 'eggs', name: 'eggs' },
    { value: 'fish', name: 'fish' },
    { value: 'flour', name: 'flour' },
    { value: 'fruits', name: 'fruits' },
    { value: 'meat', name: 'meat' },
    { value: 'mushrooms', name: 'mushrooms' },
    { value: 'nuts', name: 'nuts' },
    { value: 'oils-and-fats', name: 'oils and fats' },
    { value: 'poppy', name: 'poppy' },
    { value: 'sausage', name: 'sausage' },
    { value: 'seeds', name: 'seeds' },
    { value: 'sesame', name: 'sesame' },
    { value: 'soft-drinks', name: 'soft drinks' },
    { value: 'vegetables-and-herbs', name: 'vegetables and herbs' },
];

export function Filters() {
  const [category, setCategory] = useState('');

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
      
          

    </ProductsFilters>
  );
}
