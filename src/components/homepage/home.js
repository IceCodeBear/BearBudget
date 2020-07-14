import React from "react";
import { Container, Header } from "semantic-ui-react";

const Home = () => (
    <Container text>
        <Header as="h1">Welcome to BearBudget</Header>
        <Header as="h2">Budget The{" "}
            <span aria-label="bear" role="img">
            &#128059;
            </span>{" "}
            Necessities
        </Header>

    </Container>
);

export default Home;