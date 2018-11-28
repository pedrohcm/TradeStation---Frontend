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
        interesse: "",
        descricao: "",
        usuario: ""
    }
    /**
     * 
 

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
        */

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
                    nome="plataforma"
                    placeholder='Plataforma'>
                    <label>Plataforma</label>
                </Form.Field>
                <Form.Field>
                    <label>Valor</label>
                    <input placeholder="Preço do jogo" name="valor" />
                </Form.Field>
                <Form.Group inline>
                    <label>Estado</label>
                    <Form.Field
                        control={Radio}
                        label='Usado'
                        value='USADO'
                    />
                    <Form.Field
                        control={Radio}
                        label='Novo'
                        value='NOVO'
                    />
                    <Form.Field
                        control={Radio}
                        label='Seminovo'
                        value='SEMINOVO'
                    />
                </Form.Group>
                <Form.Group inline>
                    <label>Interesse</label>
                    <Form.Field
                        control={Radio}
                        label='Venda'
                        value='VENDA'
                    />
                    <Form.Field
                        control={Radio}
                        label='Troca'
                        value='TROCA'
                    />
                </Form.Group>
                <Form.Field>
                    <label>Descrição</label>
                    <input placeholder="Descrição do jogo" name="description" />
                </Form.Field>
                <Form.Field>
                    <label>Usuário</label>
                    <input placeholder="Digite seu nome" name="nome" />
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