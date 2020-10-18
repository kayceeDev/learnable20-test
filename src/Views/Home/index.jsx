import React from 'react';
import HomeComponent from '../../components/Body/HomeComponent';
import SecondNavigation from '../../components/Header/SecondNavigation';

import './style.css'

const Home = () => {
  return (
    <div>
      <SecondNavigation/>
      <HomeComponent/>
    </div>
  );
};

export default Home;