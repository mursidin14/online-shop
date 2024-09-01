import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useUserContext } from "../../context/UserContext";

export default function ShopeSidebar() {
  const { categories, selectedCategory, handleCategoryClick } = useUserContext();


  return (
    <div aria-label="Product categories" className="space-y-0 my-10">
      {categories.map((category, index) => (
        <div
          key={index} 
          onClick={() => handleCategoryClick(category)} 
          className={`group relative flex cursor-pointer rounded-lg py-4 px-5 shadow-md transition focus:outline-none ${selectedCategory === category ? 'bg-blue-30' : 'bg-white/5'}`}
        >
          <div className="flex w-full items-center justify-between">
            <div className="text-sm/6">
              <p className={`font-semibold transition ${selectedCategory === category ? 'text-white' : 'text-dark-10'} dark:text-white`}>
                {category}
              </p>
            </div>
            <CheckCircleIcon className={`size-6 fill-white transition ${selectedCategory === category ? 'opacity-100' : 'opacity-0'} bg-blue-30`} />
          </div>
        </div>
      ))}
    </div>
  );
}
