import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ShoppingBagIcon, HeartIcon, UserIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink, Link } from "react-router-dom";
import { useThemeContext } from '../context/ThemeContext';
import { useUserContext } from '../context/UserContext';

const Menus = [
    {name:"Home", link:"/", current:true},
    {name:"Shop", link:"/shop", current:false},
    {name:"Aboute", link:"/aboute", current:false},
    {name:"Contact", link:"/contact", current:false}
]

export default function Navbar() {
   const { theme, toggleTheme } = useThemeContext();
   const { cart } = useUserContext();

   const getTotalQuantity = () => {
     return cart.reduce((total, item) => total + item.quantity, 0)
   }

  return (
    <Disclosure as="nav" className={`fixed top-0 left-0 right-0 ${theme === 'dark' ? "bg-dark-20" : "bg-white"} z-10 shadow-xl`}>
    <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="inset-y-0 left-0 flex items-center sm:hidden">

        <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
  
          <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
          <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
       </DisclosureButton>
      </div>
        <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="logo" />
            <p className="font-bold font-sans ml-2 text-md dark:text-white">store</p>
        </Link>
        <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-2 lg:space-x-8">
                {
                    Menus.map(item => (    
                       <NavLink 
                        key={item.name} 
                        className={({isActive}) => isActive ? "text-blue-30 font-bold text-lg" : "text-slate-900 font-mono text-lg dark:text-white"} 
                        to={`${item.link}`}
                        >
                            {item.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
        <div onClick={toggleTheme} className='flex items-center text-base text-lg font-bold'>
            {
                theme === 'dark' ?
                <button className="text-white border rounded-md py-1 px-2 ease-out duration-200">Light</button>
                :
                <button className="text-dark-20 border rounded-md py-1 px-2 ease-out duration-200">Dark</button>
            }
        </div>
        <div className="hidden sm:ml-6 sm:block">
            <div className="flex items-center space-x-2 lg:space-x-5 dark:text-white">
                <div className="cursor-pointer relative">
                    <ShoppingBagIcon className="text-current h-6" />
                    {getTotalQuantity() > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                          {getTotalQuantity()}
                        </span>
                    )}
                </div>
                <HeartIcon className="text-current h-6" />
                <UserIcon className="text-current h-6" />

                <div className="relative hidden md:block">
                    <input
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Search"
                    className="border border-gray-400 rounded-md py-2 px-2 focus:outline-none"
                />
                  <MagnifyingGlassIcon className="absolute text-gray-400 h-4 inset-y-3.5 right-3" />
                </div>
            </div>
        </div>
        </div>
        </div>
        <DisclosurePanel className="sm:hidden block">
            <div className="space-y-1 px-2 pb-3 pt-2">
                {
                    Menus.map(item => (    
                     <NavLink
                        key={item.name} 
                        className={({isActive}) => isActive ? "text-blue-30 font-bold text-lg block" : "text-slate-900 font-mono text-lg block"} 
                        to={`${item.link}`}> 
                         {item.name}
                      </NavLink>
                    ))
                }
            </div>
        </DisclosurePanel>
    </Disclosure>
  )
}
