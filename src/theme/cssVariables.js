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
    --col-header: var(--col-text);
    --col-bg-main: var(--white);

    --gap: 1rem;
    --flow-space: var(--gap);

    --max-width: 64em;
    --min-width: 300px;

    --headerHeight: 3rem;

    --f-sans: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
      Noto Sans, sans-serif;
    --f-s-base: 16px;
    --f-lh-body: 1.6;
    --f-lh-heading: 1.1;
    --f-lh-tight: 1.3;

    --f-s-300: 0.75rem;
    --f-s-400: 1rem;
    --f-s-500: 1.2rem;
    --f-s-600: 1.5rem;
    --f-s-700: 2rem;
    --f-s-900: 3rem;

    --f-w-500: 500;
    --f-w-600: 600;
    --f-w-500: 500;
    --f-w-900: 700;
  }
`;
