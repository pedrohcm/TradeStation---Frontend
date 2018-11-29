import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const FormCadastro = () => (
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

export default FormCadastro