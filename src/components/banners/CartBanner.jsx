import { Breadcrumb } from "flowbite-react";

export default function CartBanner() {
  return (
    <div className="bg-gradient-to-b from-blue-30 to-indigo-30 min-h-96 sm:mt-10">
        <div className="w-full mx-auto sm:max-w-6xl py-16">
            <Breadcrumb className="mb-5">
                <Breadcrumb.Item href="/">
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item>Cart</Breadcrumb.Item>
            </Breadcrumb>
            <div className="flex justify-center sm:justify-between items-center pb-16">
                <div className="w-5/6 sm:w-2/5 space-y-7 mx-3">
                    <h1 className="text-white font-bold text-5xl font-sans leading-normal">
                        Cart
                    </h1>
                    <p className="text-lg text-gray-10 dark:text-white text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
