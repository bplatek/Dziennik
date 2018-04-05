import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

export default class Nav extends React.Component {
  render() {
    return (
        <div className="nav">
          <span className="nav__logo">e.psor</span>
          <nav className="nav__menu">
            <ul className="nav__list">
              <li className="nav__list-item"><Link to="/">Start</Link></li>
              <li className="nav__list-item"><Link to="/announcements">Ogłoszenia</Link></li>
              <li className="nav__list-item"><Link to="/students">Uczniowie</Link></li>
              <li className="nav__list-item"><Link to="/teachers">Nauczyciele</Link></li>
              <li className="nav__list-item"><Link to="/register">Dzienniki</Link></li>
              <li className="nav__list-item"><Link to="/timetable">Plany lekcji</Link></li>
              <li className="nav__list-item"><Link to="/lessons">Zajęcia</Link></li>
              <li className="nav__list-item"><Link to="/sticky-cards">Notatki</Link></li>
              <li className="nav__list-item"><Link to="/statistics">Statystyki</Link></li>
            </ul>
          </nav>
          <span className="nav__version">version 1.0 beta</span>
        </div>
    );
  }
}
