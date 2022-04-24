//import seo from "@/cms/partials/seo";
import links from "../partials/links";

const footer = {
  file: "content/pages/footer.md",
  label: "Footer Links",
  name: "Footer_links",
  fields: [
    {
      label: "Layout",
      name: "layout",
      widget: "hidden",
      default: "settings",
      required: true,
    },
    {
      label: "Area",
      name: "area",
      widget: "hidden",
      default: "footer",
      required: true,
    },
    {
      label: "Column Title",
      name: "column_title",
      widget: "string",
      default: "Links:",
    },
    links,
  ],
};

export default footer;
