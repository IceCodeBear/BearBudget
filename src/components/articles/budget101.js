import React from "react";
import { Container, Header } from "semantic-ui-react";

const Budget101 = () => (
  <Container text>
    <Header as="h1">Budget 101</Header>

    <Header as="h3">What is a budget?</Header>

    <Header as="h3">Why do you need a budget?</Header>

    <Header as="h3">How much should I budget?</Header>
    <p>If you are new to budget, you can start with the 50/30/20 plan.</p>
    <div className="ui huge image">
      <img alt="" src={require("../img/budget.png")} />
      <h6>Budget Rule by mint</h6>
    </div>
  </Container>
);

export default Budget101;
