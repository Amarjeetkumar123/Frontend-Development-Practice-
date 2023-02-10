import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="fas fa-bars"></div>
        <div className="logo">My Hotel</div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div>
          <button className="btn">Order Now</button>
        </div>
      </header>
    </div>
  );
}

export default Navbar