import { httpClient } from "./api";

const getAllProducts = () => 
    httpClient
        .get('/products')
        .then(response => response.data)
        .catch(error => {
            console.error('Failed to fetch products:', error);
            throw error;
        });

const getProductByCategory = (slug) =>
     httpClient
     .get(`/products/category/${slug}`)
     .then(response => response.data)
     .catch(error => {
        console.error('Failed to fetch productsByCategory:', error);
        throw error;
    });

const getProductById = (id) =>
    httpClient
    .get(`/products/${id}`)
    .then(response => response.data)
    .catch(error => {
        console.error('Fieled to fetch productById:', error);
        throw error;
    })
        

const ProductsData = {
    getAllProducts,
    getProductByCategory,
    getProductById
}

export default ProductsData;