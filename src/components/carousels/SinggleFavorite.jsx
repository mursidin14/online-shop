import Slider from "react-slick";
import Favorite_1 from "../../assets/favorites/favorite_1.png";
import Favorite_2 from "../../assets/favorites/favorite_2.png";
import Favorite_3 from "../../assets/favorites/favorite_3.png";


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

export default function SinggleFavorite() {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        focusOnSelect: true,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
      };

  return (
    <Slider {...settings}>
        <div className="w-1/3">
          <img className="z-0" src={Favorite_1} alt="favorite_1" />
        </div>
        <div>
            <img src={Favorite_2} alt="favorite_2" />
        </div>
        <div>
            <img src={Favorite_3} alt="favorite_3" />
        </div>
      </Slider>
  )
}
