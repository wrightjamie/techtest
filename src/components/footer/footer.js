import React from "react";
import styled from "styled-components";

import { UtilityContainer } from "../utils/utility";

const Footer = ({ data }) => (
  <FooterStop>
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
  </FooterStop>
);

export default Footer;

const FooterStop = styled(UtilityContainer)`
  //scroll-snap-align: end;
  background-color: var(--col-header);
`;
