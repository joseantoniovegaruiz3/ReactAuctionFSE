import React, { Component } from 'react'
import { Menu,Container } from 'semantic-ui-react'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted fixed= 'top'>
          <Container>
        <Menu.Item header>
       
          Bids
        </Menu.Item>
        </Container>
      </Menu>
    )
  }
}