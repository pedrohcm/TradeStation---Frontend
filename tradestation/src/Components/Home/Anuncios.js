import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Card, Image } from 'semantic-ui-react'
import ModalAnuncio from './ModalAnuncio';

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
        <Card.Group doubling itemsPerRow={8} stackable>
          {_.map(this.props.anuncios, anuncio => (
            <Card color={this.checkColor(anuncio.plataforma)} key={anuncio.usuario + anuncio.plataforma + anuncio.valor}>
              <Image src={anuncio.imagem} fluid/>
              <Card.Content>
                <Fragment>
                  <Card.Header>{anuncio.nome}</Card.Header>
                  <Card.Meta>{anuncio.usuario}</Card.Meta>
                </Fragment>
              </Card.Content>
              <Card.Content extra>
                <ModalAnuncio anuncio={anuncio}></ModalAnuncio>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Fragment>
    )
  }
}