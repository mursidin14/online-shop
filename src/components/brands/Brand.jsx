import Brands_1 from '../../assets/brands/brand_1.svg';
import Brands_2 from '../../assets/brands/brand_2.svg';
import Brands_3 from '../../assets/brands/brand_3.svg';
import Brands_4 from '../../assets/brands/brand_4.svg';
import Brands_5 from '../../assets/brands/brand_5.svg';

export default function Brand() {
  return (
    <div className="bg-gradient-to-b from-gray-30 to-gray-20">
        <div className="flex justify-center items-center space-x-6 flex-wrap">
            <img className='p-4' src={Brands_1} alt='brand_1' />
            <img className='p-4' src={Brands_2} alt='brand_2' />
            <img className='p-4' src={Brands_3} alt='brand_3' />
            <img className='p-4' src={Brands_4} alt='brand_4' />
            <img className='p-4' src={Brands_5} alt='brand_5' />
        </div>
    </div>
  )
}
