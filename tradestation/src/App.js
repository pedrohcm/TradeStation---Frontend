import React, { Component } from 'react';
import TSMenu from './Components/Menu/TSMenu';
import TSLogin from './Components/Login/TSLogin';
import TSHome from './Components/Home/TSHome';
import TSCadastro from './Components/Cadastro/TSCadastro';
import { Route, HashRouter } from "react-router-dom";
import listaAnuncios from "../src/data/anuncios"
import axios from 'axios';
import './App.css';

let bdAnuncios = []

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      anuncios: [...listaAnuncios],
      logado: (localStorage.userID) ? true : false
    };
    console.log(localStorage.userID)
    console.log(this.state.logado)
    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount () {
    axios.get('http://localhost:3001/anuncio')
    .then(res => {
      bdAnuncios = res.data;
      const anuncios = listaAnuncios.concat(bdAnuncios);
      this.setState({anuncios})
    });
  };

  handleChange = event => {
    const input = event.target.value.toLowerCase();
    this.setState(currentState => {
      const todosAnuncios = listaAnuncios.concat(bdAnuncios);
      return { anuncios: todosAnuncios.filter(anuncio => anuncio.nome.toLowerCase().includes(input)) }
    });
  };

  render() {
    return (
      <HashRouter>
        <div class="site">
          <TSMenu logado={this.state.logado} handleChange={this.handleChange}></TSMenu>
          <Route exact path="/" component={(props) => <TSHome {...props} anuncios={this.state.anuncios} />} />
          <Route path="/cadastro" component={TSCadastro} />
          <Route path="/login" component={TSLogin} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
