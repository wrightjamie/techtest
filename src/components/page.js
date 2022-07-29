import styled from "styled-components";

export const Page = styled.section`
  height: ${(props) =>
    props.fullHeight ? "100vh" : "calc(100vh - var(--headerHeight))"};
  background-color: ${(props) =>
    props.overlay ? "var(--col-img-cover)" : "var(--col-bg-main)"};

  scroll-snap-align: start;
  overflow: hidden;

  display: grid;

  padding-inline: var(--gap);
`;

export const TopPage = styled(Page)`
  color: var(--col-light);
  grid-template:
    "title logo" auto
    "title text" auto
    "title social" auto
    "footer footer" auto/
    1fr 1fr;
  @media (orientation: portrait) {
    grid-template:
      "logo" auto
      "title" auto
      "text" 1fr
      "social" auto
      "footer" auto;
  }
`;

export const HeroPage = styled(Page)`
  grid-template:
    "header header" auto
    "a b" 1fr
    "footer footer" auto/
    1fr 1fr;
  @media (orientation: portrait) {
    grid-template:
      "header" auto
      "a" 1fr
      "b" 1fr
      "footer" auto;
  }
`;
export const ThreePage = styled(Page)`
  grid-template:
    "header header header" auto
    "a b c" 1fr
    "footer footer footer" auto;
  @media (orientation: portrait) {
    grid-template:
      "header" auto
      "a" 1fr
      "b" 1fr
      "c" 1fr
      "footer" auto;
  }
`;

export const FourPage = styled(Page)`
  grid-template:
    "header header header" auto
    "a a b" 1fr
    "c d d" 1fr
    "footer footer footer" auto;
  @media (orientation: portrait) {
    grid-template:
      "header header" auto
      "a a" 1fr
      "b c" 1fr
      "d d" 1fr
      "footer footer" auto;
  }
`;

export const ChequeredPage = styled(Page)`
  grid-template:
    "header header" auto
    "a b" 1fr
    "c d" 1fr
    "footer footer" auto /
    1fr 1fr;
  @media (orientation: portrait) {
    grid-template:
      "header" auto
      "a" 1fr
      "b" 1fr
      "c" 1fr
      "d" 1fr
      "footer" auto/
      1fr;
  }
`;
