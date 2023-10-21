import styled from "styled-components";
import { colors } from "../../src/styles/StylesVariables";
const Hero = () => {
  return <HeroContainer></HeroContainer>;
};

const HeroContainer = styled.div`
  height: 100vh;
  background-color: ${colors.whitePale};
`;

export default Hero;
