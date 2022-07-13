import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Card = ({}) => {
  return (
    <section>
      <Link to="/">
        <img src="img/dsc01214.jpg" />
        <div>
          <h3>A Title</h3>
          <p>
            Cras egestas sed purus consequat convallis. Nunc a libero rutrum,
            mollis dui ut, mattis lacus.
          </p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
