import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import Announcements from './Announcements/Announcements';
import Students from './Students/Students';
import Teachers from './Teachers/Teachers';
import Register from './Register/Register';
import Timetable from './Timetable/Timetable';
import Lessons from './Lessons/Lessons';
import StickyCards from './StickyCards/StickyCards';
import Statistics from './Statistics/Statistics';


import './Main.scss';

export default class Main extends React.Component {
  render() {
    return (
        <div className="main">
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/announcements" component={Announcements} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/teachers" component={Teachers} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/timetable" component={Timetable} />
          <Route exact path="/lessons" component={Lessons} />
          <Route exact path="/sticky-cards" component={StickyCards} />
          <Route exact path="/statistics" component={Statistics} />
        </div>
    );
  }
}
