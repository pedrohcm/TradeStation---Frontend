import React, { Component } from 'react'
import { Button, Form, Confirm } from 'semantic-ui-react'
import axios from 'axios'
import { withRouter } from 'react-router';

class FormCadastro extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: "",
            usuario: "",
            email: "",
            senha: "",
            realizado: false,
            erro: false,
            mensagemErro: "",
        }
    }

    nomeChange = event => {
        this.setState({ nome: event.target.value });
    }
    usuarioChange = event => {
        this.setState({ usuario: event.target.value });
    }
    emailChange = event => {
        this.setState({ email: event.target.value });
    }
    senhaChange = event => {
        this.setState({ senha: event.target.value });
    }

    cadastroConfirmado = () => this.setState({ realizado: true })
    
    cadastroNegado = (erro) => this.setState({ erro: true, mensagemErro: "Usuário já está cadastrado no sistema." })
    
    voltar = () => this.setState({ erro: false })
      
    irParaLogin = () => {
        this.resetar()
        this.props.history.push('/login')
    }

    resetar = () => {
        console.log("entrei no resetar");
        this.setState({
            nome: "",
            usuario: "",
            email: "",
            senha: "",
            realizado: false,
            erro: false,
            mensagemErro: "",
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const usuario = {
            "nome": this.state.nome,
            "usuario": this.state.usuario,
            "email": this.state.email,
            "senha": this.state.senha,
        };

        axios.post("http://localhost:3001/usuario/", usuario).then(result => {
            this.cadastroConfirmado()
        }, error => {
            this.cadastroNegado(error)
        })

    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field required>
                        <label>Nome</label>
                        <input type="text" required placeholder='Digite um nome...' onChange={this.nomeChange} />
                    </Form.Field>
                    <Form.Group>
                        <Form.Field required width={8}>
                            <label>Usuário</label>
                            <input type="text" required placeholder='Digite seu nome de usuário...' onChange={this.usuarioChange} />
                        </Form.Field>
                        <Form.Field required width={8}>
                            <label>E-mail</label>
                            <input type="email" required placeholder='Digite seu e-mail...' onChange={this.emailChange} />
                        </Form.Field>
                    </Form.Group>
                    <Form.Field required width={8}>
                        <label>Digite sua senha</label>
                        <input type="password" required placeholder='Digite sua senha...' onChange={this.senhaChange} />
                    </Form.Field>
                    <Button type="submit" basic fluid color='red' >Cadastrar</Button>
                </Form>
                <Confirm
                    open={this.state.realizado}
                    header='Cadastro realizado'
                    content='Você já pode realizar seu login.'
                    confirmButton="Certo, logar agora"
                    onConfirm={this.irParaLogin}

                />
                <Confirm
                    open={this.state.erro}
                    header='Erro no cadastro'
                    content={this.state.mensagemErro}
                    confirmButton="Corrigir"
                    onConfirm={this.voltar}
                />
            </div>
        )
    }
}

const FormCadastroComRouter = withRouter(FormCadastro);
export default FormCadastroComRouter;