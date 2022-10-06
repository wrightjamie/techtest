import { useStaticQuery, graphql } from "gatsby";

export const useLandingData = () => {
  const { landing } = useStaticQuery(graphql`
    query HeaderQuery {
      landing: markdownRemark(frontmatter: { template: { eq: "home" } }) {
        frontmatter {
          landing {
            tag
            em
            para
            bgimage {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `);
  return landing.frontmatter.landing;
};
