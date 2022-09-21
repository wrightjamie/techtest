import React from "react";
import Link from "./utils/link";
import styled from "styled-components";
import { flow } from "./utils/utility";

const CardLink = ({ data }) => {
  const images = ["advTrg.jpg", "glider.jpg", "tutor.jpg"];
  const image = "img/" + images[Math.floor(Math.random() * images.length)];

  console.log(data.thumbnail);

  return (
    <>
      <StyledSection>
        <Link to={data.slug}>
          <img src={image} />
          <div>
            <h2>{data.title}</h2>
            {data.excerpt && <p>{data.excerpt}</p>}
          </div>
        </Link>
      </StyledSection>
    </>
  );
};

export default CardLink;

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;

  --heading: var(--f-s-heading, var(--f-s-500));

  * {
    transition: all 0.5s ease-in-out;
  }

  img {
    position: absolute;
    object-fit: cover;
    inset: 0;
    height: 100%;
    width: 100%;
  }
  div {
    position: absolute;
    inset: 0;

    opacity: 0.7;
    background-color: var(--col-img-cover);
    transform: translateY(
      calc(100% - var(--heading) * var(--f-lh-heading) - var(--gap))
    );
    padding: calc(var(--gap) / 2);
    ${flow}
  }
  h2 {
    font-size: var(--heading);
    font-weight: var(--f-w-600);
    line-height: var(--f-lh-heading);
    color: var(--col-light);
  }
  p {
    color: var(--col-light);
  }

  &:hover,
  &:focus-within {
    img {
      transform: scale(1.05);
    }
    div {
      opacity: 1;
      transform: none;
    }
    h2 {
      color: var(--white);
      text-decoration: underline;
    }
  }
`;
