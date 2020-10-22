import React from "react";
import { Container, Header, Table } from "semantic-ui-react";

const RA401k = () => (
  <Container text>
    <Header as="h1">What is 401k?</Header>
    <p>
      A 401k is a compamy sponsored retirement plan that allows employees to
      contribute a portion of their pre-tax paycheck to the retirement account.
    </p>
    <Header as="h3">Why do you need a 401k?</Header>

    <Header as="h3">What is a employeer match?</Header>

    <Header as="h3">When can I withdraw the money?</Header>
    <p>You can withdraw the money when you are 59.5</p>

    <Header as="h3">What if I withdraw the money before the age 59.5?</Header>
    <p>
      If you withdraw the money early, you are subject to a 10% penalty on top
      of tax.
    </p>

    <Header as="h3">What is the limit for 401k?</Header>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Age {"<"} 50</Table.HeaderCell>
          <Table.HeaderCell>Age {">"} 50</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>$19,500</Table.Cell>
          <Table.Cell>$26,000</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
);

export default RA401k;
