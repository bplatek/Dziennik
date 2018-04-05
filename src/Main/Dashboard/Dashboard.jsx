import React from 'react';

import SearchWidget from './SearchWidget/SearchWidget';
import LatestAnnouncementsWidget from './LatestAnnouncementsWidget/LatestAnnouncementsWidget';
import MyClassesWidget from './MyClassesWidget/MyClassesWidget';
import MyPlanWidget from './MyPlanWidget/MyPlanWidget';

import './Dashboard.scss';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__left-side">
          <SearchWidget />
          <LatestAnnouncementsWidget />
          <MyClassesWidget />
        </div>
        <div className="dashboard__right-side">
          <MyPlanWidget />
        </div>
      </div>
    );
  }
}
