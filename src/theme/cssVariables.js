import { css } from "styled-components";

export const Variables = css`
  :root {
    --blue: rgba(0, 47, 95);
    --red: rgb(198, 12, 48);
    --white: rgb(255, 255, 255);

    --col-heading: rgb(49, 99, 158);
    --col-text: rgb(27, 50, 87);
    --col-light: rgb(183, 203, 226);
    --col-accent: rgb(255, 217, 17);

    --col-img-cover: rgba(27, 50, 87, 0.7);
    --col-bg: var(--col-light);

    --gap: 1rem;

    --headerHeight: 3rem;

    --f-sans: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
      Noto Sans, sans-serif;
    --f-s-base: 16px;
    --f-lh-body: 1.6;
    --f-lh-heading: 1.1;
  }
`;
