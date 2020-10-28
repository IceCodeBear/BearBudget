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

    <p>
      Always prepare for the unexpected. Emergency funds is your safety net for
      the worst case scenarios. An Emergency Fund includes multiple months of
      basic expenses like rent, food, and utilities.
    </p>

    <Header as="h3">How much should I contribute to my emergency fund?</Header>
    <p>
      Well, it depends. Emergency funds can be between 3 to 6 months. If you
      currently work in a minimum wage job, then it would be best to have a 6
      months worth of emergency fund in a high interests savings account.
    </p>
  </Container>
);

export default EmergencyFunds;
