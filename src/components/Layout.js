import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { GlobalStyle } from "../theme/globalStyle";

import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children }) => {
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
  console.log(data);

  return (
    <>
      <GlobalStyle />
      <div>
        <Header data={data} />
        <main>{children}</main>
        <b>anything after the children...</b>
        <Footer data={data} />
      </div>
    </>
  );
};

export default Layout;
