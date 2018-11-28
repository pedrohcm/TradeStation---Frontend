import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Button, Card, Image, Icon, Label } from 'semantic-ui-react'

export default class Anuncios extends Component {

  checkColor = platform => {
    var name = platform.replace(/ .*/, '');
    switch (name) {
      case "Nintendo":
        return "red";
      case "Xbox":
        return "green";
      case "Playstation":
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
            <Card color={this.checkColor(anuncio.platform)} key={anuncio.title}>
              <Image src={anuncio.image} />
              <Card.Content>
                <Fragment>
                  <Card.Header>{anuncio.title}</Card.Header>
                  <Card.Meta>{anuncio.description}</Card.Meta>
                </Fragment>
              </Card.Content>
              <Card.Content extra>
                <Button as='div' labelPosition='left'>
                  <Label as='a' basic pointing='right'>
                    Comprar
                  </Label>
                  <Button icon>
                    {anuncio.price}
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