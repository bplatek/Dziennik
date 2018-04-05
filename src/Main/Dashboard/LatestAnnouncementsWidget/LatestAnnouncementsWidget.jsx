import React from 'react';

import './LatestAnnouncementsWidget.scss';

export default class LatestAnnouncementsWidget extends React.Component {
  render() {
    return (
      <div className="widget latest-announcements">
        <div className="widget__header">
          <h3 className="widget__title">Najnowsze ogłoszenia</h3>
          <span className="widget__minimize-button">minimalizuj</span>
        </div>
        <div className="latest-announcement">
          <h4 className="latest-announcement__title">Important contract between us and our users</h4>
          <h5 className="latest-announcement__date">Data dodania: 26 lutego 2018</h5>
          Please read this Terms of Service agreement carefully before accessing or using GitHub.
        </div>
        <div className="latest-announcement">
          <h4 className="latest-announcement__title">Thank you for using GitHub!</h4>
          <h5 className="latest-announcement__date">Data dodania: 15 marca 2018</h5>
          We're happy you're here. Please read this Terms of Service agreement carefully before accessing or using GitHub. Because it is such an important contract between us and our users, we have tried to make it as clear as possible. For your convenience, we have presented these terms in a short non-binding summary followed by the full legal terms.
        </div>
      </div>
    );
  }
}
