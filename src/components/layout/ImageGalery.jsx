import React, { useState } from "react";

const ImageGallery = ({ className, galleryImages, productName }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (img) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div
        className={`w-full flex flex-wrap gap-2 sm:gap-4 rounded-2xl sm:rounded-[48px] overflow-hidden ${
          className ?? ""
        }`}
      >
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="relative basis-full sm:basis-[calc(50%-0.5rem)] grow h-[60vw] sm:h-[30vw] md:h-[25vw] lg:h-[20vw] max-h-[580px] cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => openPopup(img)}
          >
            <img
              src={img}
              alt={productName ?? "Name of your product"}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Popup/Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closePopup}
        >
          <div className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt={productName}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;