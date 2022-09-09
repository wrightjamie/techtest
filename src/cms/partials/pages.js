import post_collection from "../partials/post_collection";

const page_title = {
  label: "Page Title",
  name: "title",
  widget: "string",
  required: true,
};

const page = (name, label, max, min) => ({
  label,
  name,
  widget: "object",
  fields: [
    page_title,
    {
      widget: "list",
      field: post_collection,
      allow_add: true,
      name,
      label: "Select Posts or Pages",
      max,
      min,
    },
  ],
});

export const page_of_three = (name = "page3") =>
  page(name, "Page of 3 Elements", 3, 3);

export const page_of_four = (name = "page4") =>
  page(name, "Page of 4 Elements", 4, 4);

export const page_of_cheques = (name = "page5") =>
  page(name, "Page of 4 Elements (Chequed)", 4, 4);

export const page_of_recent = (name = "page2") => ({
  label: "Recent Posts",
  name,
  widget: "object",
  fields: [page_title],
});
