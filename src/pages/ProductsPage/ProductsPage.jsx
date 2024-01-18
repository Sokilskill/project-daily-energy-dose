import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, TitlePage } from './ProductsPage.styled';
import { Filters } from '../../components/ProductsFilters/ProductsFilters';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import {
  getAllCategories,
  getProducts,
  setToken,
} from './product-Api';





export default function ProductPage() {
  const token = useSelector(state => state.auth.token);
  const [category, setCategory] = useState('');
  const [groupBloodNotAllowed, setGroupBloodNotAllowed] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [currentTotal, setCurrentTotal] = useState(0);
  const [products, setProducts] = useState([]);
  
  setToken(token);

  useEffect(() => {
    const list = document.querySelector('.custom-list');
    list.addEventListener('scroll', handlerScroll);
    return function () {
      list.removeEventListener('scroll', handlerScroll);
    }
  }, []);

  
  
  useEffect(() => {
    const options = {
      params: { page, category, groupBloodNotAllowed, search },
    };
    if (fetching) {
      getProducts(options).then(({data}) => {
        setProducts([...products, ...data.data]);
        setPage((prev) => prev + 1);
        setCurrentTotal(data.total);
      }).finally(() => setFetching(false));
    }

  }, [fetching]);
  
  
  const handlerScroll = (e) => {
    if (
      e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 600 &&
      products.length < currentTotal
    ) {
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
    <Container>
      <TitlePage>Products</TitlePage>
      <Filters
        setParams={setParams}
      />
      <ProductsList products={products} />
    </Container>
  );
}
