import CMS from "netlify-cms-app";
import settings from "../cms/settings";
import posts from "../cms/posts/posts";

window.CMS_MANUAL_INIT = true;

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: "git-gateway",
      branch: "master",
      repo: "techtest",
      commit_messages: {
        create: "Create {{collection}} “{{slug}}”",
        update: "Update {{collection}} “{{slug}}”",
        delete: "Delete {{collection}} “{{slug}}”",
        uploadMedia: "[skip ci] Upload “{{path}}”",
        deleteMedia: "[skip ci] Delete “{{path}}”",
      },
    },
    media_folder: "/static/img",
    public_folder: "/img",
    collections: [settings, posts],
  },
});
