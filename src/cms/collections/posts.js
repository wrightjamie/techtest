const posts = {
  name: "post",
  label: "Posts",
  editor: {
    preview: false,
  },
  description: "Post Content",
  folder: "content/posts",
  media_folder: "/img/",
  public_folder: "./img/",
  slug: "{{slug}}",
  create: true,
  fields: [
    {
      label: "Type of Post",
      name: "template",
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
      label: "Test Image",
      name: "image",
      widget: "image",
      default: "",
      required: false,
    },
    {
      label: "Date",
      name: "date",
      widget: "datetime",
      default: "",
      required: true,
    },
    {
      label: "Featured",
      name: "featured",
      widget: "boolean",
      default: true,
      required: true,
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
