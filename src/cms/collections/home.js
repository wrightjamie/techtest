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
    {
      label: "Choose Post",
      name: "post",
      widget: "relation",
      collection: "posts",
      search_fields: ["title", "excerpt"],
      value_field: "slug",
      display_fields: "title",
    },
  ],
};

export default home;

const three_page = {};

const four_page = {};

const hero_page = {};
