import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import FormAnuncio from './FormAnuncio'

class NovoAnuncio extends Component {

  constructor(props){
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
        <Button fluid basic color='red' onClick={this.show('blurring')}>Adicionar novo anúncio</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
            <Modal.Header>Novo anúncio</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <FormAnuncio close={this.close}></FormAnuncio>
                </Modal.Description>
            </Modal.Content>
        </Modal>
        </div>
    )
  }
}

export default NovoAnuncio