"use client";

import React from "react";
import urlFor from "../utils/sanityImageUrlBuilder";

const ClientImages = ({ imagesToRender }) => {
//   const [currentImage, setCurrentImage] = React.useState(0);
//   const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
//   const [imageCount, setImageCount] = React.useState(0);

//   const handleNext = () => {
//     if (currentImageIndex < imageCount - 1) {
//       setCurrentImageIndex(currentImageIndex + 1);
//       setCurrentImage(currentImageIndex + 1);
//     } else {
//         setCurrentImageIndex(0);
//         setCurrentImage(0);
//     }
//   };

//   const handlePrev = () => {
//     if (currentImageIndex > 0) {
//       setCurrentImageIndex(currentImageIndex - 1);
//       setCurrentImage(currentImageIndex - 1);
//     } else {
//         setCurrentImageIndex(imageCount - 1);
//         setCurrentImage(imageCount - 1);
//     }
//   };

//   React.useEffect(() => {
//     setImageCount(imagesToRender.length);
//   }, [imagesToRender]);

//   React.useEffect(() => {
//     setCurrentImageIndex(0);
//     setCurrentImage(0);
//   }, [imagesToRender]);

//   const handleImageClick = (index) => {
//     setCurrentImage(index);
//     setCurrentImageIndex(index);
//   };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {imagesToRender.map((image, i) => (
          <div key={i} className="relative">
            <img
              src={image.imageUrl + "?w=500&h=500&fit=crop&auto=format"}
              alt={image.title}
              className="w-full h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
              <h1 className="text-lg font-bold">{image.title}</h1>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center items-center gap-4 absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-50 h-svh w-full">
        <button
          onClick={handlePrev}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Prev
        </button>
        <div
            className="relative w-1/2 h-1/2 cursor-pointer"
        >
            <img
                src={urlFor(imagesToRender[currentImage].imageUrl).width(1200).quality(80).url()}
                alt={imagesToRender[currentImage].title}
                className="w-full h-full object-cover"
            />
        </div>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Next
        </button>
      </div> */}
    </>
  );
};

export default ClientImages;
