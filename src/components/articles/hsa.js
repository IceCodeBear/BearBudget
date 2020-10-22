import React from "react";
import { Container, Header } from "semantic-ui-react";

const HSA = () => (
  <Container text>
    <Header as="h1">What is HSA?</Header>
    <p>
      HSA is a Health Savings Account that is available for people who have a
      high-deductiable health plan. The money that is contributed to a HSA is
      tax-free.
    </p>

    <Header as="h3">What is a high-deductiable health plan?</Header>
    <p>
      A high=deductiable health plan is a low cost health plan with higher
      expenses.
    </p>

    <Header as="h3">What is the limit for HSA?</Header>
    <p>You can contribute up to $3,500 per year.</p>
  </Container>
);

export default HSA;
