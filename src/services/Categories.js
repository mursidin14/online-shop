import { httpClient } from './api';

const getAllCategories = () =>
    httpClient
   .get('/products/categories')
   .then(response => response)
   .catch(error => error);


const CategoriesData = {
    getAllCategories
}

export default CategoriesData;