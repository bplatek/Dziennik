import React from 'react';

import './MyClassesWidget.scss';

export default class MyClassesWidget extends React.Component {
  render() {
    return (
      <div className="widget my-classes">
        <div className="widget__header">
          <h3 className="widget__title">Moje klasy</h3>
          <span className="widget__minimize-button">minimalizuj</span>
        </div>
          <span className="my-class">I a</span>
          <span className="my-class">II b</span>
          <span className="my-class">II d</span>
          <span className="my-class">III b</span>
      </div>
    );
  }
}
