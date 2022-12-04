import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetaData = () => {
  const { site } = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return site.siteMetadata;
};
