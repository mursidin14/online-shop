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
            <Card
                key={product.id}
                className="max-w-64"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={product.image}
              >
                <Link to="#">
                    <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product.title}
                    </h5>
                </Link>
                <Start span={"5.0"} />
        </Card>
                ))
            }
        </div>
    </div>
  )
}
