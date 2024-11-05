import React, { useState } from "react";


const ColorSelector = ({
  color = { name: "Black", rgb: "#000" },
  isSelected = false,
  shape = "circle",
  onClick,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const outlineStyle = {
    borderColor: isSelected ? color.rgb : "transparent",
    cursor: "pointer",
  };
  
  const innerStyle = {
    backgroundColor: color.rgb,
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) onClick();
  };

  return (
    <>
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div className="bg-white absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-800 text-black rounded whitespace-nowrap">
            {color.name}
          </div>
        )}
        <div
          onClick={handleClick}
          className={`w-[60px] h-[60px] ${
            shape === "circle"
              ? "rounded-full"
              : shape === "square"
              ? "rounded-[12px]"
              : ""
          } p-[4px] flex justify-center items-center border-[3px] border-black ${className}`}
          style={outlineStyle}
        >
          <div
            style={innerStyle}
            className={`w-full h-full ${
              shape === "circle"
                ? "rounded-full"
                : shape === "square"
                ? "rounded-[6px]"
                : ""
            } cursor-pointer`}
          />
        </div>
      </div>
    </>
  );
};

export default ColorSelector;