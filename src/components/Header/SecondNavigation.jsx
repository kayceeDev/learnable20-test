import React from 'react';
import { Link} from 'react-router-dom'
import '../Header/css/secondNavstyle.css'

const SecondNavigation = () => {
  return (
       <nav id='second-nav'>
      <div className="home-container">
      <ul className='list '>
        <li >
          <Link to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/software-developer">
          Software Developers
          </Link>
        </li>
        <li>
          <Link to="/product-designer">
            Product Designer
          </Link>
        </li>
        <li>
          <Link to="/apply">
            Apply
          </Link>
        </li>
        <li>
          <Link to="/journal">
            Journal
          </Link>
        </li>
        <li>
          <Link to="/faq">
            FAQ
          </Link>
        </li>
      </ul>
      </div>
      </nav>
  );
};

export default SecondNavigation;