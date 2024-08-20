import Index from "../components/banners/Index";
import Brand from "../components/brands/Brand";
import Category from "../components/categories/Category";
import Product from "../components/products/Product";
import Favorites from "../components/products/Favorites";
import Testimoni from "../components/carousels/Testimoni";
import ImgModel from '../assets/model.png';


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
        <div className="mx-auto w-5/6 sm:max-w-6xl">
          <Testimoni />
        </div>
        <div className="mx-auto w-5/6 sm:max-w-6xl my-5">
           <div className="grid grid-cols-1 sm:grid-cols-2 items-center space-y-14">
              <div className="space-y-5">
                <h1 className="font-bold text-5xl">Look For Models Now</h1>
                <p className="text-base text-gray-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
                <button className="text-white px-10 py-3 font-bold text-lg bg-gradient-to-b from-blue-30 to-indigo-30">
                       Login Now
                   </button>
              </div>
              <div className="mx-auto sm:w-2/3">
                  <img src={ImgModel} alt="model" />
              </div>
           </div>
        </div>
    </>
  )
}
