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
  ],
};

export default home;
