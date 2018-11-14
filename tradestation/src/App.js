import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react'
import Appbar from './Components/Appbar/menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Appbar />
      </Container>
    );
  }
}

export default App;
