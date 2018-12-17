import React, { Component } from 'react'
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react'
import PlataformaDropdown from './PlataformaDropdown'
import EstadoDropdown from './EstadoDropdown';
import InteresseDropdown from './InteresseDropdown';

class FormAnuncio extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: "",
            plataforma: "",
            valor: "",
            estado: "",
            imagem: "",
            interesse: "",
            descricao: "",
            usuario: ""
        }
        this.plataformaChange = this.plataformaChange.bind(this);
        this.interesseChange = this.interesseChange.bind(this);
        this.conservacaoChange = this.conservacaoChange.bind(this);
    }



    nomeChange = event => {
        this.setState({ nome: event.target.value });
    }
    valorChange = event => {
        this.setState({ valor: event.target.value });
    }
    descricaoChange = event => {
        this.setState({ descricao: event.target.value });
    }
    imagemChange = event => {
        this.setState({ imagem: event.target.value });
    }
    usuarioChange = event => {
        this.setState({ usuario: event.target.value });
    }
    plataformaChange = (e, { value }) => this.setState({ plataforma: value })

    interesseChange = (e, { value }) => this.setState({ interesse: value })

    conservacaoChange = (e, { value }) => this.setState({ estado: value })


    handleSubmit = event => {
        event.preventDefault();

        const anuncio = {
            "nome": this.state.nome,
            "valor": +this.state.valor,
            "estado": this.state.estado,
            "plataforma": this.state.plataforma,
            "imagem": this.state.imagem,
            "descricao": this.state.descricao,
            "usuario": this.state.usuario,
            "interesse": this.state.interesse
        };
        axios.post("http://localhost:3001/anuncio/", anuncio);
        this.props.close();
        window.location.reload();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input required fluid label='Nome do jogo' placeholder='Digite o nome...' onChange={this.nomeChange} />
                    <Form.Input required fluid label='Valor (R$)' type="number" min="0" placeholder='Digite o valor...' onChange={this.valorChange} />
                </Form.Group>
                <Form.Field required>
                    <label>Descrição</label>
                    <input required placeholder="Descrição do jogo" name="descricao" onChange={this.descricaoChange} />
                </Form.Field>
                <Form.Field required>
                    <label>Usuário</label>
                    <input required placeholder="Digite seu nome" name="usuario" onChange={this.usuarioChange} />
                </Form.Field>
                <Form.Group widths='equal'>
                    <Form.Field required>
                        <label>Plataforma</label>
                        <PlataformaDropdown plataformaChange={this.plataformaChange}></PlataformaDropdown>
                    </Form.Field>
                    <Form.Field required>
                        <label>Estado de Conservação</label>
                        <EstadoDropdown conservacaoChange={this.conservacaoChange}></EstadoDropdown>
                    </Form.Field>
                    <Form.Field required>
                        <label>Interesse do anúncio</label>
                        <InteresseDropdown interesseChange={this.interesseChange}></InteresseDropdown>
                    </Form.Field>
                </Form.Group>
                <Form.Field required>
                    <label>Imagem do jogo</label>
                    <input required placeholder="Coloque o link aqui" name="imagem" onChange={this.imagemChange} />
                </Form.Field>
                <div class="form-anuncio-button center">
                    <Button.Group>
                        <Button type="submit" positive>Adicionar anúncio</Button>
                        <Button.Or text='ou' />
                        <Button negative content='Cancelar' onClick={this.props.close}></Button>
                    </Button.Group>
                </div>
            </Form>
        );
    }
}
export default FormAnuncio;