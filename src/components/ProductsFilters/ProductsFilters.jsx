import { useState, useEffect } from 'react';
import Select from 'react-select';
import {getAllCategories} from '../../pages/ProductsPage/product-Api'
import {
  ProductsFilters,
  Form,
  Input,
  Btn,
  Icon,
} from './ProductsFilters.styled';
import sprite from '../../assets/sprite.svg';

const initialRecommended = [
  { id: 'fdg12sdgdfdffsfd', value: 'all', label: 'all' },
  {
    id: 'fdg12234sdfsdgsfd',
    value: 'recommended',
    label: 'Recommended',
  },
  {
    id: 'fdg12asdf123gdfsdgsfd',
    value: 'not-recommended',
    label: 'Not recommended',
  },
];

export function Filters({ setParams }) {
  const [category, setCategory] = useState('');
  const [groupBloodNotAllowed, setGroupBloodNotAllowed] = useState('');
  const [search, setSearch] = useState('');

  const [request, setRequest] = useState('');
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [allCategories, setAllCategories] = useState([]);
  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }
    const params = { search, category, groupBloodNotAllowed };
    setParams(params);
  }, [search, groupBloodNotAllowed, category]);

  useEffect(() => {
    getAllCategories().then((r) => {
      setAllCategories(r.data);
    });
  }, []);

  const onChangeCategory = (newId) => {
    setCategory(newId.value);
  };

  const onChangeRec = (newId) => {
    setGroupBloodNotAllowed(newId.value);
  };

  const getCategoryId = () => {
    return category
      ? allCategories.find((category) => category.value === category)
      : '';
  };

  const getRecommendId = () => {
    return groupBloodNotAllowed
      ? initialRecommended.find((rec) => rec.value === groupBloodNotAllowed)
      : '';
  };

  const handleInputValue = (e) => {
    setRequest(e.currentTarget.value);
  };

  const clearFilters = () => {
    // setCategory('');
    // setGroupBloodNotAllowed('');
    setSearch('');
    setRequest('');
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setSearch(request);
  };

  return (
    <ProductsFilters>
      <Form onSubmit={handlerSubmit}>
        <Input
          type="text"
          name="request"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Search"
          value={request}
          onChange={handleInputValue}
          required
        />

        <Btn right={'14px'} type="submit">
          <Icon color={'#EFEDE8'}>
            <use href={sprite + '#icon-search'} />
          </Icon>
        </Btn>

        <Select
          onChange={onChangeCategory}
          value={getCategoryId()}
          options={allCategories}
          classNamePrefix="custom-select"
          className="custom-select-container"
          placeholder="Categories"
        />

        <Select
          onChange={onChangeRec}
          value={getRecommendId()}
          options={initialRecommended}
          classNamePrefix="custom-select-second"
          className="custom-select-second-container"
          placeholder="All"
        />
      </Form>
      {
        // (request || groupBloodNotAllowed || category)
        request && (
          <Btn right={'40px'} onClick={clearFilters}>
            <Icon color={'#E6533C'}>
              <use href={sprite + '#icon-clear'} />
            </Icon>
          </Btn>
        )
      }
    </ProductsFilters>
  );
}


