import styled from "styled-components";
import { flow } from "./utils/utility";

export const PostContent = styled.article`
  background-color: var(--white);
  padding: var(--gap);
  display: grid;
  grid-template-columns: 1fr min(100%, 40rem) 1fr;
  & > * {
    grid-column: 2/3;
  }

  ${flow};
  em {
    font-size: var(--f-s-400);
    font-style: italic;
  }

  ul,
  ol {
    list-style-position: outside;
    margin-left: 1rem;
  }

  blockquote {
    border-left: 10px var(--col-light) solid;
    padding-inline: var(--gap);
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
  hr {
    border-top: 1px dashed var(--col-light);
  }
`;
