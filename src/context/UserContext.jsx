import { useContext, createContext, useState, useEffect } from 'react';
import ProductsData from '../services/Products';

export const UserStateContext = createContext();


export default function UserContextProvider({children}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getAllData = async () => {
            try {
                const responseProduct = await ProductsData.getAllProducts();
                setProducts(responseProduct);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };
        getAllData();
    }, []);

  return (
    <UserStateContext.Provider value={{ products }}>
        {children}
    </UserStateContext.Provider>
  )
}

export const useUserContext = () => {
    return useContext(UserStateContext);
}

