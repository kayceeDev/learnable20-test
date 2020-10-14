import React from 'react';
import {Link} from 'react-router-dom'
// import Logo from './header-logo/';
import './style.css'

const NavigationMenu = () => {
  return (
    <nav id='main-nav'>
      <div className="container">
        <img src={require('./header-logo/logo.png')} alt="logo" className='logo'/>
      <ul className='list'>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/agora">
            Agora
          </Link>
        </li>
        <li>
          <Link to="/startzone">
            StartZone
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className='link-head'>
        <p>build a product with </p>
        <a href="#" className='btn'> DEVSTUDIO</a>
      </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;