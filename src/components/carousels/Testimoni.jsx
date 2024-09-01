import Slider from "react-slick";
import { Card } from "flowbite-react";
import Start from "../icons/Start";
import TestimoniImg from '../../assets/testimonials/testi_1.png'


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

export default function Testimoni() {

    const profile = [
        {name: "Friskidia", client: "client"},
        {name: "Friskidia", client: "client"},
        {name: "Friskidia", client: "client"}
    ]

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        focusOnSelect: true,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
        ]
      };

  return (
    <Slider {...settings} className="m-5">
        {
            profile.map(item => (
                <div key={item} className="mx-2">
                <Card className="w-5/6 mx-auto">
                <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                    <img
                        alt="Neil image"
                        height="32"
                        src={TestimoniImg}
                        width="32"
                        className="rounded-full"
                    />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-base font-bold">{item.name}</p>
                        <p className="text-xs text-gray-30 dark:text-white">{item.client}</p>
                    </div>
                </div>
                <Start />
                <p className="text-lg text-gray-40 dark:text-white">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus.“ </p>
           </Card>
                </div>
            ))
        }
    </Slider>
  )
}
