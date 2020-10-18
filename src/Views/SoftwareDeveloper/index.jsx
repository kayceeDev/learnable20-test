import React from 'react';
import SoftwareBodyComp from '../../components/Body/SoftwareBodyComp';
import SecondNavigation from '../../components/Header/SecondNavigation';

import './style.css'

const SoftwareDeveloper = () => {
  return (
    <div>
      <SecondNavigation/>
      <SoftwareBodyComp />
    </div>
  );
};

export default SoftwareDeveloper;