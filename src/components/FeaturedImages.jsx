"use client";

import React from "react";
// import { getFeaturedImages } from "../sanity/sanity.query";
import Image from "next/image";

const FeaturedImages = ({ featuredImages }) => {
  // const featuredImages = await getFeaturedImages();

  return (
    <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center content-center max-w-screen-lg">
      {featuredImages.map((image, i) => (
        <Image
          src={image.imageUrl}
          className={
            "rounded-lg" + (i == 0 ? " lg:row-span-2 lg:col-span-2" : "")
          }
          width={500}
          height={500}
        />
      ))}
    </div>
  );
};

export default FeaturedImages;
