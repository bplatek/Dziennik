import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Main from '../Main/Main';

import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Header />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
