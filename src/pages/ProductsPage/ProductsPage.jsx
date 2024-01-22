import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, TitlePage, Wrap } from './ProductsPage.styled';
import { Filters } from '../../components/ProductsFilters/ProductsFilters';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { getProducts, getAllCategories } from '../../redux/auth/auth-operations';
import bg_min from '../../assets/productPage/side-view-people-training-gym.jpg';
import bg_max from '../../assets/productPage/side-view-people-training-gym@max.jpg';

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

export default function ProductPage() {
  const token = useSelector(state => state.auth.token);
  const [category, setCategory] = useState('');
  const [groupBloodNotAllowed, setGroupBloodNotAllowed] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(false);
  const [currentTotal, setCurrentTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  

  
  useEffect(() => {
    const list = document.querySelector('.custom-list');
    list.addEventListener('scroll', handlerScroll);
    return function () {
      list.removeEventListener('scroll', handlerScroll);
    };
  }, [currentTotal, products]);

  useEffect(() => {
    getAllCategories().then((r) => {
      setAllCategories(r.data);
    });

    const options = {
      params: { page, category, groupBloodNotAllowed, search },
    };

    getProducts(options)
      .then(({ data }) => {
        setProducts(data.data);
        setCurrentTotal(data.total);
        setPage(2);
      })
  }, []);
  
  useEffect(() => {
    const options = {
      params: { page, category, groupBloodNotAllowed, search },
    };
    
    if (fetching) {
      getProducts(options).then(({ data }) => {
        setProducts([...products, ...data.data]);
        setCurrentTotal(data.total);
        setPage((p) => p + 1);
      }).finally(() => setFetching(false));
    }

  }, [fetching]);
  
  
  const handlerScroll = (e) => {
    if (e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 600 && products.length < currentTotal) {
      setFetching(true);
    }
  }
  
  
  const setParams = (params) => {
    setProducts([]);
    setCategory(params.category);
    setGroupBloodNotAllowed(params.groupBloodNotAllowed);
    setSearch(params.search);
    setPage(1);
    setFetching(true);
    setCurrentTotal(0);
  };

  return (
    <Container bgi={[bg_min, bg_max]}>
      <div className='container'>
        <Wrap>
          <TitlePage>Products</TitlePage>
          <Filters
            setParams={setParams}
            initialCategory={allCategories}
            initialRecommended={initialRecommended}
            />
        </Wrap>
        
        <ProductsList products={products} isFetching={fetching} />
      </div>
    </Container>
  );
}
