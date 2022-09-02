import links from "../partials/links";

const header = {
  file: "content/settings/social.md",
  label: "Social Links",
  name: "Social_links",
  fields: [
    {
      label: "Template",
      name: "template",
      widget: "hidden",
      default: "social",
      required: true,
    },
    {
      label: "Area",
      name: "area",
      widget: "hidden",
      default: "social",
      required: true,
    },
    links("Social Link", "social_links", 1, 3),
  ],
};

export default header;
