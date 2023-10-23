import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../styles/StylesVariables";
import { ReactComponent as PerfumesBottle } from "../../assets/images/PerfumesBottle.svg";

const HeroMainContent = () => {
  return (
    <HeroMainContentContainer>
      <HeadlineContainer>
        <Headline>Nisjeparfymer til hunder</Headline>
        <SubHeadline>
          Dette er en perfekt, rafinert duft. Blanding av eksotiske kryder og
          frukt gjør kjæredyren din, og deg kjempeglad.
        </SubHeadline>
        <CTA>
          <strong>Få</strong> en <strong>gratis</strong> prøve flaske nå!
        </CTA>
      </HeadlineContainer>
      <PerfumesImg />
    </HeroMainContentContainer>
  );
};

const HeroMainContentContainer = styled.div`
  padding: 0 4rem 0 4rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;
const HeadlineContainer = styled.div`
  width: 65%;
`;

const Headline = styled.h1`
  font-family: "Roboto";
  font-style: italic;
  font-weight: 900;
  font-size: 4.5rem;
  letter-spacing: 3px;
  color: ${colors.green};
  margin-bottom: 1rem;
`;
const SubHeadline = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  letter-spacing: 1px;
  color: ${colors.blackMain};
  margin-bottom: 2rem;
`;
const CTA = styled.button`
  background-color: ${colors.orange};
  border: 3px solid ${colors.orange};
  padding: 1.15rem 2.5rem;
  border-radius: 1.25rem;
  font-size: 1.25rem;
  font-family: "Roboto";
  font-weight: 400;
  color: ${colors.blackMain};
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    background-color: white;
    border: 3px solid ${colors.orange};
  }
`;

const PerfumesImg = styled(PerfumesBottle)`
  height: 30rem;
  width: 35rem;
`;
export default HeroMainContent;
