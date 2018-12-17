import React, { Component } from 'react'
import { Container, Header, Segment, Image, Grid, Divider, Table, Icon } from 'semantic-ui-react'
import FormCadastro from '../Cadastro/FormCadastro'

export default class InfoAnuncio extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Header as='h3' textAlign='center'>
          {this.props.anuncio.nome}
        </Header>
        <Segment>
          <Grid columns={2} relaxed='very'>
            <Grid.Column width={5}>
              <Image src={this.props.anuncio.imagem} fluid/>
            </Grid.Column>
            <Grid.Column>
              <Divider horizontal>
                <Header as='h4'>
                  <Icon name='tag' />
                  Descrição
      </Header>
              </Divider>

              <p>
                {this.props.anuncio.descricao}
              </p>

              <Divider horizontal>
                <Header as='h4'>
                  <Icon name='bar chart' />
                  Detalhes
      </Header>
              </Divider>

              <Table definition>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell width={2}>Preço</Table.Cell>
                    <Table.Cell>R$ {this.props.anuncio.valor}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Anúncio de</Table.Cell>
                    <Table.Cell>{this.props.anuncio.usuario}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Plataforma</Table.Cell>
                    <Table.Cell>{this.props.anuncio.plataforma}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Interesse</Table.Cell>
                    <Table.Cell>{this.props.anuncio.interesse}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Estado</Table.Cell>
                    <Table.Cell>{this.props.anuncio.estado}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    )
  }
}