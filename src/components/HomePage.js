import React from 'react';
import MediaQuery from 'react-responsive';
import LoginPage from './Desktop/LoginPage/LoginPage';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div>
      <MediaQuery minDeviceWidth={800}>
        <div>
          <LoginPage />
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={800}>
        <LoginPage />
      </MediaQuery>
    </div>
  );
};

export default HomePage;
