import React from "react";

const Text = ({ type, className = "", children }) => {
  const baseClasses = "font-semibold uppercase";
  
  const sizeClasses = {
    sectionHeading: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
    subheading: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    paragraph: "text-base sm:text-lg md:text-xl",
  };

  const Tag = type === "sectionHeading" ? "h2" : 
              type === "subheading" ? "h3" : "p";

  return (
    <Tag className={`${baseClasses} ${sizeClasses[type] || ''} ${className}`}>
      {children}
    </Tag>
  );
};

export default Text;