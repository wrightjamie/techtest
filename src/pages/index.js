import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Facebook from "../svg/facebook.svg";
import RAFAClogo from "../svg/rafacLogo.svg";
import PostLink from "../components/post-link";

// markup
const IndexPage = ({ data }) => {
  console.log(data);
  const landing = data.landing.frontmatter.landing;
  const recent = data.recent.edges;
  return (
    <Layout>
      <section>
        <title>Home Page</title>
        <h1>Congratulations</h1>
        <h2>{landing.tag}</h2>
        <p>
          Edit <code>src/pages/index.js</code> to see this page update in
          real-time.{" "}
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
        {recent.map((edge) => (
          <PostLink key={edge.node.id} post={edge.node} />
        ))}
        <Facebook />
        <RAFAClogo />
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    landing: markdownRemark(frontmatter: { template: { eq: "home" } }) {
      frontmatter {
        landing {
          tag
        }
      }
    }

    recent: allMarkdownRemark(
      limit: 4
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
          id
        }
      }
    }
  }
`;

export default IndexPage;
