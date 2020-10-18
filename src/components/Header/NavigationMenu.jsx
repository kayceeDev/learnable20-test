import React, {useState} from 'react';
import {Link} from 'react-router-dom'
// import Logo from './header-logo/';
import '../Header/css/style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const NavigationMenu = () => {
  
  const [showMenu, setShowMenu] = useState(false);
  
  const falseMenu =()=>{
    setShowMenu(false)
  }

  let menu;



  if (showMenu){
    menu =
    <nav>
      <div className="container">
        <div>
    <ul  id='mobile-list'>
        <li >
          <Link to="/learnable">
            Learnable
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
    </div>
    </div>
    
    </nav>
  } else{
    menu= <nav id='main-nav'>
    <div className="container">
      <Link to='/1' ><img src={require('./header-logo/logo.png')} alt="logo" className='logo'/></Link>
    <ul className='list '>
      <li >
        <Link to="/learnable">
          Learnable
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
    <div>
    <span className='ham-icon'>
      <FontAwesomeIcon  icon={faBars} onClick={() => setShowMenu(!showMenu)}/>
    </span>
    </div>
    </div>
  </nav>
  }

  
 
  return (
   menu
  );
};

export default NavigationMenu;