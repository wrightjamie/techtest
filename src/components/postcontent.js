import styled from "styled-components";
import { flow } from "./utils/utility";

export const PostContent = styled.article`
  background-color: var(--white);
  ${flow};
  blockquote {
    border-left: 10px var(--col-light) solid;
    padding-inline: calc(3 * var(--gap));
    &:before {
      position: absolute;
      top: var(--gap);
      left: var(--gap);
      color: var(--col-light);
      content: open-quote;
      font-size: 4em;
      line-height: 0.1em;
      vertical-align: -0.4em;
    }
    &:after {
      position: absolute;
      bottom: 0;
      right: var(--gap);
      color: var(--col-light);
      content: close-quote;
      font-size: 4em;
      line-height: 0.1em;
      vertical-align: -0.4em;
    }
  }
`;
