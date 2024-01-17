import { useState, useEffect } from 'react';
import { Container, TitlePage } from './ProductsPage.styled';
import { Filters } from '../../components/ProductsFilters/ProductsFilters';
import { ProductsList } from '../../components/ProductsList/ProductsList';

const categories = [
  {
    id: 'fdg12sdgsfd',
    value: '23gfdhdf656sg345jk636643',
    label: 'Alcoholic drinks',
  },
  { id: '12fdgsdgsfd', value: '23gfdhdfjh656sg345jk636643', label: 'berries' },
  {
    id: 'fdgsdgs34fd',
    value: 'ce23gfdhdf656sg345jk636643reals',
    label: 'cereals',
  },
  { id: 'fd34gsdgsfd', value: '23gfdhddfgdff656sg345jk636643', label: 'dairy' },
  {
    id: 'fdgsdgs45fd',
    value: 'dried23gfdhdf656sg345jk636643-fruits',
    label: 'dried fruits',
  },
  { id: 'f45dgsdgsfd', value: 'e23gfdhdf656scvcg345jk636643ggs', label: 'eggs' },
  { id: 'fdgsdgsfd', value: 'fis23gfdhdfj656sg345jk636643h', label: 'fish' },
  {
    id: 'fdgsd56gsfd',
    value: 'fl23gfdhdf6hjfg56sg345jk636643our',
    label: 'flour',
  },
  {
    id: 'f566gsdgsfd',
    value: 'fr23gfdhdfdfg656sg345jk636643uits',
    label: 'fruits',
  },
  { id: 'f666gsdgsfd', value: 'meat23gfdcvbhdf656sg345jk636643', label: 'meat' },
  {
    id: 'fdgs666dgsfd',
    value: 'mus23gfdhcxvdf656sg345jk636643hrooms',
    label: 'mushrooms',
  },
  { id: 'fdgsd777sfd', value: 'n23gfdfgdhdf656sg345jk636643uts', label: 'nuts' },
  {
    id: 'fd7778gsdgsfd',
    value: 'oi23gfdhdf656sg345jghjk636643ls-and-fats',
    label: 'oils and fats',
  },
  {
    id: 'fdgsd88gsfd',
    value: 'po23gfdhdghjf656sg345jk636643ppy',
    label: 'poppy',
  },
  {
    id: 'f8888dgsdgsfd',
    value: 'sau23ghjgfdhdf656sg345jk636643sage',
    label: 'sausage',
  },
  {
    id: 'fdgsdg999sfd',
    value: 'seed23gfdhdf656sg34ghj5jk636643s',
    label: 'seeds',
  },
  {
    id: 'fd999sdgsfd',
    value: 'se23gfdhdf65ghj6sg345jk636643same',
    label: 'sesame',
  },
  {
    id: 'fd99111gsdgsfd',
    value: 'soft-23gfdhdf656sg34ghjjk636643drinks',
    label: 'soft drinks',
  },
  {
    id: 'fd232367gsdgsfd',
    value: 'veg23gfdhdf656sg345jk636643etables-and-herbs',
    label: 'vegetables and herbs',
  },
];

const initialRecommend = [
  { id: 'fdg12sdgdfdffsfd', value: 'fdghjgkytktydfghdfhgfdgfk', label: 'all' },
  {
    id: 'fdg12234sdfsdgsfd',
    value: '23gfdhdfsfdgthjtjh6543',
    label: 'recommended',
  },
  {
    id: 'fdg12asdf123gdfsdgsfd',
    value: 'ce23345gfbdhjytjhty3reals',
    label: 'not recommended',
  },
];

const products = [1, 2, 3, 4, 5, 6,7,8]

export default function ProductPage() {
  const [allCategories, setAllCategories] = useState(categories);
  const [allRec, setAllRec] = useState(initialRecommend);

 
  return (
    <Container>
      <TitlePage>Products</TitlePage>
      <Filters
        optionsCategories={allCategories}
        optionsRecommendation={allRec}
      />
      <ProductsList products={products} />
    </Container>
  );
}
