import * as React from "react";
import styled from "styled-components";

import Logo from "../../svg/rafacLogo.svg";
// import Facebook from "../../svg/facebook.svg";
// import Twitter from "../../svg/twitter.svg";
// import Phone from "../../svg/phone.svg";
// import Mail from "../../svg/mail.svg";

import { TopPage, NextPage } from "../page";
import { UtilityContainer, flow, VisHidden } from "../utils/utility";
import { SocialItems } from "../utils/social_items";

const LeadPage = ({ data }) => {
  return (
    <UtilityContainer bleed background="img/Torp.jpg">
      <TopPage overlay fullHeight>
        <LeadPageLogo>
          <Logo />
        </LeadPageLogo>

        <LeadPageTitle>
          <h1>{data.title}</h1>
          <em>{data.tag}</em>
        </LeadPageTitle>
        <LeadPageText>
          <em>{data.content1}</em>
          <p>{data.content2}</p>
        </LeadPageText>
        <LeadPageSocial>
          <SocialItems />
        </LeadPageSocial>
        <NextPage link="#page2" text="Learn More" />
      </TopPage>
    </UtilityContainer>
  );
};

export default LeadPage;

const LeadPageTitle = styled.div`
  flex: 1 1 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: clamp(2rem, 1.125rem + 5vw, 3rem);

    font-variant: small-caps;
    font-weight: var(--f-w-900);
  }
  em {
    color: var(--col-accent);
    font-size: var(--f-s-700);
    font-style: italic;
    font-weight: var(--f-w-600);
  }
`;
const LeadPageText = styled.div`
  ${flow}
  flex: 1 0 25ch;
`;
const LeadPageSocial = styled.nav`
  flex-basis: 100%;
  display: flex;
  justify-content: end;
  font-size: var(--f-s-700);
`;
const LeadPageLogo = styled.div`
  font-size: var(--f-s-900);
  flex-basis: 100%;
  display: grid;
  justify-content: end;
`;
