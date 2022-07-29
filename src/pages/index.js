import * as React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

import Logo from "../svg/rafacLogo.svg";

import Card from "../components/card";
import { Page, TopPage } from "../components/page";
import { UtilityContainer } from "../components/utils/utility";

// markup
const IndexPage = ({ data }) => {
  const landing = data.landing.frontmatter.landing;
  const recent = data.recent.edges;
  const meta = data.site.siteMetadata;

  const dummy = {
    landing: {
      content:
        "Cras egestas sed purus consequat convallis. Nunc a libero rutrum, mollis dui ut, mattis lacus. Etiam lobortis tortor a mi consequat, ac elementum nisl hendrerit. Vestibulum a malesuada ligula. Integer aliquam eu ligula sed egestas. Duis sed nunc massa. Donec nec leo ac dui hendrerit lacinia dictum ac justo.",
      cta1: { title: "Join Us", to: "joinus" },
      cta2: { title: "Learn more", to: "learnmore" },
    },
  };

  const LeadPageTitle = styled.div`
    grid-area: title;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: var(--f-s-900);
      font-variant: small-caps;
      font-weight: var(--f-w-900);
    }
    em {
      color: var(--col-accent);
      font-size: var(--f-s-700);
      font-style: italic;
      font-weight: var(--f-w-600);
    }
  `;
  const LeadPageText = styled.div`
    grid-area: text;
  `;
  const LeadPageSocial = styled.nav`
    grid-area: social;
  `;
  const LeadPageLogo = styled(Logo)`
    height: 3em;
    grid-area: logo;
  `;

  const LeadPage = () => (
    <>
      <UtilityContainer bleed background="img/Torp.jpg">
        <TopPage overlay fullHeight>
          <LeadPageTitle>
            <h1>{meta.title}</h1>
            <em>{landing.tag}</em>
          </LeadPageTitle>
          <LeadPageLogo />
          <LeadPageText>
            <em>{dummy.landing.content}</em>
            <p>{dummy.landing.content}</p>
            <div>
              <Link to={dummy.landing.cta1.to}>{dummy.landing.cta1.title}</Link>
              <Link to={dummy.landing.cta2.to}>{dummy.landing.cta2.title}</Link>
            </div>
          </LeadPageText>
          <LeadPageSocial>
            <a href="facebook.com">F</a>
            <a href="twitter.com">T</a>
            <a href="contact.com">M</a>
            <span>|</span>
            <a href="button">L</a>
          </LeadPageSocial>
        </TopPage>
      </UtilityContainer>
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

const PageHeader = styled.h2`
  grid-area: header;
  background-color: var(--col-img-cover);
  margin: var(--gap);
  padding: 0 var(--gap);
  color: var(--white);
  font-variant: small-caps;
  font-weight: 600;
  font-size: clamp(2rem, -6rem + 24vw, 3rem);
  word-spacing: -0.5ex;
  &:before {
    content: "#";
  }
`;
