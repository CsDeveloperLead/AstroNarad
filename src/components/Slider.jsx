import React, { useRef } from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import sl1 from "../assets/1.png";
import sl2 from "../assets/2.png";
import sl3 from "../assets/3.png";
import sl4 from "../assets/4.png";
import sl5 from "../assets/5.png";

const Slider = () => {
  const carouselRef = useRef(null);

  // Function to scroll left
  const btnPressPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth; // Scroll one section backward
    }
  };

  // Function to scroll right
  const btnPressNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth; // Scroll one section forward
    }
  };

  const images = [
    { id: 1, src: sl1 },
    { id: 2, src: sl2 },
    { id: 3, src: sl3 },
    { id: 4, src: sl4 },
    { id: 5, src: sl5 },
  ];

  return (
    <div className="w-full h-auto relative overflow-hidden my-20">
      {/* Left scroll button */}
      <div className='absolute w-full top-1/2 transform -translate-y-1/2'>
        {" "}
        <button
          onClick={btnPressPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg z-10"
        >
          <GrLinkPrevious size={20} />
        </button>
        <button
          onClick={btnPressNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg z-10"
        >
          <GrLinkNext size={20} />
        </button>
      </div>

      {/* Right scroll button */}

      {/* Carousel container */}
      <div
        ref={carouselRef}
        className="flex items-center overflow-x-scroll no-scrollbar scroll-smooth mx-0 md:mx-40 h-auto"
        style={{
          scrollbarWidth: "none", // Hide scrollbar for Firefox
          msOverflowStyle: "none", // Hide scrollbar for IE and Edge
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex w-full md:w-1/3 flex-shrink-0 justify-center items-center  h-[500px]"
          >
            <img
              className="w-[300px] h-full object-cover rounded-3xl"
              src={image.src}
              alt={`slide-${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Hide scrollbars */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Opera */
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default Slider;
