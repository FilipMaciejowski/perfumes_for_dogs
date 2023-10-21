import styled from "styled-components";
import { colors } from "../src/styles/StylesVariables";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
function App() {
  return (
    <AppWrapper>
      <Hero />
      <Footer />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: ${colors.whitePale};
`;

export default App;
