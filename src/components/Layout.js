import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { GlobalStyle } from "../theme/globalStyle";

import Header from "./header/header";
import Footer from "./footer/footer";
import { LayoutContainer } from "./utils/utility";
import Jump_to_content from "./jump_to_content";
import JumpToContent from "./jump_to_content";

const Layout = ({ children, lead, scrollStop }) => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
        header: markdownRemark(frontmatter: { template: { eq: "header" } }) {
          frontmatter {
            links {
              link {
                content
                url
              }
            }
          }
        }
        footer: markdownRemark(frontmatter: { template: { eq: "footer" } }) {
          frontmatter {
            columns {
              column_title
              links {
                link {
                  content
                  icon
                  url
                }
              }
            }
            copyright
            year
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <>
      <GlobalStyle />
      <LayoutContainer as="main">
        <JumpToContent href="#content">Jump to Content</JumpToContent>
        <Header data={data} />
        {lead}
        {children}
      </LayoutContainer>
      <Footer data={data} scrollStop={scrollStop} />
    </>
  );
};

export default Layout;
