import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

let estadosConservacao = [
  { text: 'Usado', value: 'USADO' },
  { text: 'Novo', value: 'NOVO' },
  { text: 'Seminovo', value: 'SEMINOVO' },
]

export default class EstadoDropdown extends Component {
  state = {}

  render() {
    const { value } = this.state

    return (
      <Dropdown
        onChange={this.props.interesseChange}
        options={estadosConservacao}
        placeholder='Como está seu jogo?'
        selection
        value={value}
      />
    )
  }
}