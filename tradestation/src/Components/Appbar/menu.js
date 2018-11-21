import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class Appbar extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable poiting secondary color='red'>
        <Menu.Item>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/200px-PlayStation_logo.svg.png' />
        </Menu.Item>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          content='Seus anúncios'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}