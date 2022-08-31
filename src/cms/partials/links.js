const links = (label = "Link", name = "links", min = 1, max = 5) => ({
  label,
  name,
  widget: "list",
  min,
  max,
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
        {
          label: "Icon",
          name: "icon",
          widget: "select",
          options: ["facebook", "twitter", "mail", "phone", "none"],
        },
      ],
    },
  ],
});

export default links;
