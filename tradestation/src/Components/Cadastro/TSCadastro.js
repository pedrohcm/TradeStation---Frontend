import React, { Component } from 'react'
import { Input, Menu, Button, Container, Header } from 'semantic-ui-react'
import FormCadastro from './FormCadastro'

export default class Cadastro extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Container>
            <Header as='h3' textAlign='center'>
                Cadastro
            </Header>
            <FormCadastro></FormCadastro>
        </Container>
    )
  }
}