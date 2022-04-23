import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
        markdownRemark(frontmatter: { template: { eq: "layout" } }) {
          frontmatter {
            title
            version
            description
            links {
              link {
                content
                url
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
    <main>
      <h1>{data.site.siteMetadata.title}</h1>
      <ul>
        {data.markdownRemark.frontmatter.links.map((link) => (
          <li key={link.link.id}>
            <a href={link.link.url}>{link.link.content}</a>
          </li>
        ))}
      </ul>
      {children}
    </main>
  );
};

export default Layout;
