import React from "react";
import styled, { keyframes } from "styled-components";
import { VisHidden, flex } from "./utils/utility";

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

  > section:nth-of-type(1) {
    grid-area: a;
  }
  > section:nth-of-type(2) {
    grid-area: b;
  }
  > section:nth-of-type(3) {
    grid-area: c;
  }
  > section:nth-of-type(4) {
    grid-area: d;
  }
`;

export const TopPage = styled(Page)`
  color: var(--col-light);
  display: flex;
  flex-wrap: wrap;
`;

export const HeroPage = styled(Page)`
  grid-template:
    "header header" auto
    ${(props) => (props.left ? `"content a" 1fr` : `"a content" 1fr`)}
    "footer footer" auto/
    1fr 1fr;
  @media (orientation: portrait) {
    grid-template:
      "header" auto
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
    "footer footer footer" auto/1fr 1fr 1fr;
  @media (orientation: portrait) {
    grid-template:
      "header header" auto
      "a a" 1fr
      "b c" 1fr
      "d d" 1fr
      "footer footer" auto/ 1fr 1fr;
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

export const PageHeader = styled.h2`
  grid-area: header;

  padding: 0 var(--gap);

  ${(props) =>
    props.inverted
      ? `
      background-color: var(--col-img-cover);
color: var(--white);`
      : `color: var(--col-header);`}
  font-variant: small-caps;
  font-weight: 600;
  font-size: clamp(2rem, -6rem + 24vw, 3rem);
  word-spacing: -0.5ex;
  &:before {
    content: "#";
  }
`;

export const NextPage = ({ link, text }) => {
  return (
    <>
      <NextPageContainer>
        <a href={link}>
          {/* {text && <NextPageText>{text}</NextPageText>} */}
          <NextPageArrow>&#8681;</NextPageArrow>
        </a>
      </NextPageContainer>
    </>
  );
};

const breatheAnimation = keyframes`
 0% {
  background-color:transparent;
  box-shadow: none;
  //color:var(--col-text);
}
 10% {
  background-color: rgb(0 0 0 / 0.2);
  box-shadow: 0 0 0.5rem 1rem rgb(0 0 0 / 0.2);
  //color:var(--white);
}
15% {
  background-color: rgb(0 0 0 / 0.2);
  box-shadow: 0 0 .5rem 1rem rgb(0 0 0 / 0.2);
//  color:var(--white);
}
 25% {
  background-color:transparent;
  box-shadow: none;
//    color:var(--col-text);
 }
`;

const NextPageContainer = styled.div`
  flex-basis: 100%;
  grid-area: footer;
  display: grid;
  justify-content: center;
  align-items: end;
  line-height: var(--f-lh-heading);
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1000vh;
    transition: all 0.5s ease-in-out;
    height: calc(var(--f-s-700) * var(--f-lh-heading));
    width: calc(var(--f-s-700) * var(--f-lh-heading));
    &:hover {
      background: rgb(0 0 0 / 0.2);
      box-shadow: 0 0 10px 10px rgb(0 0 0 / 0.2);
      color: red;
      text-decoration: none;
    }
    animation-name: ${breatheAnimation};
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
`;
//TODO Accessibility of Next Link
//TODO Bring in a text element to Next Link

const NextPageText = styled.div`
  font-size: var(--f-s-400);
`;
const NextPageArrow = styled.div`
  font-size: var(--f-s-700);
  font-weight: var(--f-w-900);
  text-align: center;
`;
