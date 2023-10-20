import styled from "styled-components";
import { colors } from "../src/styles/StylesVariables";
import Hero from "./components/Hero";
function App() {
  return (
    <AppWrapper>
      <Hero />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: auto;
  width: 100vw;
  background-color: ${colors.whitePale};
`;

export default App;
