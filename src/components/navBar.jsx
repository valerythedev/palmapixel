import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import logo from '../assets/WordLogo.png';
import palm from '../assets/palma-blanca.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className='navBar-logoContainer'>
        <Link to= {'/'} className='navBar-Palm'>
          <img src={palm} alt='palm' className='logo-palm'/>
        </Link>
        <Link to={'/'} className='navBar-logo'>
<img src={logo} alt='logo' className='logo-img'/>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Let's Work</Link></li>
        <li><Link to="/booking">Services</Link></li>
        <li><Link to="/previous-works">Our Creations</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
