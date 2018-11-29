import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

export default class OpcoesMenu extends Component {
    render() {
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