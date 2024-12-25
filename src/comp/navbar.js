import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // For styling
//U2669165 GAJJAR
  const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>BOOKS</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" exact activeClassName="active-link">Home</Link>
        </li>
        <li>
          <Link to="/add-book" activeClassName="active-link">Add Book</Link>
        </li>
        <li>
          <Link to="/update-book" activeClassName="active-link">Update Book</Link>
        </li>
        <li>
          <Link to="/display-book" activeClassName="active-link">Display Book</Link>
        </li>
      
        
      </ul>
    </nav>
  );
};

export default NavBar;