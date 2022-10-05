import React from "react";

import Facebook from "../../svg/facebook.svg";
import Twitter from "../../svg/twitter.svg";
import Phone from "../../svg/phone.svg";
import Mail from "../../svg/mail.svg";

const Icon = ({ icon }) => {
  switch (icon) {
    case "facebook":
      return <Facebook />;
    case "twitter":
      return <Twitter />;
    case "mail":
      return <Mail />;
    case "phone":
      return <Phone />;
    case "none":
    default:
      return <></>;
  }
};

export default Icon;
