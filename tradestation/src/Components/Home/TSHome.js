import React, { Component } from "react";
import EmDestaqueHeader from './Header'
import Anuncios from './Anuncios'

export default class TSHome extends Component {
    render() {
        return (
            <div>
                <EmDestaqueHeader></EmDestaqueHeader>
                <Anuncios anuncios={this.props.anuncios}></Anuncios>
            </div>
        );
    }
}