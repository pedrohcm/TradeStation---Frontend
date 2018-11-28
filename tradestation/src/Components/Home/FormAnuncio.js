import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from "axios"



class FormAnuncio extends Component {

    plataformas = [
        { text: 'Playstation 4', value: 'PS4' },
        { text: 'Xbox One', value: 'XONE' },
        { text: 'Nintendo Switch', value: 'SWITCH' },
        { text: 'PC', value: 'PC' },
        { text: 'Nintendo 3DS', value: '3DS' },
        { text: 'Playstation 3', value: 'PS3' },
        { text: 'Xbox 360', value: 'X360' },
    ]

    state = {
        nome: "",
        plataforma: "",
        valor: "",
        estado: "",
        imagem: "",
        descricao: "",
        usuario: ""
    }

    handleSubmit = event => {
        event.preventDefault();

        const anuncio = {
            nome: this.state.nome,
            plataforma: this.state.plataforma,
            valor: this.state.valor,
            estado: this.state.estado,
            imagem: this.state.imagem,
            descricao: this.state.descricao,
            usuario: this.state.usuario,
        };

        axios.post("http://localhost:3000/anuncio/", { anuncio });
        this.props.close();
        window.location.reload();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Nome</label>
                    <input placeholder="Nome do jogo" name="nome" />
                </Form.Field>
                <Form.Field
                    control={Select}
                    options={plataformas}
                    placeholder='Plataforma'>
                    <label>Nome</label>
                </Form.Field>
                <Form.Field>
                    <label>Tipo</label>
                    <input placeholder="Categoria do produto" name="type" />
                </Form.Field>
                <Form.Field>
                    <label>Preço</label>
                    <input placeholder="Preço do produto" name="price" />
                </Form.Field>
                <Form.Field>
                    <label>Imagem</label>
                    <input placeholder="URL da foto do produto" name="img" />
                </Form.Field>
                <Form.Field>
                    <label>Descrição</label>
                    <input placeholder="Descrição do produto" name="description" />
                </Form.Field>
                <Button.Group fluid>
                    <Button positive type="submit" content='Adicionar'></Button>
                    <Button negative content='Cancelar' onClick={this.props.close}></Button>
                </Button.Group>
            </Form>
        );
    }

}
export default FormAnuncio;