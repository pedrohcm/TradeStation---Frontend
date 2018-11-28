import React, { Component } from 'react'
import { Input, Menu, Button } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

export default class OpcoesMenu extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Menu.Menu position='right'>
            <Menu.Item>
                <Button.Group>
                    <div>
                        <Button 
                            color='red'
                            basic
                            as={NavLink} to='/login'
                            icon='user' 
                            content='Entrar' />
                    </div>
                    <div>
                        <Button 
                            basic
                            color='red'
                            as={NavLink} to='/cadastro'
                            labelPosition='right' 
                            icon='sign-in' 
                            content='Cadastrar' />
                    </div>
                </Button.Group>
            </Menu.Item>
        </Menu.Menu>
    )
  }
}