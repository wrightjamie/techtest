import { useLayoutEffect } from "react";

const posts = {
  name: "post",
  label: "Posts",
  editor: {
    preview: false,
  },
  description: "Post Content",
  folder: "content/posts",
  slug: "{{slug}}",
  create: true,
  fields: [
    {
      label: "Type of Post",
      name: "layout",
      widget: "select",
      options: ["post", "page"],
      required: true,
    },
    {
      label: "Title",
      name: "title",
      widget: "string",
      required: true,
    },
  ],
};

export default posts;
