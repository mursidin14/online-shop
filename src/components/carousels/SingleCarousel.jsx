import Slider from "react-slick";
import Category_1 from '../../assets/categories/category_1.png';
import Category_2 from '../../assets/categories/category_2.png';
import Category_3 from '../../assets/categories/category_3.png';


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

export default function SingleCarousel() {

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
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
    <Slider {...settings}>
        <div className="w-1/3">
          <img src={Category_1} alt="favorite_1" />
        </div>
        <div className="w-1/3">
          <img src={Category_2} alt="favorite_2" />
        </div>
        <div className="w-1/3">
          <img src={Category_3} alt="favorite_3" />
        </div>
      </Slider>
  )
}
