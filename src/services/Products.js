import { httpClient } from "./api";

const getAllProducts = () => 
    httpClient
        .get('/products')
        .then(response => response.data)
        .catch(error => {
            console.error('Failed to fetch products:', error);
            throw error;
        });


const ProductsData = {
    getAllProducts
}

export default ProductsData;