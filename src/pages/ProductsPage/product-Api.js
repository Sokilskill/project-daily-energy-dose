import axios from "axios";


export function setToken (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};



export async function getProducts(options) {
  const data = await axios.get(`/food`, options);
  return data;
}

export async function getAllCategories() {
    const data = await axios.get('/food/categories');
    return data;
}