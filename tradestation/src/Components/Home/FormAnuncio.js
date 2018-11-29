import React, { Component } from 'react'
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react'

/**
 * 

let plataformas = [
    { text: 'Playstation 4', value: 'PS4' },
    { text: 'Xbox One', value: 'XONE' },
    { text: 'Nintendo Switch', value: 'SWITCH' },
    { text: 'PC', value: 'PC' },
    { text: 'Nintendo 3DS', value: '3DS' },
    { text: 'Playstation 3', value: 'PS3' },
    { text: 'Xbox 360', value: 'X360' },
]

let estadosConservacao = [
    { text: 'Usado', value: 'USADO' },
    { text: 'Novo', value: 'NOVO' },
    { text: 'Seminovo', value: 'SEMINOVO' },
]

let interesse = [
    { text: 'Vender', value: 'VENDER' },
    { text: 'Trocar', value: 'TROCAR' },
]
 */

class FormAnuncio extends Component {

    state = {
        nome: "",
        plataforma: "",
        valor: "",
        estado: "",
        imagem: "",
        interesse: "",
        descricao: "",
        usuario: ""
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


    handleSubmit = event => {
        event.preventDefault();

        const anuncio = {
            "nome": this.state.nome,
            "valor": +this.state.valor,
            "estado": "USADO",
            "plataforma": "XONE",
            "imagem": this.state.imagem,
            "descricao": this.state.descricao,
            "usuario": this.state.usuario,
            "interesse": "VENDA"
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
                <Form.Field>
                    <label>Descrição</label>
                    <input required placeholder="Descrição do jogo" name="descricao" onChange={this.descricaoChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Usuário</label>
                    <input required placeholder="Digite seu nome" name="usuario" onChange={this.usuarioChange}/>
                </Form.Field>
                <Form.Field>
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