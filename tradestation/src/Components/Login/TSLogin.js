import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import FormLogin from './FormLogin'

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Header as='h3' textAlign='center'>
          Login
      </Header>
        <FormLogin></FormLogin>
      </Container>
    )
  }
}