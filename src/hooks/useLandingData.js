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
                  width: 1024
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
