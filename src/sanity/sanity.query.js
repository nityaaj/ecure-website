import { groq } from "next-sanity";
import client from "./sanity.client";


export const getFeaturedImages = async () => {
    const query = groq`*[_type == "Gallery" && "Featured" in tags] {
        title,
        image,
        "imageUrl": image.asset->url,
        date
        }`;

    const data = await client.fetch(query);

    return data;
}

export const getAllImages = async (tag) => {
    const query = groq`*[_type == "Gallery" && $tag in tags] {
        title,
        image,
        "imageUrl": image.asset->url,
        date,
        tags
        }`;

    const data = await client.fetch(query);

    return data;
}

export const getAllImageTags = async () => {
    const query = `*[_type == "Gallery"] {
        tags
      }`;
    const documents = await client.fetch(query);
    const tags = documents.map((doc) => doc.tags).flat();
    const uniqueTags = [...new Set(tags)];

    return uniqueTags;
}