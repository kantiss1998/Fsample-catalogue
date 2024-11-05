import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

// Components
import Text from "../components/layout/Text";
import Container from "../components/layout/Container";

// Icons and Images
import RedirectIcon from "../assets/icons/arrowTopRight.svg";
import Polos from "../assets/products/polos.jpg";
import Motif from "../assets/products/motif.jpg";
import { Link } from "react-router-dom";

const CategoryCard = ({ category, index }) => {
  return (
    <div
      className={`
        relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[16/9] 
        overflow-hidden rounded-3xl 
        ${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
        group
      `}
    >
      <img
        src={category.image}
        alt={category.name}
        className="
          object-cover w-full h-full
          transition-transform duration-300 ease-in-out
          group-hover:scale-110 group-hover:brightness-110
        "
      />
      <div
        className="
        absolute inset-0 flex flex-col justify-end p-4 md:p-6 
        bg-gradient-to-t from-black/60 to-transparent
        transition-opacity duration-300 ease-in-out
        group-hover:opacity-90
      "
      >
        <h4
          className="
          text-white text-xl md:text-2xl lg:text-3xl 
          font-semibold uppercase font-rubik mb-2
          transform transition-transform duration-300 ease-in-out
          group-hover:translate-y-[-4px]
        "
        >
          {category.name}
        </h4>
        <Link
          to={`/${category.url}`}
          className="
          w-10 h-10 md:w-12 md:h-12 rounded-full 
          flex justify-center items-center 
          bg-white/20 hover:bg-white/30 
          transition-all duration-300 ease-in-out
          group-hover:scale-110
        "
        >
          <img
            src={RedirectIcon}
            width={24}
            height={24}
            alt={`Checkout ${category.name}`}
            className="w-6 h-6 md:w-8 md:h-8"
          />
        </Link>
      </div>
    </div>
  );
};

const CategoriesSection = ({ className }) => {
  const categoriesInfo = [
    {
      image: Motif,
      name: "Hijab Pashmina",
      url: "pashmina",
    },
    {
      image: Polos,
      name: "Hijab Segi Empat",
      url: "segiempat",
    },
  ];

  return (
    <section
      id="product-categories-section"
      className={`bg-gray-900 ${className ?? ""}`}
    >
      <Container>
        <Text
          type="sectionHeading"
          className="text-Black leading-tight font-rubik text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 text-center"
        >
          Categories
        </Text>

        <Splide
          options={{
            perPage: 2,
            perMove: 1,
            arrows: false,
            gap: "1rem",
            breakpoints: {
              640: {
                perPage: 1,
              },
              768: {
                perPage: 2,
              },
            },
          }}
        >
          {categoriesInfo?.map((category, index) => (
            <SplideSlide key={index}>
              <CategoryCard category={category} index={index} />
            </SplideSlide>
          ))}
        </Splide>
      </Container>
    </section>
  );
};

export default CategoriesSection;
