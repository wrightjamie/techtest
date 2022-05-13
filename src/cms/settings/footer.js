//import seo from "@/cms/partials/seo";
import links from "../partials/links";

const footer = {
  file: "content/settings/footer.md",
  label: "Footer",
  name: "Footer",
  fields: [
    {
      label: "Template",
      name: "template",
      widget: "hidden",
      default: "footer",
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
      label: "Copyright Statement",
      name: "copyright",
      widget: "string",
      default: "Copyright 2459 Poulton-le-Fylde Squadron",
    },
    {
      label: "Year",
      name: "year",
      widget: "number",
      default: "2022",
    },
    {
      label: "Footer Columns",
      name: "columns",
      widget: "list",
      min: 1,
      max: 4,
      fields: [
        {
          label: "Column Title",
          name: "column_title",
          widget: "string",
          default: "Links:",
        },
        links,
      ],
    },
  ],
};

export default footer;
