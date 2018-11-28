import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import TSCadastro from '../Cadastro/TSCadastro'
import OpcoesMenu from './OpcoesMenu'
import PaginasMenu from './PaginasMenu'
import LogoMenu from './LogoMenu'
import Busca from './Busca'
import { NavLink } from "react-router-dom";

export default class TSMenu extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary color="red">
        <LogoMenu></LogoMenu>
        <Menu.Item
          as={NavLink} to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick} />
        <Menu.Item
          content='Seus anúncios'
          active={activeItem === 'user'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Busca handleChange={this.props.handleChange}></Busca>
          <OpcoesMenu></OpcoesMenu>
        </Menu.Menu>
      </Menu>
    )
  }
}