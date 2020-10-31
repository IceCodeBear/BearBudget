import React from "react";
import { Container, Header, Button } from "semantic-ui-react";

const Home = () => (
  <div className="App-header">

    <Container text>
      <Header as="h1">Welcome to BearBudget!</Header>
      <Header as="h2">
        Budget The{" "}
        <span aria-label="bear" role="img">
          &#128059;
        </span>{" "}
        Necessities
      </Header>
    </Container>

    <Button className="calButton" href="/calculator">
      Go to Calculator
    </Button>
  </div>
);

export default Home;
