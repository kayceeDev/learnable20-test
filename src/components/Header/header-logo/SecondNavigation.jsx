import React from 'react';

const SecondNavigation = () => {
  return (
       <nav id='main-nav'>
      <div className="container">
      <ul className='list'>
        <li>
          <Link to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/agora">
          software developers
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
      </div>
      </nav>
  );
};

export default SecondNavigation;