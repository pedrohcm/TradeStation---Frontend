import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Button, Card, Image, Icon, Label } from 'semantic-ui-react'

const anuncios = [
  {
    "title": "Red Dead Redemption 2",
    "description": "Glauber",
    "image": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7qyx5PC2O4ye.k1H6mGKwYqYvRrdtiZHzmPyzf_7pEgcqH_FiwveAQCtV_tHtCwm6UVqFYSWI5A.ZX.mopK8l02BhG8YQBmQR2o4hACWczD8K8VXHhCKxCTUsmQxCNCFnSlQXHFkq8t5pH0AAVlwzcAhJzogIWjlm6TMtxQGZ_8-&h=300&w=200&format=jpg",
    "price": "R$100",
    "platform": "Xbox One"
  },
  {
    "title": "Overwatch",
    "description": "Adauto",
    "image": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc0_jCwIx0J9tiuGXrtBx3EceEsaTssNL3RyXZkabq.a_E_wBcpQVv7CWg_6HOoIZxJ61tD_WvuBtGLz8ca_N2Mqxj2KO6o0l2dFltadARjl3n3WHB6PnjNOZZ9_hGTRic9WXowlhdiiLa0Tz_zs.g64NMnU341sy9_PPg234Z7Ug-&h=300&w=200&format=jpg",
    "price": "R$60",
    "platform": "Playstation 4"
  },
  {
    "title": "Resident Evil 7",
    "description": "Lucas Fernandes",
    "image": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcJARoggfalk4GhDhlgSVpdbqf3aPylbpmOG4EECMlxx6V6hcHZSHlI09cBV5_wrmdQe5oHjs4v7FuUFx.kaEEU4DucAdgid5ZoFQEXuyJjh3a4Zpx67gXZaG4Fl3V.kgYxJKT.97a9Vicb4ysTwABBb4HZHbi1Iprhxj96t7AVJM-&h=300&w=200&format=jpg",
    "price": "R$70",
    "platform": "Xbox One"
  },
  {
    "title": "Call of Duty Black Ops 4",
    "description": "Glauber",
    "image": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcYb1HkJjg7GMHqu224j3c9wXKUUFepgIriZ7wmoij1kej3j52AQPwoaM2eGk7Yb.ENeQNdZcek8_O2xaQXGv8wMVU.16.IfTMvqWBJH5M1LPoOlhk9CeHNH5VB1oEkvHu0PujVU9ywvh_AAqRccU_ewGIeE8BrQTRYFmbW7bvrDg-&h=300&w=200&format=jpg",
    "price": "R$90",
    "platform": "PC"
  },
  {
    "title": "Grand Theft Auto V",
    "description": "Adauto",
    "image": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcBRrnAJQEtGRvnC9mWwA4JjSGW_aIgd3q8Vbtze9fJIVSpLTcdo9XBVNnS6pMFGku8v4tzo18nx694HAogApvS4SQurrWzQzZKf.BVvEhp8w1xsds77E7M.wdApFm_rGXuqjnRCmP6s7pldTbbHbwqTQzCgivS72EdJI23Y0ac00-&h=300&w=200&format=jpg",
    "price": "R$50",
    "platform": "PC"
  },
  {
    "title": "PUBG",
    "description": "Glauber",
    "image": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz7m1zzU6aOBXEMRGnHYD0GhCzc2B7FuHbSrgh13m3OkZjuvzx2Aw7H8qzFkqNRfrnRQCP05GytpzwjrrvrsC.darsb79W1g80434OstmeXip5S0KrO6O85qg4Ga3M870Zc-&h=300&w=200&format=jpg",
    "price": "R$40",
    "platform": "Xbox One"
  },
  {
    "title": "Red Dead Redemption 2",
    "description": "Daniel Mitre",
    "image": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7qyx5PC2O4ye.k1H6mGKwYqYvRrdtiZHzmPyzf_7pEgcqH_FiwveAQCtV_tHtCwm6UVqFYSWI5A.ZX.mopK8l02BhG8YQBmQR2o4hACWczD8K8VXHhCKxCTUsmQxCNCFnSlQXHFkq8t5pH0AAVlwzcAhJzogIWjlm6TMtxQGZ_8-&h=300&w=200&format=jpg",
    "price": "R$110",
    "platform": "Nintendo Switch"
  },

]

export default class PlaceholderExampleCard extends Component {

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
          {_.map(anuncios, anuncio => (
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