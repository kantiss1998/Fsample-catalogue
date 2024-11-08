import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "./layout/Button";


const ProductCardSubName = ({
  className = "",
  name,
  subName,
  image,
  imageClassName = "",
  id
}) => {
  return (
    <div className={`relative flex flex-col flex-wrap gap-y-4 ${className}`}>

      <div
        className={`relative overflow-auto border-[8px] w-full border-white rounded-[28px] h-[56vw] sm:h-[36vw] lg:h-[26vw] ${imageClassName}`}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-center uppercase text-[3.4vw] sm:text-[2.3vw] md:text-[2.1vw] leading-[initial] lg:text-[18px] lg:leading-[26px]  xl:text-[22px] xl:leading-[28.44px] xxl:text-[24px] font-semibold text-gray_dark">
        {name} {subName}
      </h3>
      <Link to={`/${subName}/${name}/${id}`}>
        <Button className="bg-gray_dark hover:bg-gray-700 text-white transform hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-gray-600 transition-all duration-300">
          View product
        </Button>
      </Link>
    </div>
  );
};

export default ProductCardSubName;
