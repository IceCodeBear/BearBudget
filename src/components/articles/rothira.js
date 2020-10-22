import React from "react";
import { Container, Header, Table } from "semantic-ui-react";

const RothIRA = () => (
  <Container text>
    <Header as="h1">What is a Roth IRA?</Header>
    <p>
      Roth IRA is a retirement plan that allows you to contribute post-tax money
      to the retirement account.
    </p>

    <Header as="h3">Do you need a Roth IRA?</Header>

    <Header as="h3">What is the limit for Roth IRA?</Header>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Age {"<"} 50</Table.HeaderCell>
          <Table.HeaderCell>Age {">"} 50</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>$6,000</Table.Cell>
          <Table.Cell>$7,000</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
);

export default RothIRA;
