import links from "../partials/links";
import {
  page_of_cheques,
  page_of_four,
  page_of_recent,
  page_of_three,
  page_of_hero,
  hero_content,
} from "../partials/pages";

const home = {
  name: "home",
  label: "Home Page",
  editor: {
    preview: false,
  },
  description: "Setup for Home Page",
  folder: "content/home/",
  media_folder: "img/",
  public_folder: "./img/",
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
        ...hero_content,
      ],
    },
    links("Header Links", "header_links"),
    {
      label: "Pages",
      name: "pages",
      widget: "list",
      types: [
        page_of_three(),
        page_of_four(),
        page_of_cheques(),
        page_of_recent(),
        page_of_hero(),
      ],
    },
  ],
};

export default home;
