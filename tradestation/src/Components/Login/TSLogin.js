import React, { Component } from 'react'
import { Input, Menu, Button, Container, Header, Icon } from 'semantic-ui-react'
import FormLogin from './FormLogin'

export default class Login extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Container>
            <Header as='h2' icon textAlign='center'>
            <Icon name='laptop' circular />
            <Header.Content>Em construção...</Header.Content>
          </Header>
        </Container>
    )
  }
}