import React from "react";
import {
    Container,
    Dropdown,
    Menu,
    Button
} from 'semantic-ui-react'

const navbar = () => (
    <div>
        <Menu fixed='top' inverted>
        <Container>
            <Menu.Item as='a' header>
                <span aria-label="bear" role="img" style={{ marginRight: '1.5em' }}>&#128059;</span>
                BearBudget
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>

            <Dropdown item simple text='Getting Started'>
            <Dropdown.Menu>
                <Dropdown.Item>Budget 101</Dropdown.Item>
                <Dropdown.Item>Savings Account</Dropdown.Item>
                <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Retirement Accounts</span>
                <Dropdown.Menu>
                    <Dropdown.Item>401k</Dropdown.Item>
                    <Dropdown.Item>Roth IRA</Dropdown.Item>
                    <Dropdown.Item>Roth 401k</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown item simple text='Investments'>
            <Dropdown.Menu>
                <Dropdown.Item>Stock Market</Dropdown.Item>
                <Dropdown.Item>Real Estate</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            <Menu.Menu position='right'>
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
)

export default navbar