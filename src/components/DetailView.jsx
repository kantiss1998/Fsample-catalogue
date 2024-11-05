import React, { useState } from "react";
import Badge from "./layout/Badge";
import ColorSelector from "./layout/ColorSelector";

const BlockWrapper = ({ className = "", children }) => (
  <div className={`flex flex-col gap-y-2 ${className}`}>{children}</div>
);

const BlockTitle = ({ className = "", children }) => (
  <h6
    className={`text-gray_dark font-semibold text-sm sm:text-base leading-tight uppercase ${className}`}
  >
    {children}
  </h6>
);

const DetailView = ({
  className = "",
  productName = "Name of your product",
  colorVarients = [],
  about = "",
}) => {
  const [state, setState] = useState({
    activeColor: colorVarients[0],
  });

  const { activeColor, activeSize } = state;

  const handleColorClick = (color) => {
    setState({ activeColor: color, activeSize });
  };

  return (
    <div className={`w-full flex flex-col gap-y-6 sm:gap-y-8 ${className}`}>
      <div className="flex flex-col gap-y-3 sm:gap-y-4">
        <h3 className="text-gray_dark text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold">
          {productName}
        </h3>
      </div>
      <BlockWrapper>
        <BlockTitle>Color</BlockTitle>
        <div className="flex flex-wrap gap-2 items-center justify-start">
          {colorVarients.map((hex, i) => (
            <ColorSelector
              key={i}
              color={hex}
              images={hex.imgUrl}
              isSelected={colorVarients[i] === activeColor}
              onClick={() => activeColor !== hex && handleColorClick(hex)}
            />
          ))}
        </div>
      </BlockWrapper>
      <div className="flex flex-col gap-y-2">
      </div>
    </div>
  );
};

export default DetailView;