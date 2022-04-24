//import seo from "@/cms/partials/seo";
import links from "../partials/links";

const page = {
  file: "content/pages/home.md",
  label: "Home",
  name: "Home",
  fields: [
    {
      label: "Layout",
      name: "layout",
      widget: "hidden",
      default: "index",
      required: true,
    },
    {
      label: "Title",
      name: "title",
      widget: "string",
      default: "",
      required: false,
    },
    {
      label: "Version",
      name: "version",
      widget: "string",
      default: "",
      required: false,
    },
    {
      label: "Description",
      name: "description",
      widget: "markdown",
      default: "",
      required: false,
    },
    {
      label: "Header",
      name: "header",
      widget: "object",
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
          default: "",
          required: false,
        },
        {
          label: "Version",
          name: "version",
          widget: "string",
          default: "",
          required: false,
        },
        {
          label: "Description",
          name: "description",
          widget: "markdown",
          default: "",
          required: false,
        },
        links,
      ],
    },
    links,
    //seo,
  ],
};

export default page;
