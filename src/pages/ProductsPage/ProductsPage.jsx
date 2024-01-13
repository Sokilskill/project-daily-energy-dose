import { useState, useEffect } from 'react';
import { Container, TitlePage } from './ProductsPage.styled';
import { Filters } from '../../components/ProductsFilters/ProductsFilters';
import { ProductsList } from '../../components/ProductsList/ProductsList';

const categories = [
  { id: '23gfdhdf656sg345jk636643', label: 'alcoholic drinks' },
  { id: '23gfdhdfjh656sg345jk636643', label: 'berries' },
  { id: 'ce23gfdhdf656sg345jk636643reals', label: 'cereals' },
  { id: '23gfdhdf656sg345jk636643', label: 'dairy' },
  { id: 'dried23gfdhdf656sg345jk636643-fruits', label: 'dried fruits' },
  { id: 'e23gfdhdf656sg345jk636643ggs', label: 'eggs' },
  { id: 'fis23gfdhdf656sg345jk636643h', label: 'fish' },
  { id: 'fl23gfdhdf656sg345jk636643our', label: 'flour' },
  { id: 'fr23gfdhdf656sg345jk636643uits', label: 'fruits' },
  { id: 'meat23gfdhdf656sg345jk636643', label: 'meat' },
  { id: 'mus23gfdhdf656sg345jk636643hrooms', label: 'mushrooms' },
  { id: 'n23gfdhdf656sg345jk636643uts', label: 'nuts' },
  { id: 'oi23gfdhdf656sg345jk636643ls-and-fats', label: 'oils and fats' },
  { id: 'po23gfdhdf656sg345jk636643ppy', label: 'poppy' },
  { id: 'sau23gfdhdf656sg345jk636643sage', label: 'sausage' },
  { id: 'seed23gfdhdf656sg345jk636643s', label: 'seeds' },
  { id: 'se23gfdhdf656sg345jk636643same', label: 'sesame' },
  { id: 'soft-23gfdhdf656sg345jk636643drinks', label: 'soft drinks' },
  {
    id: 'veg23gfdhdf656sg345jk636643etables-and-herbs',
    label: 'vegetables and herbs',
  },
];

const initialRecommend = [
  { id: 'fdghjgkytktydfghdfhgfdgfk', label: 'all' },
  { id: '23gfdhdfsfdgthjtjh6543', label: 'recommended' },
  { id: 'ce23345gfbdhjytjhty3reals', label: 'not recommended' },
];

export default function ProductPage() {
  const [allCategories, setAllCategories] = useState(categories);
  const [allRec, setAllRec] = useState(initialRecommend);

  return (
    <Container>
      <TitlePage>Products</TitlePage>
      <Filters optionsCategories={allCategories} optionsRecommendation={allRec} />
      <ProductsList />
    </Container>
  );
}
