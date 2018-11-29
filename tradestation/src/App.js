import React, { Component } from 'react';
import TSMenu from './Components/Menu/TSMenu';
import TSLogin from './Components/Login/TSLogin';
import TSHome from './Components/Home/TSHome';
import TSCadastro from './Components/Cadastro/TSCadastro';
import { Route, HashRouter } from "react-router-dom";
import axios from 'axios';
import './App.css';

let listaAnuncios = [
  {
    "nome": "Red Dead Redemption 3",
    "usuario": "Glauber",
    "imagem": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7qyx5PC2O4ye.k1H6mGKwYqYvRrdtiZHzmPyzf_7pEgcqH_FiwveAQCtV_tHtCwm6UVqFYSWI5A.ZX.mopK8l02BhG8YQBmQR2o4hACWczD8K8VXHhCKxCTUsmQxCNCFnSlQXHFkq8t5pH0AAVlwzcAhJzogIWjlm6TMtxQGZ_8-&h=300&w=200&format=jpg",
    "valor": 100,
    "plataforma": "XONE"
  },
  {
    "nome": "Overwatch",
    "usuario": "Adauto",
    "imagem": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc0_jCwIx0J9tiuGXrtBx3EceEsaTssNL3RyXZkabq.a_E_wBcpQVv7CWg_6HOoIZxJ61tD_WvuBtGLz8ca_N2Mqxj2KO6o0l2dFltadARjl3n3WHB6PnjNOZZ9_hGTRic9WXowlhdiiLa0Tz_zs.g64NMnU341sy9_PPg234Z7Ug-&h=300&w=200&format=jpg",
    "valor": 60,
    "plataforma": "PS4"
  },
  {
    "nome": "Resident Evil 7",
    "usuario": "Lucas Fernandes",
    "imagem": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcJARoggfalk4GhDhlgSVpdbqf3aPylbpmOG4EECMlxx6V6hcHZSHlI09cBV5_wrmdQe5oHjs4v7FuUFx.kaEEU4DucAdgid5ZoFQEXuyJjh3a4Zpx67gXZaG4Fl3V.kgYxJKT.97a9Vicb4ysTwABBb4HZHbi1Iprhxj96t7AVJM-&h=300&w=200&format=jpg",
    "valor": 70,
    "plataforma": "XONE"
  },
  {
    "nome": "Call of Duty Black Ops 4",
    "usuario": "Glauber",
    "imagem": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcYb1HkJjg7GMHqu224j3c9wXKUUFepgIriZ7wmoij1kej3j52AQPwoaM2eGk7Yb.ENeQNdZcek8_O2xaQXGv8wMVU.16.IfTMvqWBJH5M1LPoOlhk9CeHNH5VB1oEkvHu0PujVU9ywvh_AAqRccU_ewGIeE8BrQTRYFmbW7bvrDg-&h=300&w=200&format=jpg",
    "valor": 90,
    "plataforma": "PC"
  },
  {
    "nome": "Grand Theft Auto V",
    "usuario": "Adauto",
    "imagem": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcBRrnAJQEtGRvnC9mWwA4JjSGW_aIgd3q8Vbtze9fJIVSpLTcdo9XBVNnS6pMFGku8v4tzo18nx694HAogApvS4SQurrWzQzZKf.BVvEhp8w1xsds77E7M.wdApFm_rGXuqjnRCmP6s7pldTbbHbwqTQzCgivS72EdJI23Y0ac00-&h=300&w=200&format=jpg",
    "valor": 50,
    "plataforma": "PC"
  },
  {
    "nome": "PUBG",
    "usuario": "Aramis Araújo",
    "imagem": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz7m1zzU6aOBXEMRGnHYD0GhCzc2B7FuHbSrgh13m3OkZjuvzx2Aw7H8qzFkqNRfrnRQCP05GytpzwjrrvrsC.darsb79W1g80434OstmeXip5S0KrO6O85qg4Ga3M870Zc-&h=300&w=200&format=jpg",
    "valor": 40,
    "plataforma": "XONE"
  },
  {
    "nome": "Red Dead Redemption 2",
    "usuario": "Daniel Mitre",
    "imagem": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7qyx5PC2O4ye.k1H6mGKwYqYvRrdtiZHzmPyzf_7pEgcqH_FiwveAQCtV_tHtCwm6UVqFYSWI5A.ZX.mopK8l02BhG8YQBmQR2o4hACWczD8K8VXHhCKxCTUsmQxCNCFnSlQXHFkq8t5pH0AAVlwzcAhJzogIWjlm6TMtxQGZ_8-&h=300&w=200&format=jpg",
    "valor": 110,
    "plataforma": "SWITCH"
  },

]

let bdAnuncios = []

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      anuncios: [...listaAnuncios]
    };
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
      return { anuncios: listaAnuncios.filter(anuncio => anuncio.title.toLowerCase().includes(input)) }
    });
  };

  render() {
    return (
      <HashRouter>
        <div class="site">
          <TSMenu handleChange={this.handleChange}></TSMenu>
          <Route exact path="/" component={(props) => <TSHome {...props} anuncios={this.state.anuncios} />} />
          <Route path="/cadastro" component={TSCadastro} />
          <Route path="/login" component={TSLogin} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
