import post_collection from "../partials/post_collection";

const page_of_three = {
  label: "Select 3 Posts",
  name: "posts",
  widget: "list",
  field: post_collection,
  allow_add: true,
  max: 3,
  min: 3,
};

export default page_of_three;
