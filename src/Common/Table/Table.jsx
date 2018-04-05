import React from 'react';

import './Table.scss';

export default class Table extends React.Component {
  render() {
    const data = this.props.data.filter((element) => element.klasa === 'Ia').map((element, index) => {
      const row = Object.entries(element).map(([key, value]) => {
        if (value && typeof value === 'object') {
          value = Object.values(value).join('/');
        }
        return <td>{value}</td>;
      });
      return <tr key={index}>{row}</tr>;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Nr</th><th>Imię</th><th>Nazwisko</th><th>Data urodzenia</th><th>Klasa</th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
    );
  }
}
