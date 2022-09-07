import post_collection from "../partials/post_collection";

const page_defaults = {
  name: "posts",
  widget: "list",
  field: post_collection,
  allow_add: true,
};

export const page_of_three = {
  ...page_defaults,
  label: "Select 3 Posts",
  max: 3,
  min: 3,
};

export const page_of_four = {
  ...page_defaults,
  label: "Select 4 Posts",
  max: 4,
  min: 4,
};
