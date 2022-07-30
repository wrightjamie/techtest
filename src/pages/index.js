import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

import LeadPage from "../components/landingPage/LeadPage";
import Card from "../components/card";
import { Page, HeroPage, PageHeader } from "../components/page";
import Hero from "../components/landingPage/Hero";

// markup
const IndexPage = ({ data }) => {
  const landing = data.landing.frontmatter.landing;
  const recent = data.recent.edges;
  const meta = data.site.siteMetadata;

  const dummy = {
    landing: {
      content1:
        "Cras egestas sed purus consequat convallis. Nunc a libero rutrum, mollis dui ut, mattis lacus. Etiam lobortis tortor a mi consequat.",
      content2:
        "Cras egestas sed purus consequat convallis. Nunc a libero rutrum, mollis dui ut, mattis lacus. Etiam lobortis tortor a mi consequat, ac elementum nisl hendrerit. Vestibulum a malesuada ligula. Integer aliquam eu ligula sed egestas. Duis sed nunc massa. Donec nec leo ac dui hendrerit lacinia dictum ac justo.",
      cta1: { title: "Join Us", to: "joinus" },
      cta2: { title: "Learn more", to: "learnmore" },
    },
  };
  const leadpagedata = {
    title: meta.title,
    tag: landing.tag,
    content1: dummy.landing.content1,
    content2: dummy.landing.content2,
  };
  const heropagedata = {
    content: dummy.landing.content2,
    cta1: dummy.landing.cta1,
    cta2: dummy.landing.cta2,
  };

  return (
    <Layout lead={<LeadPage data={leadpagedata} />}>
      <HeroPage background="img/advTrg.jpg">
        <Hero data={heropagedata} />
      </HeroPage>
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
    site {
      siteMetadata {
        title
      }
    }

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
