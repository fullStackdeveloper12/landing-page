import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageGallery = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesPerRow: 1,
    rows: 2,
    swipeToSlide: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 700,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="image-container mx-2 relative">
          <img
            src="anandas_petpark_01.webp"
            alt="img 1"
            className="rounded-xl"
          />
          <h3 className="absolute bottom-5 left-5 bg-black text-white p-2 rounded-xl">
            Pet Park
          </h3>
        </div>
        <div className="image-container mx-2 relative">
          <img
            src="anandas_multihall_01.webp"
            alt="img 2"
            className="rounded-xl"
          />
          <h3 className="absolute bottom-5 left-5 bg-black text-white p-2 rounded-xl">
            Multi Purpose Hall
          </h3>
        </div>
        <div className="image-container mx-2 relative">
          <img src="anandas_salon_01.webp" alt="img 3" className="rounded-xl" />
          <h3 className="absolute bottom-5 left-5 bg-black text-white p-2 rounded-xl">
            Salon & Spa
          </h3>
        </div>
        <div className="image-container mx-2 relative">
          <img
            src="anandas_pharmacy_01.webp"
            alt="img 4"
            className="rounded-xl"
          />
          <h3 className="absolute bottom-5 left-5 bg-black text-white p-2 rounded-xl">
            Pharmacy
          </h3>
        </div>
        <div className="image-container mx-2 relative">
          <img
            src="anandas_skatting_01.webp"
            alt="img 5"
            className="rounded-xl"
          />
          <h3 className="absolute bottom-5 left-5 bg-black text-white p-2 rounded-xl">
            Skatting Rink
          </h3>
        </div>
        <div className="image-container mx-2 relative">
          <img
            src="anandas_swmming_01.webp"
            alt="img 6"
            className="rounded-xl"
          />
          <h3 className="absolute bottom-5 left-5 bg-black text-white p-2 rounded-xl">
            Swimming Pool
          </h3>
        </div>
        <div className="image-container mx-2 relative">
          <img
            src="anandas_jogging_01.webp"
            alt="img 7"
            className="rounded-xl"
          />
          <h3 className="absolute bottom-5 left-5 bg-black text-white p-2 rounded-xl">
            Jogging
          </h3>
        </div>
        <div className="image-container mx-2 relative">
          <img
            src="anandas_creche_01.webp"
            alt="img 8"
            className="rounded-xl"
          />
          <h3 className="absolute bottom-5 left-5 bg-black text-white p-2 rounded-xl">
            Creche
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default ImageGallery;
