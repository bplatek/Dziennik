import React from 'react';

import './MyPlanWidget.scss';

export default class MyPlanWidget extends React.Component {
  render() {
    return (
      <div className="widget plan">
        <div className="widget__header">
          <h3 className="widget__title">Plan dnia</h3>
          <span className="widget__minimize-button">minimalizuj</span>
        </div>
        <span className="plan-day">29/02 CZWARTEK</span>
        <span className="plan-item">
          <span className="plan-item-details">Klasa: Ib<br/>Sala: 12</span>
          <span className="plan-item-description">Książę Bogusław Radziwiłł - analiza psychologiczna postaci na podstawie powieści "Potop" H. Sienkiewicza</span>
        </span>
        <span className="plan-item">
          <span className="plan-item-details">Klasa: IIb<br/>Sala: 12</span>
          <span className="plan-item-description">Sprawdzian z treści powieści "Lalka" B. Prusa</span>
        </span>
        <span className="plan-item">
          <span className="plan-item-details">Klasa: Ia<br/>Sala: 5</span>
          <span className="plan-item-description">Dyktando</span>
        </span>
        <span className="plan-item">
          <span className="plan-item-details">Klasa: IIIc<br/>Sala: 12</span>
          <span className="plan-item-description">Sprawdzian z treści powieści "Drwal" M. Witkowskiego</span>
        </span>
      </div>
    );
  }
}
