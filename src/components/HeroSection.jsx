import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Text from "../components/layout/Text";
import BannerImage1 from "../assets/products/heroBanner1.png";
import BannerImage2 from "../assets/products/heroBanner2.png";
import BannerImage3 from "../assets/products/heroBanner3.png";
import BannerImage4 from "../assets/products/banner2.jpg";

const ImageSwitcher = ({ className = "", style = {} }) => {
  const links = [
    { name: "segiempat", image: BannerImage2 },
    { name: "pashmina", image: BannerImage3 },
  ];

  return (
    <div className={`flex flex-col gap-y-4 ${className}`} style={style}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/${link.name}`}
          className="relative overflow-hidden rounded-[32px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
        >
          <img
            src={link.image}
            className="border-[3px] border-gray w-full h-auto max-w-[160px] transition-transform duration-300 ease-in-out hover:scale-110"
            alt={`Banner for ${link.name}`}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 ease-in-out" />
        </Link>
      ))}
    </div>
  );
};

const HeroSection = () => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const banners = [
    {
      image: BannerImage1,
      title: "Ansania",
      subtitle: "Ansania introducing the new hijab for everyone's comfort",
    },
    {
      image: BannerImage4,
      title: "New Collection",
      subtitle: "Discover our latest designs for modern hijabistas",
    },
  ];

  return (
    <section className="container mx-auto px-4">
      <h1 className="w-full mx-auto my-6 uppercase font-bold text-center text-gray_dark text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-rubik">
        Premium <span className="text-[#4A90E2]">Scarves</span>
      </h1>

      <div className="relative">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="relative">
              <div className="w-full rounded-[30px] lg:rounded-[48px] xl:rounded-[64px] overflow-hidden aspect-[3/2] sm:aspect-[16/9] lg:aspect-[2/1]">
                <img
                  src={banner.image}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 flex items-end ">
                <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 p-6 sm:p-8 lg:p-12 bg-opacity-70">
                  <Text
                    type="sectionHeading"
                    className="text-black leading-tight lg:leading-[1.2] font-rubik text-3xl sm:text-4xl lg:text-5xl mb-4"
                  >
                    {banner.title}
                  </Text>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-black mb-6 font-rubik">
                    {banner.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="hidden sm:block absolute px-4 sm:px-6 rounded-b-2xl py-2 sm:py-3 top-[130px] right-[-84px] transform rotate-90 lg:top-[0px] lg:left-[48px] lg:right-[auto] lg:transform-none xl:top-[166px] xl:left-[-84px] xl:transform xl:-rotate-90 bg-gray_dark z-10">
          <p className="text-white text-sm sm:text-base font-semibold font-openSans">
            Ansania Hijaber's Scarves
          </p>
        </div>

        <ImageSwitcher className="hidden lg:flex absolute bottom-8 right-8 z-20" />
      </div>
    </section>
  );
};

export default HeroSection;
