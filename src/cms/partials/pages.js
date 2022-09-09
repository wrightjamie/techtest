import post_collection from "../partials/post_collection";

const page_defaults = {
  widget: "list",
  field: post_collection,
  allow_add: true,
};

export const page_of_three = (name = "page3") => ({
  widget: "list",
  field: post_collection,
  allow_add: true,
  name,
  label: "Select 3 Posts",
  max: 3,
  min: 3,
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
