import React from "react";
import { useSiteMetaData } from "../../hooks/useSiteMetaData";

export const SEO = ({ title, description, pathname, children, featured }) => {
  const siteMetadata = useSiteMetaData();
  const seo = {
    // vaiable: override || fallback
    title: `${siteMetadata.title} ${title && ` - ${title}`}`,
    description: description || siteMetadata.description,
    featured: featured || null,
    url: "www.example.com",
  };
  console.log("SEO Object: ", seo);

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.featured && <meta name="image" content={seo.featured} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      {seo.featured && <meta name="twitter:image" content={seo.featured} />}
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  );
};
