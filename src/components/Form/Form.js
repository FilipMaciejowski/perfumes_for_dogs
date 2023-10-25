import styled from "styled-components";
import { colors } from "../../styles/StylesVariables";
import OrderForm from "./OrderForm";
import { ReactComponent as Pawl } from "../../assets/images/Pawl.svg";

const Form = () => {
  return (
    <FormSection id="form-1">
      <FormContainer>
        <FormHeadline>Bestillingsskjema</FormHeadline>
        <OrderForm />
        {/* <Pawl /> */}
      </FormContainer>
    </FormSection>
  );
};

const FormSection = styled.section`
  height: 100vh;
  padding: 6rem 0 2rem 0;
  background-color: ${colors.whitePale};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 50%;
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: -10px 5px 104px 19px rgba(255, 164, 113, 0.33);
`;
const FormHeadline = styled.h1`
  font-size: 3rem;
  font-family: "Roboto";
  font-weight: 400;
  text-align: center;
  text-decoration: underline solid ${colors.orange} 6px;
  text-underline-offset: 1rem;
`;

export default Form;
