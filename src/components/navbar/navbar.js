import React from "react";
import { Container, Dropdown, Menu, Button } from "semantic-ui-react";

const navbar = () => (
    <div>
        <Menu fixed="top" inverted>
        <Container>
            <Menu.Item as="a" header href="/">
            <span aria-label="bear" role="img" style={{ marginRight: "1em" }}>
                &#x1f43c;
            </span>

            BearBudget
            </Menu.Item>

            <Dropdown item simple text="Getting Started">
            <Dropdown.Menu>
                <Dropdown.Item href="/budget101">Budget 101</Dropdown.Item>
                <Dropdown.Item href="/savingsaccount">
                Savings Account
                </Dropdown.Item>
                <Dropdown.Item>
                <i className="dropdown icon" />
                <span className="text">Retirement Accounts</span>
                <Dropdown.Menu>
                    <Dropdown.Item href="/401k">401k</Dropdown.Item>
                    <Dropdown.Item href="/rothira">Roth IRA</Dropdown.Item>
                    <Dropdown.Item href="/roth401k">Roth 401k</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            <Dropdown item simple text="Investments">
            <Dropdown.Menu>
                <Dropdown.Item href="/stockmarket">Stock Market</Dropdown.Item>
                <Dropdown.Item href="/realestate">Real Estate</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            <Menu.Item as="a" href="/creditcards">
                Credit Cards
            </Menu.Item>

            <Menu.Item as="a" href="/creditscore">
                Credit Score
            </Menu.Item>

            <Menu.Menu position="right">
            <Menu.Item>
                <Button primary>Sign up</Button>
            </Menu.Item>

            <Menu.Item>
                <Button>Log-in</Button>
            </Menu.Item>
            </Menu.Menu>
        </Container>
        </Menu>
    </div>
);

export default navbar;
