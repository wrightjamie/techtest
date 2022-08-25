import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { GlobalStyle } from "../theme/globalStyle";

import { styled } from "styled-components";

import Header from "./header/header";
import Footer from "./footer/footer";
import { LayoutContainer, UtilityContainer } from "./utils/utility";

const Skip = styled.a`
  background: #e77e23;
  height: 30px;
  left: 50%;
  padding: 8px;
  position: absolute;
  transform: translateY(-100%);
  transition: transform 0.3s;
  &:focus {
    transform: translateY(0%);
  }
`;

const Layout = ({ children, lead }) => {
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
      <Skip href="#page1">Skip to content</Skip>
      <LayoutContainer as="main">
        <Header data={data} />
        {lead}
        {children}
      </LayoutContainer>
      <Footer data={data} />
    </>
  );
};

export default Layout;
