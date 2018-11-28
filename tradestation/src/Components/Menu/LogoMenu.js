import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class LogoMenu extends Component {
  render() {
    return (
        <Menu.Item>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/200px-PlayStation_logo.svg.png' />
        </Menu.Item>
    )
  }
}