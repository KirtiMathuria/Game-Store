import React from "react";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import bannerData from "../Data/bannerData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 z-50 cursor-pointer -translate-y-1/2"
    onClick={onClick}
  >
    <AiOutlineArrowLeft size={40} color="white" />
  </div>
);


const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 z-50 cursor-pointer -translate-y-1/2"
    onClick={onClick}
  >
    <AiOutlineArrowRight size={40} color="white" />
  </div>
);

const Carousel = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {bannerData.map((item) => (
          <div key={item.id}>
            <div
              className="h-[500px] flex items-center justify-center text-white"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-black/50 p-8 rounded-md text-center max-w-xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {item.title}
                </h1>
                <p className="mb-6 text-gray-200">{item.description}</p>
                <button
                  className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-md transition"
                  onClick={() => navigate("/games")}
                >
                  Shop Now
                </button>
              </div> 
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
