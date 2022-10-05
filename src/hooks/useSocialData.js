import { useStaticQuery, graphql } from "gatsby";

export const useSocialData = () => {
  const { social } = useStaticQuery(graphql`
    query SocialQuery {
      social: markdownRemark(frontmatter: { template: { eq: "social" } }) {
        frontmatter {
          social_links {
            link {
              icon
              content
              url
            }
          }
        }
      }
    }
  `);
  return social.frontmatter.social_links;
};
