import React from 'react';
import {Button,Container,Menu} from 'semantic-ui-react';
interface Props {
    openForm: () => void;

}

export default function NavBar({openForm}:Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px' }} />
                        Bids
                </Menu.Item>
                <Menu.Item name='Bids'/>

                <Menu.Item>
                    <Button OnClick={ openForm} positive content='Create Bid'/>
                </Menu.Item>

            </Container>
        </Menu>
    )

}