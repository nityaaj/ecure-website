import {
  getAllImageTags,
  getAllImages,
  getFeaturedImages
} from "../../../sanity/sanity.query";
import ClientTagButton from "../../../components/ClientTagButton"

const Gallery = async ({ searchParams }) => {
  const allImageTags = await getAllImageTags();

  const fetchImageBasedOnTag = async (tag) => {
    const allImages = await getAllImages(tag)
    return allImages
  }
  function handleDelete() {

  }
  let imagesToRender = await fetchImageBasedOnTag(`${searchParams['type']}`);

  return (
    <div className="max-w-[1920] mx-auto text-center my-20">
      <h1 className="font-bold text-3xl pb-8">Gallery</h1>
      <div>
        {/* <ImageTags tags={allImageTags} handleChange={async (tag) => {
          await getImagesByTag(tag);
        }} /> */}
        <div className="flex gap-5 justify-center items-center">
          {allImageTags.map((tag, i) => (
            <ClientTagButton
              title={tag}
              isActive={searchParams['type'] === tag}
            />
          ))}
        </div>
      </div>
      {/* Masonry Grid */}
      <div
        className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5"
      >
        {imagesToRender.map((i, index) =>
        (
          <img key={index} src={i.imageUrl} alt={i.title} />
        )
        )}
      </div>
    </div>
  );
};

export default Gallery;

