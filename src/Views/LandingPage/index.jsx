import React from 'react';
import SoftwareDeveloper from '../SoftwareDeveloper'
import Apply from '../Apply'
import Home from '../Home'
import Journal from '../Journal'
import Faq from '../Faq'
import ProductDesign from '../ProductDesign'
import './style.css'
import Navigation from '../../components/Header/Navigation'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const LandingPage = () => {
  return (
    <div>
      <Router>

      <Navigation />
      </Router>
    </div>
  );
};

export default LandingPage;