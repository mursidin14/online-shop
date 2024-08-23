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
        

const ProductsData = {
    getAllProducts,
    getProductByCategory
}

export default ProductsData;