import BannerAbout from '../../assets/banners/about_banner.png';
import { Breadcrumb } from 'flowbite-react';

export default function AboutBanner() {
  return (
    <div className="bg-gradient-to-b from-blue-30 to-indigo-30 sm:mt-10">
        <div className="w-full mx-auto sm:max-w-6xl py-16">
            <Breadcrumb className="mb-5">
                <Breadcrumb.Item href="/">
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item>About</Breadcrumb.Item>
            </Breadcrumb>
            <div className="flex justify-center sm:justify-between items-center">
                <div className="w-5/6 sm:w-2/5 space-y-7">
                    <h1 className="text-white font-bold text-5xl font-sans leading-normal">
                        About
                    </h1>
                    <p className="text-lg text-gray-10 dark:text-white text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
                    </p>
                </div>
                <div className="hidden sm:block w-2/5">
                    <img className='w-4/5' src={BannerAbout} alt='banner' />
                </div>
            </div>
        </div>
    </div>
  )
}
