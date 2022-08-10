import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { flow } from "./utils/utility";

const Card = ({}) => {
  const images = ["advTrg.jpg", "glider.jpg", "tutor.jpg"];
  const image = "img/" + images[Math.floor(Math.random() * images.length)];

  return (
    <>
      <StyledSection>
        <img src={image} />
        <div>
          <h2>A Title</h2>
          <p>
            Cras egestas sed purus consequat convallis. Nunc a libero rutrum,
            mollis dui ut, mattis lacus.
          </p>
        </div>
      </StyledSection>
    </>
  );
};

export default Card;

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;

  --heading: var(--f-s-heading, var(--f-s-500));

  img {
    position: absolute;
    object-fit: cover;
    inset: 0;
    height: 100%;
    width: 100%;
  }
  div {
    position: absolute;
    inset: auto 0 0;

    background-color: var(--col-img-cover);
    padding: calc(var(--gap) / 2);
    ${flow}
  }
  h2 {
    font-size: var(--heading);
    font-weight: var(--f-w-600);
    line-height: var(--f-lh-heading);
    color: var(--white);
  }
  p {
    color: var(--col-light);
  }
`;
