import { httpClient } from "./api";

const getCartById = () => 
    httpClient
    .get(`/carts/10`)
    .then((response) => response.data)
    .catch((error) => {
        console.error('Failed fetch products in cart:', error);
        throw error;
    })

const postProductToCard = (data) => 
    httpClient
    .post('/carts', {
            userId: 10,
            date: new Date().toISOString().slice(0, 10),
            products: data.map(item => ({
                productId: item.id,
                quantity: 1,
            }))
    })
    .then((response) => response.data)
    .catch(error => {
        console.error('Failed add product to cart:', error);
        throw error;
    });


const CartData = {
    getCartById,
    postProductToCard
}

export default CartData;