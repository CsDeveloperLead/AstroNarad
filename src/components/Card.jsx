import React from "react";
import ImageCarousel from "./ImageCarousel";

const App = () => {
  const images = [
    "../src/assets/1.png",
    "../src/assets/2.png",
    "../src/assets/3.png",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ImageCarousel images={images} />
    </div>
  );
};

export default App;
