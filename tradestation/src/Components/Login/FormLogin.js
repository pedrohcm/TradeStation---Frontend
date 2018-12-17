import React, { Component } from 'react'
import { Button, Form, Confirm } from 'semantic-ui-react'
import axios from 'axios'
import { withRouter } from 'react-router';

class FormLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            senha: "",
            erro: false
        }
    }

    salvarToken(response){
        var res = response.data;
        localStorage.setItem('userID', res.usuarioId);
        localStorage.setItem("token", res.token);
    }

    emailChange = event => {
        this.setState({ email: event.target.value });
    }
    senhaChange = event => {
        this.setState({ senha: event.target.value });
    }

    loginConfirmado = () => {
        this.props.history.push('/')
    }
    
    loginNegado = (erro) => this.setState({ erro: true, mensagemErro: "E-mail ou senha incorretos." })

    voltar = () => this.setState({ erro: false })

    handleSubmit = event => {
        event.preventDefault();
        const usuario = {
            "email": this.state.email,
            "senha": this.state.senha,
        };
        axios.post("http://localhost:3001/auth/", usuario).then(result => {
            this.salvarToken(result)
            this.loginConfirmado()
        }, error => {
            this.loginNegado(error)
        })
    }

    render() {
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Field required width={8}>
                        <label>E-mail</label>
                        <input type="email" required placeholder='Digite seu e-mail...' onChange={this.emailChange} />
                    </Form.Field>
                    <Form.Field required width={8}>
                        <label>Senha</label>
                        <input type="password" required placeholder='Digite sua senha...' onChange={this.senhaChange} />
                    </Form.Field>
                </Form.Group>
                <Button type="submit" basic fluid color='red' type='submit'>Entrar</Button>
            </Form>
            <Confirm
            open={this.state.erro}
            header='Erro no login'
            content={this.state.mensagemErro}
            confirmButton="Corrigir"
            onConfirm={this.voltar}
        />
        </div>
        )
    }
}


const FormLoginComRouter = withRouter(FormLogin);
export default FormLoginComRouter;