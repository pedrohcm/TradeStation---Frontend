import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

let plataformas = [
  { key: 'PS4', text: 'Playstation 4', value: 'PS4' },
  { key: 'XONE', text: 'Xbox One', value: 'XONE' },
  { key: 'SWITCH', text: 'Nintendo Switch', value: 'SWITCH' },
  { key: 'PC', text: 'PC', value: 'PC' },
  { key: '3DS', text: 'Nintendo 3DS', value: '3DS' },
  { key: 'PS3', text: 'Playstation 3', value: 'PS3' },
  { key: 'X360', text: 'Xbox 360', value: 'X360' },
]

export default class PlataformaDropdown extends Component {
  state = {}

  render() {
    const { value } = this.state

    return (
      <Dropdown
        onChange={this.props.plataformaChange}
        options={plataformas}
        placeholder='Escolha a plataforma...'
        selection
        value={value}
      />
    )
  }
}