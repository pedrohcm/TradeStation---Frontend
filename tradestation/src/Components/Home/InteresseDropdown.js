import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

let interesse = [
  { text: 'Vender', value: 'VENDA' },
  { text: 'Trocar', value: 'TROCA' },
]

export default class InteresseDropdown extends Component {
  state = {}

  render() {
    const { value } = this.state

    return (
      <Dropdown
        onChange={this.props.interesseChange}
        options={interesse}
        placeholder='Quer vender ou trocar?'
        selection
        value={value}
      />
    )
  }
}