import React, { Component } from "react";
import EmDestaqueHeader from './Header'
import Anuncios from './Anuncios'
import NovoAnuncio from './NovoAnuncio'
import { Message, Icon } from 'semantic-ui-react'

export default class TSHome extends Component {

    renderOpcoesHome() {
        if(this.props.logado){
            return(         
            <NovoAnuncio></NovoAnuncio>
            )
        } else {
            return(
                <Message warning attached='bottom'>
                <Icon name='warning' />
                Entre na sua conta para adicionar um anúncio
              </Message>
            )
        }
    }


    render() {
        return (
            <div>
                <EmDestaqueHeader></EmDestaqueHeader>
                <Anuncios anuncios={this.props.anuncios}></Anuncios>
                <br></br>
                {this.renderOpcoesHome()}
                <br></br>
            </div>
        );
    }
}