import { useUserContext } from "../../context/UserContext";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import FullStart from "../icons/FullStart";
import HalfStart from "../icons/HalfStart";
import EmptyStart from "../icons/EmptyStart";
import LoadProducts from "../loads/LoadProducts";

export default function Product() {

    const { selectedCategory, productByCategory, products, loading } = useUserContext()

    const renderStart = (rating) => {
      const fullStart = Math.floor(rating);
      const halfStart = rating % 1 !== 0;
      const starts = [];

      for(let i = 0; i < fullStart; i++){
        starts.push(<FullStart />)
      }

      if(halfStart) {
        starts.push(<HalfStart />)
      }

      const emptyStart = 5 - starts.length;
      for(let i = 0; i < emptyStart; i++){
        starts.push(<EmptyStart />)
      }

      return starts;
    }

  return (
    <div className="w-full sm:max-w-6xl mx-auto flex justify-center">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {
          loading ? Array.from({length: 4}).map((_, i) => ( <LoadProducts key={i} /> )) :
          products.length <= 0 ?
          <h2 className="h-screen text-3xl italic">Data Empty...</h2> :
             (selectedCategory ? productByCategory : products).map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
            <Card
                className="max-w-64"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={product.image}
              >
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
                  <small className="text-sm text-gray-400">{`stock (${product.rating.count})`}</small>
                </div>
              </div>
        </Card>
        </Link>
                ))
            }
        </div>
    </div>
  )
}
