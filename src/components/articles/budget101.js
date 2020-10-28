import React from "react";
import { Container, Header } from "semantic-ui-react";

const Budget101 = () => (
  <Container text>
    <Header as="h1">Budget 101</Header>

    <Header as="h3">What is a budget?</Header>
    <p>
      There are two different types of budgets out there, corporate and personal
      budgets. A budget is a financial plan for a specific period. For a
      corporate budget, it is usually calculated for a year. For a personal
      budget, it is usually best to set one per month. A personal budget should
      include an estimate of monthly expenses such as mortgage/rent, utility,
      insurances, food, etc.
    </p>

    <Header as="h3">Do you need a budget?</Header>
    <p>
      Yes, anyone can benefit from budgeting regardless of their income. A
      budget can help you monitor where your money is going and figure out if
      you are on track for retirement.
    </p>

    <Header as="h3">How much should I budget?</Header>
    <p>If you are new to budget, you can start with the 50/30/20 plan.</p>
    <div className="ui huge image">
      <img alt="" src={require("../img/budget.png")} />
      <h6>Budget Rule by mint</h6>
    </div>

    <p>
      Based on the 50/30/20 plan, you can diverge 50% of your take-home pay to
      essential needs. These include your basic necessities to survive, such as
      mortgage/rent, utility, and food. Next, you can budget 30% of your pay to
      expenses that you want like Netflix subscription, shopping, games, dining,
      travel, etc. Finally, the remaining 20% should contribute to your savings
      account and retirement account.
    </p>
  </Container>
);

export default Budget101;
