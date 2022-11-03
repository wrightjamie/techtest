import styled from "styled-components";

const ThemeToggleButton = styled.button`
  --icon-fill-hover: var(--col-v-light);
  --icon-fill: var(--red);

  --size: 2rem;

  @media (hover: none) {
    --size: 48px;
  }

  background: none;
  border: none;
  padding: 0;

  inline-size: var(--size);
  block-size: var(--size);
  aspect-ratio: 1;
  border-radius: 50%;

  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  outline-offset: 5px;

  & > svg {
    inline-size: 100%;
    block-size: 100%;
    stroke-linecap: round;

    & > :is(.moon, .sun, .sun-beams) {
      transform-origin: center center;
    }

    & > :is(.moon, .sun) {
      fill: var(--icon-fill);

      .theme-toggle:is(:hover, :focus-visible) > & {
        fill: var(--icon-fill-hover);
      }
    }

    & > .sun-beams {
      stroke: var(--icon-fill);
      stroke-width: 2px;

      .theme-toggle:is(:hover, :focus-visible) & {
        stroke: var(--icon-fill-hover);
      }
    }
    body.dark & {
      & > .sun {
        transform: scale(1.75);
      }

      & > .sun-beams {
        opacity: 0;
      }

      & > .moon > circle {
        transform: translateX(-7px);

        @supports (cx: 1) {
          transform: translateX(0);
          cx: 17;
        }
      }
    }
    //@media (prefers-reduced-motion: no-preference) {
    & > .sun {
      transition: transform 0.5s ease;
    }

    & > .sun-beams {
      transition: transform 0.5s ease, opacity 0.5s ease;
    }

    body.dark & {
      & > .sun {
        transform: scale(1.75);
        transition-timing-function: ease;
        transition-duration: 0.25s;
      }

      & > .sun-beams {
        transform: rotateZ(-25deg);
        transition-duration: 0.15s;
      }

      & .moon > circle {
        transform: translateX(-7px);
        transition: transform 0.25s ease;

        @supports (cx: 1) {
          transform: translateX(0);
          cx: 17;
          transition: cx 0.25s ease;
        }
      }
    }

    body.dark & {
      & > .moon > circle {
        transition-delay: 0.25s;
        transition-duration: 0.5s;
      }
    }
    //}
  }
`;

export default ThemeToggleButton;
