import ShopeCarousel from "../carousels/ShopeCarousel";


export default function ShopBanner() {
  return (
      <div className="z-0 pt-44">
        <div className="bg-gradient-to-b from-blue-30 to-indigo-30">
            <div className="w-full mx-auto sm:max-w-6xl">
                <div className="flex flex-wrap justify-beetween h-80 pt-3"> 
                  <div className="w-2/3 lg:w-1/3 absolute top-32 sm:top-36 right-10">      
                      <ShopeCarousel />
                   </div>
                  <div className="w-1/2 mx-3">
                    <h1 className="font-bold text-white text-5xl">Shop</h1>
                  </div>
                </div>
            </div>
        </div>
     </div>
  )
}
