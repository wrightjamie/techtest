import React from "react";

import Facebook from "../../svg/facebook.svg";
import Twitter from "../../svg/twitter.svg";
import Phone from "../../svg/phone.svg";
import Mail from "../../svg/mail.svg";

export const SocialItems = () => {
  return (
    <ul>
      <li>
        <a href="facebook.com">
          <Facebook />
        </a>
      </li>
      <li>
        <a href="twitter.com">
          <Twitter />
        </a>
      </li>
      <li>
        <a href="phone.com">
          <Phone />
        </a>
      </li>
      <li>
        <a href="contact.com">
          <Mail />
        </a>
      </li>
    </ul>
  );
};
