import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import Appbar from './Components/Appbar/menu';
import Card from './Components/Cards/card';
import Header from './Components/Cards/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="site">
        <Appbar />
        <Header />
        <Card />
      </div>
    );
  }
}

export default App;
