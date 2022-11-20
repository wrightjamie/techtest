import React from "react";
import Link from "./utils/link";
import styled from "styled-components";
import { flow } from "./utils/utility";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CardLink = ({ data }) => {
  const featImage = getImage(data.featured);
  return (
    <>
      <StyledSection>
        <Link to={data.slug}>
          <GImage image={featImage} alt="Image" />
          <div className="cardText">
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

  .gatsby-image-wrapper {
  }

  .cardText {
    position: absolute;
    inset: 0;

    opacity: 0.7;
    background-color: var(--col-img-cover);
    transition: all 0.5s ease-in-out;
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
    .gatsby-image-wrapper {
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

const GImage = styled(GatsbyImage)`
  transition: all 0.5s ease-in-out;
  position: absolute !important;
  inset: 0;
`;
