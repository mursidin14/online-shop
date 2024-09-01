import { useState, useEffect } from "react";
import Start from "../components/icons/Start";
import BasketImg from "../assets/icons/basket.svg";
import { MinusIcon, PlusIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useLocation, useParams } from "react-router-dom";
import ProductsData from "../services/Products";
import { Card, Breadcrumb } from "flowbite-react";
import LoadProductDetail from "../components/loads/LoadProductDetail";


export default function DetailProduct() {

 const [isSize, setIsSize] = useState(false);
 const [qty, setQty] = useState(1);
 const size = ["S", "M", "L", "XL"];
 const [productById, setProductById] = useState();
 const { id } = useParams();
 const { location } = useLocation();

 const handleClickSize = (i) => {
    setIsSize(i);
 }

 const handleMinusQty = () => {
    if(qty <= 1) {
        return setQty(1);
    }
    setQty(qty => qty - 1);
 }

 const handlePlusQty = () => {
    setQty(qty => qty + 1)
 }

// get productById
useEffect(() => {
    const getProductById = async(id) => {
        try {
            const response = await ProductsData.getProductById(id);
            setProductById(response);
        } catch (error) {
            console.log('Failed fecth product by id:', error);
        }
    }
    getProductById(id);
    window.scrollTo(0, 0)
}, [location, id])

  return (
    <div className="w-full dark:bg-dark-20 dark:text-white">
        <div className="max-w-6xl mx-auto py-28">
            <Breadcrumb className="mb-5">
                <Breadcrumb.Item href="/">
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/shop">Shop</Breadcrumb.Item>
                <Breadcrumb.Item>Product Detail</Breadcrumb.Item>
            </Breadcrumb>
            {
            productById ? (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mx-auto">
            <div className="space-y-10 mx-auto">
                    <h2 className="text-5xl font-sans">Product Detail</h2>
                    
                            <Card
                                className="max-w-64"
                                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                                imgSrc={productById.image}
                                >
                                </Card>
                    
                </div>
                <div className="mx-3 sm:mx-0 space-y-5 mt-10 sm:mt-20">
                    <h3 className="text-5xl font-bold">{productById.title}</h3>
                    <p className="text-gray-30 dark:text-white text-base">{productById.description}</p>
                    <Start span={'(2k)'} />
                    <div className="flex justify-between">
                        <div className="space-x-2">
                            <input type="radio" className="bg-black" />
                            <input type="radio" className="bg-white" />
                            <input type="radio" className="bg-green-500" />
                        </div>
                        <div className="space-x-2 text-base text-gray-30">
                            <span>{'(1234)'}</span>
                            <img src={BasketImg} alt="basket_icon" />
                        </div>
                    </div>
                        <div className="space-y-3">
                            <h4 className="font-bold text-lg">Size</h4>
                            <div className="flex">
                                {
                                    size.map((item, i) => (
                                        <p key={i} onClick={() => handleClickSize(i)} className={`${isSize === i ? "text-white bg-blue-30" : "bg-gray-20 dark:bg-dark-20"} text-lg font-bold px-2 rounded-full border cursor-pointer mr-4`}>
                                            {item}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex justify-between mx-3 sm:mx-auto">
                        <div className="space-y-3">
                            <h3 className="text-lg font-bold">Quantity</h3>
                            <div className="flex items-center border p-3 space-x-3">
                                <MinusIcon onClick={handleMinusQty} className={`h-5 ${qty===1?"disabled:opacity-75":""}`} />
                                <span>{qty}</span>
                                <PlusIcon onClick={handlePlusQty} className="h-5" />
                            </div>
                        </div>
                        <p className="text-5xl font-bold mt-10">{productById.price * qty}</p>
                    </div>
                    <div className="flex justify-between space-x-3">
                        <button className="w-full text-center p-2 bg-gradient-to-b from-blue-30 to-indigo-30 text-white font-bold text-lg">Checkout</button>
                        <button className="max-w-20 text-center p-2 bg-gradient-to-b from-blue-30 to-indigo-30 text-white font-bold text-l">
                            <ShoppingBagIcon className="text-current h-6" />
                        </button>
                    </div>
                </div>
            </div>
            ) : <LoadProductDetail />
        }
        </div>
    </div>
  )
}
