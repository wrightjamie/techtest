import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetaData = () => {
  const { site } = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return site.siteMetadata;
};
