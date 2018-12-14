import React, { Component } from 'react'
import { Container, Header, Segment, Image, Grid, Divider, Table, Icon } from 'semantic-ui-react'
import FormCadastro from '../Cadastro/FormCadastro'

export default class InfoAnuncio extends Component {
  render() {
    return (
      <Container>
        <Header as='h3' textAlign='center'>
          Cadastro
            </Header>
        <Segment>
          <Grid columns={2} relaxed='very'>
            <Grid.Column>
              <p>
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
              </p>
              <p>
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
              </p>
              <p>
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
              </p>
              <p>
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
              </p>
            </Grid.Column>
            <Grid.Column>
              <Divider horizontal>
                <Header as='h4'>
                  <Icon name='tag' />
                  Description
      </Header>
              </Divider>

              <p>
                Doggie treats are good for all times of the year. Proven to be eaten by 99.9% of all dogs
                worldwide.
    </p>

              <Divider horizontal>
                <Header as='h4'>
                  <Icon name='bar chart' />
                  Specifications
      </Header>
              </Divider>

              <Table definition>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell width={2}>Size</Table.Cell>
                    <Table.Cell>1" x 2"</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Weight</Table.Cell>
                    <Table.Cell>6 ounces</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Color</Table.Cell>
                    <Table.Cell>Yellowish</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Odor</Table.Cell>
                    <Table.Cell>Not Much Usually</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid>

          <Divider vertical>And</Divider>
        </Segment>
      </Container>
    )
  }
}