import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router';

class OpcoesMenu extends Component {

    logout(){
        localStorage.removeItem("userID");
        localStorage.removeItem("token");
        window.location.reload();
        this.props.history.push('/')
    }

    renderOpcoesMenu() {
        if(this.props.logado){
            return(
                <Button
                color='red'
                onClick={this.logout}
                basic
                as={NavLink} to='/'
                icon='sign-out alternate'
                content='Sair' />
            )
        } else {
            return(
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
            )
        }
    }

    render() {
        return (
            <Menu.Menu position='right'>
                <Menu.Item>
                    {this.renderOpcoesMenu()}
                </Menu.Item>
            </Menu.Menu>
        )
    }
}

const OpcoesMenuComRouter = withRouter(OpcoesMenu);
export default OpcoesMenuComRouter;