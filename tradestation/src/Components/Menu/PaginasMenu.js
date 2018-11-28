import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import TSHome from '../Home/TSHome';
import TSCadastro from '../Cadastro/TSCadastro';
import { NavLink } from "react-router-dom";

export default class OpcoesMenu extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div>
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
        </div>
    )
  }
}