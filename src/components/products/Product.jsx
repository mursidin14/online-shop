import { useUserContext } from "../../context/UserContext";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import Start from "../icons/Start";

export default function Product() {

    const { products, selectedCategory, productByCategory } = useUserContext()

  return (
    <div className="w-full sm:max-w-6xl mx-auto flex justify-center">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {
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
              <p className="text-sm">{product.description}</p>
              <Start span={"5.0"} />
        </Card>
        </Link>
                ))
            }
        </div>
    </div>
  )
}
