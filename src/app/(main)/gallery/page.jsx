import {
  getAllImageTags,
  getAllImages,
  getFeaturedImages,
} from "../../../sanity/sanity.query";
import ClientTagButton from "../../../components/ClientTagButton";
import ClientImages from "../../../components/ClientImages";

const Gallery = async ({ searchParams }) => {
  const allImageTags = await getAllImageTags();

  const fetchImageBasedOnTag = async (tag) => {
    const allImages = await getAllImages(tag);
    return allImages;
  };
  function handleDelete() {}
  let imagesToRender = await fetchImageBasedOnTag(`${searchParams["type"]}`);

  return (
    <div className="max-w-[1920] mx-auto text-center my-10 min-h-[calc(100svh-200px)]">
      <h1 className="font-bold text-3xl pb-8">Gallery</h1>
      <div>
        {/* <ImageTags tags={allImageTags} handleChange={async (tag) => {
          await getImagesByTag(tag);
        }} /> */}
        <div className="flex gap-5 justify-center items-center mx-auto my-4">
          {allImageTags.map((tag, i) => (
            <ClientTagButton
              title={tag}
              isActive={searchParams["type"] === tag}
            />
          ))}
        </div>
      </div>

      <ClientImages imagesToRender={imagesToRender} />
    </div>
  );
};

export default Gallery;
