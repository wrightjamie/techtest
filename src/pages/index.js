import * as React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

// markup
const IndexPage = ({ data }) => {
  console.log(data);
  const landing = data.landing.frontmatter.landing;
  const recent = data.recent.edges;

  const dummy = {
    landing: {
      content:
        "Cras egestas sed purus consequat convallis. Nunc a libero rutrum, mollis dui ut, mattis lacus. Etiam lobortis tortor a mi consequat, ac elementum nisl hendrerit. Vestibulum a malesuada ligula. Integer aliquam eu ligula sed egestas. Duis sed nunc massa. Donec nec leo ac dui hendrerit lacinia dictum ac justo.",
      cta1: { title: "Join Us", to: "joinus" },
      cta2: { title: "Learn more", to: "learnmore" },
    },
  };
  console.log(dummy);
  const LeadPage = () => (
    <>
      <Page>
        <div>
          <h1>Congratulations</h1>
          <h2>{landing.tag}</h2>
        </div>
        <div>
          <p>{dummy.landing.content}</p>
          <div>
            <Link to={dummy.landing.cta1.to}>{dummy.landing.cta1.title}</Link>
            <Link to={dummy.landing.cta2.to}>{dummy.landing.cta2.title}</Link>
          </div>
          <nav>
            <a href="facebook.com">F</a>
            <a href="twitter.com">T</a>
            <a href="contact.com">M</a>
            <span>|</span>
            <a href="button">L</a>
          </nav>
        </div>
      </Page>
    </>
  );

  return (
    <Layout lead={<LeadPage />}>
      <Page>
        <section>A Card</section>
        <section>A Card</section>
        <section>A Card</section>
      </Page>
      <Page>
        <section>A Card</section>
        <section>A Card</section>
        <section>A Card</section>
        <section>A Card</section>
      </Page>
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

const Page = styled.section`
  height: 100vh;
`;
