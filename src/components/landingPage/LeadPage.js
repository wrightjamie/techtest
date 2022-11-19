import * as React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { useLandingData } from "../../hooks/useLandingData";
import { useSiteMetaData } from "../../hooks/useSiteMetaData";

import Logo from "../../svg/rafacLogo.svg";

import { TopPage, NextPage } from "../page";
import { UtilityContainer, flow } from "../utils/utility";
import { SocialItems } from "../utils/social_items";

const LeadPage = () => {
  const landing = useLandingData();
  const { title } = useSiteMetaData();

  const bgimage = getImage(landing.bgimage);
  return (
    <UtilityContainer bleed gridrow="1/2" id="#content">
      <GImage image={bgimage} alt="Background Image" />
      <TopPage overlay fullHeight>
        <LeadPageLogo>
          <Logo />
        </LeadPageLogo>
        <LeadPageTitle>
          <h1>{title}</h1>
          <em>{landing.tag}</em>
        </LeadPageTitle>
        <LeadPageText>
          <em>{landing.em}</em>
          <p>{landing.para}</p>
        </LeadPageText>
        <LeadPageSocial>
          <SocialItems />
        </LeadPageSocial>
        <NextPage link="#page0" text="Learn More" />
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
  margin-top: 2rem;
  font-size: var(--f-s-900);
  flex-basis: 100%;
  display: grid;
  justify-content: end;
`;

const GImage = styled(GatsbyImage)`
  grid-column: 1/-1;
  grid-row: 1/2;
  max-height: 100vh;
`;
