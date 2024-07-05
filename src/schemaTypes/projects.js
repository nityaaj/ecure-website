
import { defineField } from "sanity";
import { BiLogoProductHunt } from "react-icons/bi";

const projects = {
  name: "Projects",
  title: "Projects",
  type: "document",
  icon: BiLogoProductHunt,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),
  ],
};

export default projects;