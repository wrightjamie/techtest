import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

import LeadPage from "../components/landingPage/LeadPage";
import PageSwitch from "../components/page_switch";

// markup
const IndexPage = ({ data }) => {
  const landing = data.landing.frontmatter.landing;
  const recent = data.recent.nodes.map((x) => x.frontmatter.slug);
  const meta = data.site.siteMetadata; //TODO Move siteMetaData to a custom hook
  const pages = data.landing.frontmatter.pages;
  const posts = data.post_and_pages.nodes.map((x) => x.frontmatter);

  console.log(data);

  const dummy = {
    landing: {
      title: "Ready?",
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

  return (
    <Layout lead={<LeadPage data={leadpagedata} />} scrollStop>
      {pages.map((page, index) => (
        <PageSwitch data={page} key={index} recent={recent} posts={posts} />
      ))}
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
        pages {
          type
          content
          page_title
          title
          em
          para
          arrangement
          posts
        }
      }
    }

    recent: allMarkdownRemark(
      limit: 4
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      nodes {
        frontmatter {
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
          slug
          title
        }
      }
    }
  }
`;

export default IndexPage;
