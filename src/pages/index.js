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
  const recent = data.recent.nodes;
  const meta = data.site.siteMetadata; //TODO Move siteMetaData to a custom hook
  const pages = data.landing.frontmatter.pages;

  console.log(data);

  //This returns an array of selected posts or pages that appear in the array slugs
  const slugs = [
    "posts/another-post-or-type-post",
    "posts/with-content",
    "posts/a-post-of-type-page",
    "posts/a-post-of-type-page2",
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
      {pages.map((page, index) => (
        <PageSwitch data={page} key={index} />
      ))}
      <HeroPage id="page2" background="img/advTrg.jpg">
        <Hero data={heropagedata} />
        <NextPage link="#page3" />
      </HeroPage>
      <ThreePage id="page3">
        <PageHeader>Recent</PageHeader>
        {recent.map((post, index) => (
          <CardLink key={index} data={post.frontmatter} />
        ))}
        <NextPage link="#page4" />
      </ThreePage>
      <HeroPage left id="page4" background="img/advTrg.jpg">
        <PageHeader inverted>A Page Title</PageHeader>
        <Hero data={heropagedata} />
        <NextPage link="#page5" />
      </HeroPage>
      <FourPage id="page5">
        <PageHeader>Test of Post Slug Function</PageHeader>
        {selected_posts.map((post, index) => (
          <CardLink key={index} data={post.frontmatter} />
        ))}
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

const PageSwitch = ({ data }) => {
  switch (data.type) {
    case "hero":
      return <h1>Hero</h1>;
    case "recent":
      return <h1>Recent</h1>;
    case "3items":
      return <h1>3 Items</h1>;
    case "4item":
      return <h1>4 Items</h1>;
    case "4chequed":
      return <h1>Chequed</h1>;
  }
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
        }
      }
    }

    recent: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { template: { eq: "post" } } }
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
