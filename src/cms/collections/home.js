import links from "../partials/links";
import post_collection from "../partials/post_collection";
import {
  page_of_cheques,
  page_of_four,
  page_of_recent,
  page_of_three,
} from "../partials/pages";

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
    page_of_three(),
    page_of_four(),
    page_of_cheques(),
    page_of_recent(),
    //page_of_hero(),
  ],
};

export default home;
