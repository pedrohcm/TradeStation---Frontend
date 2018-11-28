import React, { Component } from "react";
import EmDestaqueHeader from './Header'
import Anuncios from './Anuncios'
import { Button, Container } from 'semantic-ui-react'

export default class TSHome extends Component {
    render() {
        return (
            <div>
                <EmDestaqueHeader></EmDestaqueHeader>
                <Anuncios anuncios={this.props.anuncios}></Anuncios>
                <br></br>
                <Container>
                    <Button basic color='red' type='submit'>Adicionar</Button>
                </Container>

            </div>
        );
    }
}