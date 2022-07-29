import styled from "styled-components";

export const Page = styled.section`
  height: ${(props) =>
    props.fullHeight ? "100vh" : "calc(100vh - var(--headerHeight))"};
  background-color: ${(props) =>
    props.overlay ? "var(--col-img-cover)" : "var(--col-bg-main)"};
  ${(props) =>
    props.background
      ? `background-image: url(${props.background});
      background-attachment: fixed;
    background-position: 50%;
    background-size: cover;`
      : ""}

  scroll-snap-align: start;
  overflow: hidden;

  display: grid;
  gap: var(--gap);

  padding: var(--gap);
`;

export const TopPage = styled(Page)`
  color: var(--col-light);
  display: flex;
  flex-wrap: wrap;
`;

export const HeroPage = styled(Page)`
  grid-template:
    "a content" 1fr
    "footer footer" auto/
    1fr 1fr;
  @media (orientation: portrait) {
    grid-template:
      "content" 1fr
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
