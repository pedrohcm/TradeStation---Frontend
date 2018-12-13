import React, { Component } from 'react'
import { Button, Modal, Label } from 'semantic-ui-react'
import InfoAnuncio from './InfoAnuncio'

export default class ModalAnuncio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.close = this.close.bind(this);
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state


    return (
      <div>
        <Button onClick={this.show('blurring')} as='div' labelPosition='left'>
          <Label as='a' basic pointing='right'>
            Comprar
                  </Label>
          <Button onClick={this.show('blurring')} icon>
            R${this.props.anuncio.valor}
          </Button>
        </Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Content>
            <Modal.Description>
              <InfoAnuncio anuncio={this.props.anuncio} close={this.close}></InfoAnuncio>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
