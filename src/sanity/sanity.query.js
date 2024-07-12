import { groq } from "next-sanity";
import client from "./sanity.client";
import { cache } from "../lib/cache";

const revalidate = 60; // 24 hours

export const getFeaturedImages = async () => {
    const query = groq`*[_type == "Gallery" && "Featured" in tags] {
        title,
        image,
        "imageUrl": image.asset->url,
        date
        }`;

    const data = await client.fetch(query, {
        next: {
            revalidate
        }
    });
    const images = data.map((doc) => {
        return {
            title: doc.title,
            imageUrl: doc.imageUrl
        }
    });
    return images;
}

export const getAllImages = async (tag) => {
    const query = groq`*[_type == "Gallery" && $tag in tags] {
        title,
        image,
        "imageUrl": image.asset->url,
        date,
        tags
        }`;

    const params = {
        tag,
        next: {
            revalidate
        }
    };

    const data = await client.fetch(query, params);
    const images = data.map((doc) => {
        return {
            title: doc.title,
            imageUrl: doc.imageUrl
        }
    });
    return images;
}

export const getAllImageTags = cache(async () => {
    const query = groq`*[_type == "Gallery"] {
        tags
      }`;
    const documents = await client.fetch(query, {
        next: {
            revalidate
        }
    });
    const tags = documents.map((doc) => doc.tags).flat();
    const uniqueTags = [...new Set(tags)];

    return uniqueTags;
}, ["/gallery", "getAllImageTags"], {
    revalidate: 60 * 60 * 24 // 24 hours
})

export const getAllServicesList = cache(async () => {
    const query = groq`*[_type == "service"] {
        slug,
        title,
        description,
        "imageUrl": image.asset->url,
      }`;
    const documents = await client.fetch(query, {
        next: {
            revalidate
        }
    });
    console.log(documents);
    return documents;
}, ["/services", "getAllServicesList"], {
    revalidate: 60 * 60 * 24 // 24 hours
});

export const getFeaturedServicesList = async () => {
    const query = groq`*[_type == "service" && featured == true] {
        slug,
        title,
        description,
        "imageUrl": image.asset->url,
      }`;
    const documents = await client.fetch(query, {
        next: {
            revalidate
        }
    });
    return documents;
}

export const getServicesDetails = async (slug) => {
    // const query = groq`*[_type == "service" && $slug == slug] {
    // _id,
    //     slug,
    //     title,
    //     description,
    //     "imageUrl": image.asset->url,
    //     subservices,
    //     content
    //   }`;

    const query = groq`*[_type == "service" && $slug == slug]{
        _id,
        slug,
        title,
        description,
        content,
        "imageUrl": image.asset->url,
        subservices[]->{
          slug,
          title,
          description,
          "imageUrl": image.asset->url
        }
      }[0]`;
    const params = { slug, next: { revalidate } };
    const documents = await client.fetch(query, params);

    return documents;
}

export const getServicesList = async () => {
    const query = groq`*[_type == "service"] {
        _id,
        slug,
        title,
        subservices[]->{
            _id,
            slug,
            title,
            }
      }`;
    const documents = await client.fetch(query, {
        next: {
            revalidate
        }
    });
    return documents;
}