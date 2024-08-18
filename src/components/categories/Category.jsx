// import { useUserContext } from "../../context/UserContext"
// import { useEffect, useState } from 'react';
// import Categories from '../../services/Categories'
import { Link } from 'react-router-dom';

export default function Category() {
   
    const categories = [
        {name: "electronics"},
        {name: "jewelery"},
        {name: "men's clothing"},
        {name: "women's clothing"}
        
    ]



  return (
    <div className="mx-auto max-w-6xl py-16">
        <div className="flex justify-between items-center">
            <div className="w-5/6 sm:w-2/5 space-y-4">
                <h1 className="text-black-1 font-bold text-5xl font-sans">
                    Category Style
                </h1>
                <p className="text-gray-1 text-base text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
                </p>
            </div>
            <div className="hidden sm:block sm:w-2/4">
                <div className="flex flex-wrap items-center justify-start">
                    {
                        categories.map(category => (
                            <Link key={category.name} to={`#`} className="border border-gray-3 rounded mx-auto my-16 text-center py-1 w-40 text-base font-bold">{category.name}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
