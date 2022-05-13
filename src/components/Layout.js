import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

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
      <b>Start of header</b>
      <h1>{data.site.siteMetadata.title}</h1>
      SIte links from md...
      <ul>
        {data.header.frontmatter.links.map((link) => (
          <li key={link.link.id}>
            <a href={link.link.url}>{link.link.content}</a>
          </li>
        ))}
      </ul>
      <b>End of header... children next</b>
      {children}
      <b>anything after the children...</b>
    </main>
  );
};

export default Layout;
