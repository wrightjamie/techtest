import * as React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

import Logo from "../svg/rafacLogo.svg";

import Card from "../components/card";

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

  const LeadPage = () => (
    <>
      <Page fullHeight>
        <div>
          <h1>Congratulations</h1>
          <h2>{landing.tag}</h2>
        </div>
        <div>
          <StyledLogo />
          <p>{dummy.landing.content}</p>
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
        <PageHeader>A Page Title</PageHeader>
        <Card />
        <Card />
        <Card />
      </Page>
      <Page>
        <PageHeader>A Page Title</PageHeader>
        <img src="img/dsc01214.jpg" />
        <p>{dummy.landing.content}</p>
      </Page>
      <Page>
        <PageHeader>A Page Title</PageHeader>
        <Card />
        <Card />
        <Card />
        <Card />
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
  height: ${(props) =>
    props.fullHeight ? "100vh" : "calc(100vh - var(--headerHeight))"};

  scroll-snap-align: start;
  overflow: hidden;
`;

const PageHeader = styled.h2``;

const StyledLogo = styled(Logo)`
  height: 3em;
`;
