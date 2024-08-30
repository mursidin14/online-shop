import ProductByCategory from "../products/ProductByCategory";
import ShopeSidebar from "../sidebars/ShopeSidebar";


export default function ShopeCategory() {
  return (
    <div className="w-full mx-3 sm:mx-auto sm:max-w-6xl my-10">
        <div className="flex justify-between">
            <div className="w-1/4">
                <ShopeSidebar />
            </div>
            <div className="w-2/3">
                <ProductByCategory />
            </div>
        </div>
    </div>
  )
}
