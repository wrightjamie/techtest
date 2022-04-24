import CMS from "netlify-cms-app";
import pages from "@/cms/pages";

window.CMS_MANUAL_INIT = true;

CMS.init({
  config: {
    load_config_file: false,
    display_url: "http://localhost:8000",
    backend: {
      name: "git-gateway",
      branch: "master",
    },
    media_folder: "/static/img",
    public_folder: "/img",
    collections: [pages],
  },
});
