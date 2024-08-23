import Slider from "react-slick";
import ShopImg_1 from "../../assets/shop/shop_1.png";
import ShopImg_2 from "../../assets/shop/shop_2.png";
import ShopImg_3 from "../../assets/shop/shop_3.png";
import ShopImg_4 from "../../assets/shop/shop_4.png";
import ShopImg_5 from "../../assets/shop/shop_5.png";
import ShopImg_6 from "../../assets/shop/shop_6.png";
import ShopImg_7 from "../../assets/shop/shop_7.png";
import ShopImg_8 from "../../assets/shop/shop_8.png";


function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div 
            className={className}
            style={{ ...style, background:"#AAA", borderRadius: "10px"  }}
            onClick={onClick}
        />
    )
}

export default function ShopeCarousel() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
      };

  return (
    <Slider {...settings}>

           <div>
                    <img 
                        alt="Neil image"
                        height="32"
                        src={ShopImg_1}
                        width="32"
                        className="rounded-full w-1/2 mx-aut"
                    />
           </div>
           <div>
                <img
                    alt="Neil image"
                    height="32"
                    src={ShopImg_2}
                    width="32"
                    className="rounded-full w-1/2 mx-auto"
                />
           </div>
           <div>
                <img
                    alt="Neil image"
                    height="32"
                    src={ShopImg_3}
                    width="32"
                    className="rounded-full w-1/2 mx-auto"
                />
           </div>
           <div>
                <img
                    alt="Neil image"
                    height="32"
                    src={ShopImg_4}
                    width="32"
                    className="rounded-full w-1/2 mx-auto"
                />
           </div>
           <div>
                <img
                    alt="Neil image"
                    height="32"
                    src={ShopImg_5}
                    width="32"
                    className="rounded-full w-1/2 mx-auto"
                />
           </div>
           <div>
                <img
                    alt="Neil image"
                    height="32"
                    src={ShopImg_6}
                    width="32"
                    className="rounded-full w-1/2 mx-auto"
                />
           </div>
           <div>
                <img
                    alt="Neil image"
                    height="32"
                    src={ShopImg_7}
                    width="32"
                    className="rounded-full w-1/2 mx-auto"
                />
           </div>
           <div>
                <img
                    alt="Neil image"
                    height="32"
                    src={ShopImg_8}
                    width="32"
                    className="rounded-full w-1/2 mx-auto"
                />
           </div>
    </Slider>
  )
}
