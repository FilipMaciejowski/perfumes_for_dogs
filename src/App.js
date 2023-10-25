import React, {useRef} from "react";
import styled from "styled-components";
import { colors } from "../src/styles/StylesVariables";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer";
import Form from "./components/Form/Form";

const App = () => {

  // const formEl = useRef()
  // formEl.scrollIntoView()
  return (
    <AppWrapper>
      <Hero />
      <Form />
      <Footer />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  background-color: ${colors.whitePale};
`;

export default App;
