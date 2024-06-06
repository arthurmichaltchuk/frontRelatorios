import React from 'react';
// import { NavLink } from 'react-router-dom';
import imgFrete from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-light navbar navbar-expand-lg shadow-sm p-2">
      <div className="container-fluid d-flex justify-content-center align-items-center">

        <div className="navbar">
          <img className="logo" src={imgFrete} height={40} alt="Logo" />
        </div>

        {/* <div>
          <NavLink to='/' className="link me-5">Home</NavLink>
        </div> */}

      </div>
    </nav>
  );
}

export default Navbar;
