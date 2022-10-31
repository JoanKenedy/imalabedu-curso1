import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/docente.css";
import Teacher from "../img/teacher.png";
import Img1 from "../img/armando.png";
import Img2 from "../img/jennifer.png";
import Img3 from "../img/adrian.png";
import Img4 from "../img/carlos.png";

const Docente = () => {
  const slides = [
    {
      id: 1,
      img: Img1,
    },
    {
      id: 2,
      img: Img2,
    },
    {
      id: 3,
      img: Img3,
    },
    {
      id: 4,
      img: Img4,
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 4,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <div className="container-docente">
      <div className="title-docente">
        <p>Docentes</p>
      </div>
      <div className="container-img">
        <img src={Teacher} alt="" />
      </div>
      <div className="container-slider">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div className="card" key={index}>
              <img src={slide.img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Docente;
