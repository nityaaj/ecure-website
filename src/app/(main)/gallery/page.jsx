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
              isActive={searchParams['type'] === tag}
            />
          ))}
        </div>
      </div>
      {/* Masonry Grid */}
      <div
        className="mx-24 gap-3 columns-2 md:columns-3 lg:columns-4 xl:columns-5 [&>img:not(:first-child)]:mt-5"
      >
        {imagesToRender.map((i, index) =>
        (
          <img key={index} src={i.imageUrl} alt={i.title} className="rounded-lg"/>
        )
        )}
      </div>
    </div>
  );
};

export default Gallery;

