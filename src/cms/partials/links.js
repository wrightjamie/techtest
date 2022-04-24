//import seo from "@/cms/partials/seo";

const links = {
  label: "Links",
  name: "links",
  widget: "list",
  fields: [
    {
      label: "Link",
      name: "link",
      widget: "object",
      fields: [
        {
          label: "Content",
          name: "content",
          widget: "string",
          required: false,
        },
        {
          label: "URL",
          name: "url",
          widget: "string",
          required: false,
        },
      ],
    },
  ],
};

export default links;
