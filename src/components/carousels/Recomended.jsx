import Slider from "react-slick";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import Start from "../icons/Start";
import Img_1 from "../../assets/recomended/recomend_1.png";
import Img_2 from "../../assets/recomended/recomend_2.png";
import Img_3 from "../../assets/recomended/recomend_3.png";
import Img_4 from "../../assets/recomended/recomend_4.png";


const Recomends = [
    {id:1, title:"Smart T-Shirt", src:`${Img_1}`, alt:"recomed_1"},
    {id:2, title:"Smart T-Shirt", src:`${Img_2}`, alt:"recomed_2"},
    {id:3, title:"Smart T-Shirt", src:`${Img_3}`, alt:"recomed_3"},
    {id:4, title:"Smart T-Shirt", src:`${Img_4}`, alt:"recomed_4"}
]

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

export default function Recomended() {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Slider {...settings}>
        {
            Recomends.map(item => (
                <Card
                    key={item.id}
                    className="max-w-64"
                    imgAlt={item.alt}
                    imgSrc={item.src}
                >
                    <Link to="#">
                        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                            {item.title}
                        </h5>
                    </Link>
                    <Start span={"5.0"} />
                </Card>
            ))
        }
    </Slider>
  )
}
