import links from "../partials/links";
import post_collection from "../partials/post_collection";

const home = {
  name: "home",
  label: "Home Page",
  editor: {
    preview: false,
  },
  description: "Setup for Home Page",
  folder: "content",
  file: "home.md",

  fields: [
    {
      label: "Template",
      name: "template",
      widget: "hidden",
      default: "home",
      required: true,
    },
    {
      label: "Landing Page",
      name: "landing",
      widget: "object",
      fields: [
        {
          label: "Tag Line",
          name: "tag",
          widget: "string",
          required: false,
        },
      ],
    },
    links("Header Links", "header_links"),
    post_collection,
    {
      label: "Select 3 Posts",
      name: "posts",
      widget: "list",
      field: post_collection,
      allow_add: true,
      max: 3,
      min: 3,
    },
  ],
};

export default home;
