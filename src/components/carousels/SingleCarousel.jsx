import Slider from "react-slick";


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
    <Slider {...settings}>
        <div className="w-1/2">
          <h3 className="border border-gray-3 rounded mx-auto my-16 text-center py-1 w-40 text-base font-bold">Electronics</h3>
        </div>
        <div>
          <h3 className="border border-gray-3 rounded mx-auto my-16 text-center py-1 w-40 text-base font-bold">jewelery</h3>
        </div>
        <div>
          <h3 className="border border-gray-3 rounded mx-auto my-16 text-center py-1 w-40 text-base font-bold">mens clothing</h3>
        </div>
        <div>
          <h3 className="border border-gray-3 rounded mx-auto my-16 text-center py-1 w-40 text-base font-bold">womens clothing</h3>
        </div>
      </Slider>
  )
}
