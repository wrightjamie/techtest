import styled from "styled-components";
import { flow } from "./utils/utility";

export const PostContent = styled.article`
  background-color: var(--white);
  padding-block: var(--gap);
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
  }
  hr {
    border-top: 1px dashed var(--col-light);
  }
`;
