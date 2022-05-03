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
    {
      label: "Slug",
      name: "slug",
      widget: "hidden",
      default: "{{slug}}",
      required: true,
    },
    {
      label: "Author",
      name: "author",
      widget: "string",
      required: true,
    },
    {
      label: "Featured Image",
      name: "thumbnail",
      widget: "image",
      default: "",
      required: false,
    },
    {
      label: "Date",
      name: "date",
      widget: "datetime",
      default: "",
      required: false,
    },
    {
      label: "Excerpt",
      name: "excerpt",
      widget: "text",
      default: "",
      required: false,
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown",
      default: "",
      required: false,
    },
  ],
};

export default posts;
