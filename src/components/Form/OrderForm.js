import styled from "styled-components";
import { colors } from "../../styles/StylesVariables";
import Name from "./Name";
import Email from "./Email";
import Address from "./Address";

const OrderForm = () => {
  return (
    <OrderForm>
      <Name />
      <Email />
      <Address />
    </OrderForm>
  );
};

export default OrderForm;
