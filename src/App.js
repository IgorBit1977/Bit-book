import React, { Component, Fragment } from 'react';
import './App.css';
// import Modal from "react-responsive-modal";
import 'materialize-css/dist/css/materialize.min.css';
// import ReactDOM from 'react-dom';

//COMPONENTS
import { Header } from './view/Header';
import { Footer } from './view/Footer';
import { Main } from './view/Main';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    )
  }
}

export default App;
