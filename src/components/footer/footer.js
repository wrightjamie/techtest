import React from "react";

const Footer = ({ data }) => (
  <footer>
    <h4>the footer</h4>
    <ul>
      {data.footer.frontmatter.columns.map((column) => (
        <div key={column.id}>
          {column.column_title}
          <ul>
            {column.links.map((link) => (
              <li key={link.link.id}>
                <a href={link.link.url}>{link.link.content}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </ul>
  </footer>
);

export default Footer;
