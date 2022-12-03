import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

import LeadPage from "../components/landingPage/LeadPage";
import PageSwitch from "../components/page_switch";
import { SEO } from "../components/utils/seo";

// markup
const IndexPage = ({ data }) => {
  const recent = data.recent.nodes.map((x) => x.fields.slug);
  const pages = data.landing.frontmatter.pages;
  const posts = data.post_and_pages.nodes.map(({ frontmatter, fields }) => ({
    ...frontmatter,
    ...fields,
  }));

  return (
    <Layout lead={<LeadPage />} scrollStop>
      {pages.map((page, index) => (
        <PageSwitch
          data={page}
          recent={recent}
          posts={posts}
          key={index}
          page={index}
        />
      ))}
    </Layout>
  );
};

export const Head = () => <SEO />;

/*
Recent filter changed to easier testing, should be:
filter: { frontmatter: { template: { eq: "post" } } }
*/

export const query = graphql`
  query {
    landing: markdownRemark(frontmatter: { template: { eq: "home" } }) {
      frontmatter {
        pages {
          type
          page_title
          arrangement
          posts
          para
          em
          bgimage {
            childImageSharp {
              gatsbyImageData(
                width: 1024
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          links {
            link {
              content
              url
              icon
            }
          }
        }
      }
    }
    recent: allMarkdownRemark(
      limit: 4
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { in: ["post", "page"] } } }
    ) {
      nodes {
        fields {
          slug
        }
      }
    }
    post_and_pages: allMarkdownRemark(
      filter: { frontmatter: { template: { in: ["post", "page"] } } }
    ) {
      nodes {
        frontmatter {
          excerpt
          featured {
            childImageSharp {
              gatsbyImageData(
                width: 750
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default IndexPage;
