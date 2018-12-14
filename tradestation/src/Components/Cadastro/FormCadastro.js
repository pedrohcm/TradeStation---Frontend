import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class FormAnuncio extends Component {

    nomeChange = event => {
        this.setState({ nome: event.target.value });
    }
    usuarioChange = event => {
        this.setState({ valor: event.target.value });
    }
    emailChange = event => {
        this.setState({ descricao: event.target.value });
    }
    senhaChange = event => {
        this.setState({ imagem: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const usuario = {
            "nome": this.state.nome,
            "usuario": +this.state.usuario,
            "email": this.state.email,
            "senha": this.state.senha,
        };
        axios.post("http://localhost:3001/usuario/", anuncio);
        this.props.close();
        window.location.reload();
    }

    //FALTA COLOCAR OS ONCHANGE NO INPUT


    render() {
        return (
            <Form>
                <Form.Field required>
                    <label>Nome</label>
                    <input placeholder='Digite um nome...' />
                </Form.Field>
                <Form.Group>
                    <Form.Field required width={8}>
                        <label>Usuário</label>
                        <input placeholder='Digite seu nome de usuário...' />
                    </Form.Field>
                    <Form.Field required width={8}>
                        <label>E-mail</label>
                        <input placeholder='Digite seu e-mail...' />
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field required width={8}>
                        <label>Digite sua senha</label>
                        <input placeholder='Digite sua senha...' />
                    </Form.Field>
                    <Form.Field required width={8}>
                        <label>Confirme sua senha</label>
                        <input placeholder='Digite novamente a senha...' />
                    </Form.Field>
                </Form.Group>

                <Button basic fluid color='red' type='submit'>Cadastrar</Button>
            </Form>
        )
    }