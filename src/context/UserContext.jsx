import { useContext, createContext, useState, useEffect } from 'react';
import ProductsData from '../services/Products';
import Categories from '../services/Categories';

export const UserStateContext = createContext();


export default function UserContextProvider({children}) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productByCategory, setProductByCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const getAllData = async () => {
            try {
                // all product
                const responseProducts = await ProductsData.getAllProducts();
                setProducts(responseProducts);

                // all category
                const responseCategories = await Categories.getAllCategories();
                setCategories(responseCategories);

            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };
        getAllData();
    }, []);

    useEffect(() => {
        const getProductByCategory = async () => {
            try {
                if (selectedCategory) {
                    const responseProductByCategory = await ProductsData.getProductByCategory(selectedCategory);
                    setProductByCategory(responseProductByCategory);
                }
            } catch (error) {
                console.error('Failed to fetch products by category:', error);
            }
        };
        getProductByCategory();
    }, [selectedCategory]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };


  return (
    <UserStateContext.Provider 
        value={{ 
            products, 
            categories,
            productByCategory,
            selectedCategory,
            handleCategoryClick,
        }}
    >
        {children}
    </UserStateContext.Provider>
  )
}

export const useUserContext = () => {
    return useContext(UserStateContext);
}

