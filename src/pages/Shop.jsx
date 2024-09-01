import ShopBanner from "../components/banners/ShopBanner"
import Recomended from "../components/carousels/Recomended"
import ShopeCategory from "../components/categories/ShopeCategory"

export default function Shop() {
  return (
    <div className="dark:bg-dark-20 dark:text-white">
      <ShopBanner />
      <ShopeCategory />
      <div className="w-1/2 sm:w-5/6 mx-auto space-y-10 py-10">
          <h3 className="text-5xl text-center">Recommend Product</h3>
          <Recomended />
      </div>
    </div>
  )
}
