import React from "react";
import { useSiteMetaData } from "../../hooks/useSiteMetaData";

export const SEO = ({ title, description, pathname, children }) => {
  const siteMetadata = useSiteMetaData();

  const seo = {
    // vaiable: override || fallback
    title: title || siteMetadata.title,
  };

  return (
    <>
      <title>{seo.title}</title>
      {children}
    </>
  );
};
