import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

import LeadPage from "../components/landingPage/LeadPage";
import CardLink from "../components/card_link";
import {
  HeroPage,
  PageHeader,
  NextPage,
  ThreePage,
  FourPage,
  ChequeredPage,
} from "../components/page";
import Hero from "../components/landingPage/Hero";

// markup
const IndexPage = ({ data }) => {
  const landing = data.landing.frontmatter.landing;
  const recent = data.recent.edges;
  const meta = data.site.siteMetadata; //TODO Move siteMetaData to a custom hook

  console.log(data);

  //This returns an array of selected posts or pages that appear in the array slugs
  const slugs = [
    "posts/another-post-or-type-post",
    "posts/with-content",
    "posts/a-post-of-type-page",
  ];
  const selected_posts = data.post_and_pages.nodes.filter(({ frontmatter }) =>
    slugs.includes(frontmatter.slug)
  );

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
  const heropagedata = {
    title: dummy.landing.title,
    content: dummy.landing.content2,
    cta1: dummy.landing.cta1,
    cta2: dummy.landing.cta2,
  };

  const card_data = {
    title: "Here is a title",
    link: "/blog/",
  };
  return (
    <Layout lead={<LeadPage data={leadpagedata} />} scrollStop>
      <HeroPage id="page2" background="img/advTrg.jpg">
        <Hero data={heropagedata} />
        <NextPage link="#page3" />
      </HeroPage>
      <ThreePage id="page3">
        <PageHeader>Recent</PageHeader>
        {recent.map((post, index) => {
          const recent_post = {
            slug: "posts/another-post-or-type-post",
            title: post.node.frontmatter.title,
            link: post.node.fields.slug,
          };
          return <CardLink key={index} data={recent_post} />;
        })}
        <NextPage link="#page4" />
      </ThreePage>
      <HeroPage left id="page4" background="img/advTrg.jpg">
        <PageHeader inverted>A Page Title</PageHeader>
        <Hero data={heropagedata} />
        <NextPage link="#page5" />
      </HeroPage>
      <FourPage id="page5">
        <PageHeader>A Page Title</PageHeader>
        <CardLink data={card_data} />
        <CardLink data={card_data} />
        <CardLink data={card_data} />
        <CardLink data={card_data} />
        <NextPage link="#page6" />
      </FourPage>
      <ChequeredPage id="page6">
        <PageHeader>A Page Title</PageHeader>
        <CardLink data={card_data} />
        <CardLink data={card_data} />
        <CardLink data={card_data} />
        <CardLink data={card_data} />
      </ChequeredPage>
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
      limit: 3
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
    post_and_pages: allMarkdownRemark(
      filter: { frontmatter: { template: { in: ["post", "page"] } } }
    ) {
      nodes {
        frontmatter {
          excerpt
          featured
          slug
          title
        }
      }
    }
  }
`;

export default IndexPage;
