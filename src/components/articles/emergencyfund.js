import React from "react";
import { Container, Header } from "semantic-ui-react";

const EmergencyFunds = () => (
  <Container text>
    <Header as="h1">Emergency Fund</Header>

    <Header as="h3">What is a Emergency Fund?</Header>
    <p>
      An emergency fund is money that you saved up and only use in case of
      emergency.
    </p>

    <div className="ui huge image">
      <img alt="" src={require("../img/Emergency-Savings-Fund.jpg")} />
      <h6>Image by Your Money Line</h6>
    </div>

    <p>Always prepare for the unexpected. </p>
    <Header as="h3">How much should I contribute to my emergency fund?</Header>
    <p>Well, it depends. Emergency funds can be between 3 to 6 months.</p>
  </Container>
);

export default EmergencyFunds;
