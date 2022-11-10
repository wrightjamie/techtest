const post_collection = {
  label: "Choose Post",
  name: "post",
  widget: "relation",
  collection: "post",
  search_fields: ["title", "excerpt"],
  value_field: "posts/{{slug}}",
  display_fields: ["title"],
};

export default post_collection;
