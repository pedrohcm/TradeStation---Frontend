import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Button, Card, Image, Label } from 'semantic-ui-react'

export default class Anuncios extends Component {

  checkColor = platform => {
    var name = platform.replace(/ .*/, '');
    switch (name) {
      case "SWITCH":
        return "red";
      case "XONE":
        return "green";
      case "PS4":
        return "blue"
      case "PC":
        return "black"
      default:
        return "yellow"
    }
  }

  render() {
    return (
      <Fragment>
        <Card.Group doubling itemsPerRow={9} stackable>
          {_.map(this.props.anuncios, anuncio => (
            <Card color={this.checkColor(anuncio.plataforma)} key={anuncio.nome}>
              <Image src={anuncio.imagem} />
              <Card.Content>
                <Fragment>
                  <Card.Header>{anuncio.nome}</Card.Header>
                  <Card.Meta>{anuncio.usuario}</Card.Meta>
                </Fragment>
              </Card.Content>
              <Card.Content extra>
                <Button as='div' labelPosition='left'>
                  <Label as='a' basic pointing='right'>
                    Comprar
                  </Label>
                  <Button icon>
                    R${anuncio.valor}
                  </Button>
                </Button>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Fragment>
    )
  }
}