import links from "../partials/links";

const header = {
  file: "content/settings/header.md",
  label: "Header Links",
  name: "Header_links",
  fields: [
    {
      label: "Template",
      name: "template",
      widget: "hidden",
      default: "header",
      required: true,
    },
    {
      label: "Area",
      name: "area",
      widget: "hidden",
      default: "header",
      required: true,
    },
    links(),
  ],
};

export default header;
