
import { BiGridAlt } from "react-icons/bi";
import { defineField } from "sanity";

const gallery = {
    name: "Gallery",
    title: "Gallery",
    type: "document",
    icon: BiGridAlt,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            initialValue: ["All"],
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "date",
        }),
    ],
};

export default gallery;