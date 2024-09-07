import SinggleFavorite from "../carousels/SinggleFavorite";
import Start from "../icons/Start";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Favorites() {

  const [isSize, setIsSize] = useState(false);
  const size = ["S", "M", "L", "XL"];

  const handleClick = (index) => {
    setIsSize(index);
  }

  return (
    <div className="bg-gradient-to-b from-blue-30 to-indigo-30 sm:mt-10">
        <div className="w-full mx-auto sm:max-w-6xl py-16">
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                    <div className="w-3/4 sm:w-1/2 mx-auto">
                       <SinggleFavorite />
                    </div>
                    <div className="mx-auto space-y-4 w-3/4">
                        <h1 className="text-white font-bold text-5xl">The Oblongers T-Shirt</h1>
                        <div className="flex flex-wrap justify-between items-center">
                          <div>
                            <p className="text-lg text-white font-bold">Color</p>
                            <div className="space-x-2">
                                <input type="radio" className="bg-black" />
                                <input type="radio" className="bg-white" />
                                <input type="radio" className="bg-gray-100" />
                            </div>
                          </div>
                          <Start span={"5.0"} />
                       </div>
                       <div className="flex items-center justify-between">
                          <>
                            <p className="text-lg text-white font-bold">Size</p>
                            <div className="flex space-x-2">
                                {
                                  size.map((item, index) => {
                                    <p key={index} onClick={() => handleClick(index)} className={`${isSize === index ? "text-blue-50" : ""} text-lg font-bold p-3 rounded bg-white`}>{item}</p>
                                  })
                                }
                            </div>
                          </>
                          <h3 className="text-white font-bold text-4xl">50$</h3>
                       </div>
                       <p className="text-base text-gray-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor dolor augue et lectus. Proin et lacus blandit quam semper placerat. </p>
                       <Link to={'/shop'}>
                        <button className="text-indigo-30 dark:bg-dark-20 px-10 py-3 bg-white font-bold text-lg mt-3">
                            Shop Now
                        </button>
                       </Link>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}
