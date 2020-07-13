import React from "react";
import {
    Container,
    Dropdown,
    Menu,
    Image,
    Button
} from 'semantic-ui-react'

const navbar = () => (
    <div>
        <Menu fixed='top' inverted>
        <Container>
            <Menu.Item as='a' header>
                <Image size='mini' src="" style={{ marginRight: '1.5em' }} />
                BearBudget
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>

            <Dropdown item simple text='Getting Started'>
            <Dropdown.Menu>
                <Dropdown.Item>Budget 101</Dropdown.Item>
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