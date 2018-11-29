import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import FormCadastro from './FormCadastro'

export default class Cadastro extends Component {
  render() {
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