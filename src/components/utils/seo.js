import React from "react";

export const SEO = ({ title, description, pathname, children }) => {
  const defaultTitle = "Page Title";
  const seo = {
    // vaiable: override || fallback
    title: title || defaultTitle,
  };

  return (
    <>
      <title>{seo.title}</title>
      {children}
    </>
  );
};
