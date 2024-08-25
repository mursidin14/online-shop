import ShopBanner from "../components/banners/ShopBanner"
import Recomended from "../components/carousels/Recomended"
import ShopeCategory from "../components/categories/ShopeCategory"

export default function Shop() {
  return (
    <>
      <ShopBanner />
      <ShopeCategory />
      <div className="max-w-6xl mx-auto space-y-10 my-10">
          <h3 className="text-5xl text-center">Recommend Product</h3>
          <Recomended />
      </div>
    </>
  )
}
