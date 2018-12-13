import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const FormLogin = () => (
    <Form>
        <Form.Group>
            <Form.Field required width={8}>
                <label>Usuário</label>
                <input placeholder='Digite seu nome de usuário...' />
            </Form.Field>
            <Form.Field required width={8}>
                <label>Senha</label>
                <input placeholder='Digite sua senha...' />
            </Form.Field>
        </Form.Group>

        <Button basic fluid color='red' type='submit'>Entrar</Button>
    </Form>
)

export default FormLogin