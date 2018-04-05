import React from 'react';

import Table from '../../Common/Table/Table';
import Uczniowie from '../../../data/Uczniowie';

import './Register.scss';

export default class Register extends React.Component {
  render() {
    return (
      <div className="page register">
        <h2 className="page__title">Dziennik</h2>
        <Table data={Uczniowie} />
      </div>
    );
  }
}
