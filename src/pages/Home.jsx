import Index from "../components/banners/Index";
import Brand from "../components/brands/Brand";
import Category from "../components/categories/Category";
import Product from "../components/products/Product";
import Favorites from "../components/products/Favorites";


export default function Home() {
  return (
    <>
        <Index />
        <Brand />
        <Category />
        <div className="space-y-12">
          <h2 className="text-black-1 font-bold text-5xl font-sans text-center">
            Our Best Seller Product
          </h2>
          <Product />
        </div>
        <Favorites />
    </>
  )
}
