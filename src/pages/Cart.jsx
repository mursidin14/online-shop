import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import CartBanner from "../components/banners/CartBanner";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Cart() {
  return (
    <div className="dark:bg-dark-20 dark:text-white">
        <CartBanner />
        <div className="max-w-6xl mx-2 sm:mx-auto">
            <h2 className="text-3xl">Cart Product</h2>
            <div className="flex justify-between py-5 space-x-4 sm:space-x-7">
                <div className="w-full">
                    <div className="bg-gray-50 dark:bg-dark-20 dark:border">
                        <div className="w-5/6 mx-auto sm:flex justify-between py-5">
                            <img src="" alt="product" />
                            <div className="flex-2">
                                <h3 className="text-2xl font-bold">Smart T-shirt</h3>
                                <small className="text-gray-30">color white</small>
                            </div>
                            <div className="flex-3">
                                <h3 className="text-2xl font-bold">$40 USD</h3>
                                <small className="text-gray-30">price</small>
                            </div>
                            <div className="flex-4">
                                <h3 className="text-2xl font-bold">1305</h3>
                                <small className="text-gray-30">In Stock</small>
                            </div>
                            <TrashIcon className="h-6" />
                        </div>
                        <div className="w-5/6 flex justify-between mx-auto pb-5">
                            <Disclosure as="div" className="p-6 hidden sm:block" defaultOpen={true}>
                                <DisclosureButton className="group flex items-center justify-between">
                                    <span className="text-sm/6 font-medium text-blue-30 group-data-[hover]:text-blue-300">
                                    What is your refund policy?
                                    </span>
                                    <ChevronDownIcon className="size-5 fill-blue-30 group-data-[hover]:fill-blue-300 group-data-[open]:rotate-180" />
                                </DisclosureButton>
                                    <DisclosurePanel className="mt-2 text-sm/5 text-gray-30">
                                        If youre unhappy with your purchase, well refund you in full.
                                    </DisclosurePanel>
                            </Disclosure>
                            <div className="bg-white dark:bg-dark-20 dark:border max-w-32 flex items-center space-x-3 px-2 max-h-10 mt-5">
                                 <MinusIcon className="h-6" />
                                 <spam>1</spam>
                                 <PlusIcon className="h-6" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 sm:w-1/3 bg-gray-50 mx-auto p-3 max-h-56 dark:bg-dark-20 dark:border">
                    <div className="flex justify-between">
                        <div className="flex-1">
                            <h4 className="text-lg font-bold">Subtotal</h4>
                            <small className="text-gray-30">4 product</small>
                        </div>
                        <p className="text-gray-30 text-base">$160 USD</p>
                    </div>
                    <hr className="my-5 bg-gray-30" />
                    <div className="flex justify-between my-2">
                         <h4 className="text-lg font-bold">Total</h4>
                         <p className="text-gray-30 text-base">$160 USD</p>
                    </div>
                    <div className="flex mt-10 sm:mt-0 justify-center sm:justify-end">
                        <button className="row-end-12 bg-gradient-to-b to-blue-30 from-indigo-30 text-white py-1 px-5 rounded-md font-bold">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
