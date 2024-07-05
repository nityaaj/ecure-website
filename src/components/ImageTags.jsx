"use client";

import React, { useState } from "react";

const ImageTags = ({ tags, handleChange }) => {
  const [selectedTag, setSelectedTag] = useState("All");

  const handleTagClick = async (tag) => {
    setSelectedTag(tag);
    await handleChange(tag);
  };

  return (
    <div className="flex gap-5 justify-center items-center">
      {tags.map((tag, i) => (
        <button
          key={i}
          className={
            "hover:scale-100 hover:bg-[#1B8733] hover:text-white py-3 rounded-md px-4 active:bg-[#1B8733] active:text-white transition-all duration-300 ease-in-out" +
            (selectedTag === tag
              ? "bg-[#1B8733] text-white"
              : "bg-white text-[#1B8733]")
          }
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default ImageTags;
