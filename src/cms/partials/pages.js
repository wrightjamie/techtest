import post_collection from "../partials/post_collection";

export const page_of_three = (name = "page3") => ({
  label: "Page of 3",
  name,
  widget: "object",
  fields: [
    {
      label: "Page Title",
      name: "title",
      widget: "string",
      required: true,
    },
    {
      widget: "list",
      field: post_collection,
      allow_add: true,
      name,
      label: "Select 3 Posts",
      max: 3,
      min: 3,
    },
  ],
});

export const page_of_four = (name = "page4") => ({
  widget: "list",
  field: post_collection,
  allow_add: true,
  name,
  label: "Select 4 Posts",
  max: 4,
  min: 4,
});

export const page_of_cheques = (name = "page5") => page_of_four(name);
