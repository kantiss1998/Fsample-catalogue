import React from "react";
import ProductCardSubName from "../ProductCardSubName";


const ProductCardsWrapperSubName = ({
  productsData,
  className = "",
  productImageClassName = "",
}) => {
  console.log(productsData[0].subName)
  return (
    <div className={`${className} grid`}>
      {productsData?.map((d, i) => (
        <ProductCardSubName
          image={d.imgUrls[0]}
          imageClassName={productImageClassName}
          subName={d.subName}
          name={d.name}
          color={d.color}
          id={d.id}
          key={i}
        />
      ))}
    </div>
  );
};

export default ProductCardsWrapperSubName;
