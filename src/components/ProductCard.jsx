import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "./layout/Button";


const ProductCard = ({
  className = "",
  name,
  subName,
  image,
  imageClassName = "",
}) => {
  const { name: urlName } = useParams();
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
        {name}
      </h3>
      <Link to={`/${urlName}/${subName}`}>
      <Button
        className="bg-gray_dark text-white"
      >
        View product
      </Button>
      </Link>
    </div>
  );
};

export default ProductCard;
