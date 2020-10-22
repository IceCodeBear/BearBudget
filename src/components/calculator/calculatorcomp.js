import React from "react";
import { Container, Header } from "semantic-ui-react";
// import Calculator1 from "./calculator"

const initial_data = {
    current_age: 25,
    retirement_age: 68,
    current_savings: 1000,
    annual_deposit: 6000,
    interest_rate: 8,
    years_after_retirement: 20,
    desired_retirement_income: 100000,
}

const Calculator = () => (

    <div>

        <Container text>
            <Header as="h1">Retirement Calculator</Header>
            <Header as="h2"></Header>
            {/* <Calculator1 {...initial_data} /> */}
        </Container>
    </div>
);

export default Calculator;