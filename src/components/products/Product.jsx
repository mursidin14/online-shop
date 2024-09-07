import { useUserContext } from "../../context/UserContext";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import FullStart from "../icons/FullStart";
import HalfStart from "../icons/HalfStart";
import LoadProducts from "../loads/LoadProducts";
import EmptyStart from "../icons/EmptyStart";

export default function Product() {

    const { products, loading, addToCart } = useUserContext();
  

    // rating function
    const renderStart = (rating) => {
      const fullStart = Math.floor(rating);
      const halfStart = rating % 1 !== 0;
      const Start = [];

      for(let i = 0; i < fullStart; i++){
        Start.push(<FullStart key={i} />);
      }

      if(halfStart){
        Start.push(<HalfStart key="half" />)
      }

      const emptyStars = 5 - Start.length;
      for(let i = 0; i < emptyStars; i++){
        Start.push(<EmptyStart key={i} />)
      }

      return Start;
    }

  return (
    <div className="w-full sm:max-w-6xl mx-auto flex justify-center">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {
          loading ? Array.from({length: 8}).map((_, i) => ( <LoadProducts key={i} /> )) :
            products.length <= 0 ?
              <h2 className="h-screen text-3xl italic">Data Empty...</h2>
            :
           products.map((product) =>  (
             <Card
             key={product.id}
             className="max-w-64"
             imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
             imgSrc={product.image}
             >
             <Link to={`/products/${product.id}`}>
              <div className="flex justify-between">
                  <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.title}
                  </h5>
                  <h5 className="text-sm font-semibold">
                      {product.price}
                  </h5>
              </div>
              <p className="text-sm">{`${product.description ? product.description.substring(0, 100) + "..." : product.description}`}</p>
              <div className="mt-2 flex items-center">
                  {renderStart(product.rating.rate)}
                  <div className="flex justify-end w-full">
                    <small className="text-gray-400 text-sm">{`stock (${product.rating.count})`}</small>
                  </div>
              </div>
              </Link>
              <button className="w-full bg-gradient-to-b to-blue-30 from-indigo-30 p-2 rounded" onClick={()=> addToCart(product)}>Add_to_cart</button>
        </Card>
              
            ))
         }
        </div>
    </div>
  )
}
