import Banner from '../../assets/banner.png';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className="bg-gradient-to-b from-blue-30 to-indigo-30 sm:mt-10">
        <div className="w-full mx-auto sm:max-w-6xl py-16">
            <div className="flex justify-center sm:justify-between items-center">
                <div className="w-5/6 sm:w-2/5 space-y-7">
                    <h1 className="text-white font-bold text-5xl font-sans leading-normal">
                        Get the Latest Dress Models From Us
                    </h1>
                    <p className="text-lg text-gray-10 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
                    </p>
                    <Link to={'/shop'}>
                        <button className="text-indigo-30 px-10 py-3 bg-white font-bold text-lg mt-4">
                            Shop Now
                        </button>
                    </Link>
                </div>
                <div className="hidden md:block w-1/5"></div>
                <div className="hidden sm:block w-2/5">
                    <img className='w-4/5' src={Banner} alt='banner' />
                </div>
            </div>
        </div>
    </div>
  )
}
