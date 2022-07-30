import React from "react";
import { Link } from "gatsby";

const Card = ({}) => {
  const images = ["advTrg.jpg", "glider.jpg", "tutor.jpg"];
  const image = "img/" + images[Math.floor(Math.random() * images.length)];

  return (
    <section>
      <Link to="/">
        <img src={image} />
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
