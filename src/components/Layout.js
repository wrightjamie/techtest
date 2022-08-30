import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { GlobalStyle } from "../theme/globalStyle";

import { styled } from "styled-components";

import Header from "./header/header";
import Footer from "./footer/footer";
import { LayoutContainer, UtilityContainer } from "./utils/utility";

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
        <Header data={data} />
        {lead}
        {children}
      </LayoutContainer>
      <Footer data={data} scrollStop={scrollStop} />
    </>
  );
};

export default Layout;
