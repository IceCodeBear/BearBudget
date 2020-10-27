import React from "react";
import { Container, Header } from "semantic-ui-react";

const Roth401k = () => (
  <Container text>
    <Header as="h1">What is Roth 401k?</Header>
    <p>
      Roth 401k is another employer-sponsored retirement account just like the
      401k except that the amount you contribute is after taxes. When comparing
      Roth 401k to the traditional 401k, the major difference is that the Roth
      401k gives the benefit of tax-free withdrawals.
    </p>

    <Header as="h3">Why do you need a Roth 401k?</Header>
    <p>
      Like the traditional 401k, you should contribute money into the retirement
      account to be prepared for retirement.{" "}
    </p>
  </Container>
);

export default Roth401k;
