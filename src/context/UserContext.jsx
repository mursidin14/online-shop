import { useContext, createContext, useState, useEffect } from 'react';
import ProductsData from '../services/Products';
import Categories from '../services/Categories';

export const UserStateContext = createContext();


export default function UserContextProvider({children}) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState([]);
    const [productByCategory, setProductByCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAllData = async () => {
            setLoading(true);
            try {
                // all product
                const responseProducts = await ProductsData.getAllProducts();
                setProducts(responseProducts);

                // all category
                const responseCategories = await Categories.getAllCategories();
                setCategories(responseCategories);

            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setLoading(false);
            }
        };
        getAllData();
    }, []);

    useEffect(() => {
        const getProductByCategory = async () => {
            setLoading(true);
            try {
                if(selectedCategory) {
                 const responseProductByCategory = await ProductsData.getProductByCategory(selectedCategory);
                 setProductByCategory(responseProductByCategory);
                }
            } catch (error) {
                console.error('Failed to fetch products by category:', error);
            } finally {
                setLoading(false);
            }   
        };
        getProductByCategory();
    }, [selectedCategory]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const addToCart = (product) => {
        const existIncart = cart.find((item) => item.id === product.id);

        if(existIncart) {
            setCart(cart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item))
        }else {
            setCart([...cart, {product, quantity: 1}])
        }
    }


  return (
    <UserStateContext.Provider 
        value={{ 
            products, 
            categories,
            productByCategory,
            selectedCategory,
            handleCategoryClick,
            loading,
            cart,
            addToCart,
        }}
    >
        {children}
    </UserStateContext.Provider>
  )
}

export const useUserContext = () => {
    return useContext(UserStateContext);
}

