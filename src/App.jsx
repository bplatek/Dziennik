import React from 'react';
import ReactDOM from 'react-dom';
import Uczniowie from '../data/uczniowie';
import Table from './Table/Table';
import Header from './Header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="app_container">
        <Header />
        <Table data={Uczniowie} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
