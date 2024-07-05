import {
  getAllImageTags,
  getAllImages,
  getFeaturedImages,
} from "../../../sanity/sanity.query";
import ImageTags from "../../../components/ImageTags";
import { useRouter } from "next/navigation";

const Gallery = async () => {
  const { query } = useRouter();
  const allImageTags = await getAllImageTags();
  console.log(query);

  const getImagesByTag = async (tag) => {
    const images = await getAllImages(tag);
    console.log(images);
    return images;
  };

  return (
    <div className="max-w-[1920] mx-auto text-center my-20">
      <h1 className="font-bold text-3xl pb-8">Gallery</h1>
      <div>
        {/* <ImageTags tags={allImageTags} handleChange={async (tag) => {
          await getImagesByTag(tag);
        }} /> */}
        <div className="flex gap-5 justify-center items-center">
          {allImageTags.map((tag, i) => (
            <button
              key={i}
              className={
                "hover:scale-100 hover:bg-[#1B8733] hover:text-white py-3 rounded-md px-4 active:bg-[#1B8733] active:text-white transition-all duration-300 ease-in-out"
              }
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div>{}</div>
    </div>
  );
};

export default Gallery;
