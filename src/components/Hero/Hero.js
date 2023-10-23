import React from "react";

import styled from "styled-components";
import { colors } from "../../styles/StylesVariables";

import { ReactComponent as Canixir } from "../../assets/images/Canixir.svg";
import { ReactComponent as Blob } from "../../assets/images/Blob.svg";
import HeroMainContent from "./HeroMainContent";
const Hero = () => {
  return (
    <HeroContainer>
      <BlobEl />
      <HeroHeader>
        <CompanyName />
      </HeroHeader>
      <HeroMainContent />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  height: 100vh;
  background-color: ${colors.whitePale};
  border-bottom: 2px solid ${colors.blackMain};
  z-index: 0;
  position: relative;
  overflow-x: hidden;
`;

const BlobEl = styled(Blob)`
  position: absolute;
  height: 50rem;
  min-width: 100vw;
  z-index: 1;
`;
const HeroHeader = styled.div`
  padding: 4rem 0 8rem 0;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const CompanyName = styled(Canixir)`
  height: 5rem;
  width: 25rem;
`;

export default Hero;
