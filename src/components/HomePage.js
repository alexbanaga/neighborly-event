import React from 'react';
import MediaQuery from 'react-responsive';
import Invite from './Desktop/Invite/Invite';
import WhatIs from './Desktop/WhatIs/WhatIs';
import Speakers from './Desktop/Speakers/Speakers';
import Topics from './Desktop/Topics/Topics';
import Schedule from './Desktop/Schedule/Schedule';
import Bio from './Desktop/Bio/Bio';
import Ending from './Desktop/Ending/Ending';

import MobileInvite from './Mobile/MobileInvite/MobileInvite';
import MobileWhatIs from './Mobile/MobileWhatIs/MobileWhatIs';
import MobileSpeakers from './Mobile/MobileSpeakers/MobileSpeakers';
import MobileTopics from './Mobile/MobileTopics/MobileTopics';
import MobileSchedule from './Mobile/MobileSchedule/MobileSchedule';
import MobileBio from './Mobile/MobileBio/MobileBio';
import MobileEnding from './Mobile/MobileEnding/MobileEnding';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div>
      <MediaQuery minDeviceWidth={800}>
        <div>
          <Invite />
          <WhatIs />
          <div className="overlap">
            <Speakers />
            <Topics />
            <Schedule />
            <Bio />
            <Ending />
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={800}>
        <MobileInvite />
        <div className="overlap-mobile">
          <MobileWhatIs />
          <MobileSpeakers />
          <MobileTopics />
          <MobileSchedule />
          <MobileBio />
          <MobileEnding />
        </div>
      </MediaQuery>
    </div>
  );
};

export default HomePage;
