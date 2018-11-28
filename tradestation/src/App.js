import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import TSMenu from './Components/Menu/TSMenu';
import TSLogin from './Components/Login/TSLogin';
import TSHome from './Components/Home/TSHome';
import TSCadastro from './Components/Cadastro/TSCadastro';
import Card from './Components/Cards/card';
import Header from './Components/Cards/header';
import { Route, HashRouter } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div class="site">
          <TSMenu></TSMenu>
          <Route exact path="/" component={TSHome} />
          <Route path="/cadastro" component={TSCadastro} />
          <Route path="/login" component={TSLogin} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
