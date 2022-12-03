import React from "react";
import { useSiteMetaData } from "../../hooks/useSiteMetaData";

export const SEO = ({ title, description, pathname, children }) => {
  const siteMetadata = useSiteMetaData();

  const seo = {
    // vaiable: override || fallback
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  );
};
