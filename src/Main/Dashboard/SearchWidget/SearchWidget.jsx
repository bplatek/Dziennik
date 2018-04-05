import React from 'react';

import './SearchWidget.scss';

export default class SearchWidget extends React.Component {
  render() {
    return (
      <div className="widget search">
        <div className="widget__header">
          <h3 className="widget__title">Szukaj uczniów</h3>
          <span className="widget__minimize-button">minimalizuj</span>
        </div>
        <input type="text"></input>
        <button>szukaj</button>
      </div>
    );
  }
}
