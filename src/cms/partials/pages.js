import post_collection from "../partials/post_collection";
import { link } from "./links";

const page_title = {
  label: "Page Title",
  name: "page_title",
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
  fields: [
    page_title,
    {
      label: "Arrangement of Articles?",
      name: "arrangement",
      widget: "select",
      options: [
        {
          label: "3 Vertical",
          value: "3V",
        },
        {
          label: "4 Staggered",
          value: "3S",
        },
        {
          label: "4 Chequered",
          value: "4C",
        },
      ],
    },
  ],
});

export const page_of_hero = (name = "page1") => ({
  label: "Hero Style",
  name,
  widget: "object",
  fields: [
    page_title,
    {
      label: "Content on left or right?",
      name: "content",
      widget: "select",
      default: "left",
      options: [
        {
          label: "Left",
          value: "left",
        },
        {
          label: "Right",
          value: "right",
        },
      ],
    },
    {
      label: "Content Title",
      name: "title",
      widget: "string",
      required: true,
    },
    {
      label: "Emphasised Content",
      name: "em",
      widget: "text",
      required: false,
    },
    {
      label: "Normal Content",
      name: "para",
      widget: "text",
      required: false,
    },
    link,
  ],
});
