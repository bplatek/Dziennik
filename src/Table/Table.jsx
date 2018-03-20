import React from 'react';
import './Table.scss';

export default class Table extends React.Component {
  render() {
    const data = this.props.data.map((element, index) => {
      const rows = Object.entries(element).map(([key, value]) => {
        if (value && typeof value === 'object') {
          value = Object.values(value).join('/');
        }
        return <td key={index}>{value}</td>;
      });
      return <tr key={index}>{rows}</tr>;
    });
    return (
      <table>
        <tbody>
          {data}
        </tbody>
      </table>
    );
  }
}
