import React from "react";

const ImageGallery = ({ className, galleryImages, productName }) => {
  return (
    <div
      className={`w-full flex flex-wrap gap-2 sm:gap-4 rounded-2xl sm:rounded-[48px] overflow-hidden ${
        className ?? ""
      }`}
    >
      {galleryImages.map((img, i) => (
        <div
          key={i}
          className="relative basis-full sm:basis-[calc(50%-0.5rem)] grow h-[60vw] sm:h-[30vw] md:h-[25vw] lg:h-[20vw] max-h-[580px]"
        >
          <img
            src={img}
            alt={productName ?? "Name of your product"}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;