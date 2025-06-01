import React, { useState } from "react";
import Image from "next/image";

const RoomImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="relative h-64 lg:h-full rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none overflow-hidden">
      {currentImage ? (
        <Image
          src={currentImage}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className="object-cover"
        />
      ) : (
        <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500">
          No Image Available
        </div>
      )}

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-700 rounded-full p-1 shadow"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-700 rounded-full p-1 shadow"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default RoomImageSlider;
