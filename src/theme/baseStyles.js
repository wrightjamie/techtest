import { css } from "styled-components";

export const Base = css`
  html {
    font-size: var(--f-s-base);
    font-family: var(--f-sans);
    color: var(--col-text);
  }
  body {
    height: 100%;
    min-width: 360px;
    overflow: hidden;
    background-color: var(--col-bg);
  }
  #gatsby-focus-wrapper {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-padding-top: var(--headerHeight);
  }
  svg {
    height: 1em;
  }
  em {
    font-size: var(--f-s-500);
    font-weight: var(--f-w-500);
    font-style: normal;
  }
`;
