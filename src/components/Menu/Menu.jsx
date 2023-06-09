import React from 'react';
import './MenuStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Menu = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/images/logo.png" alt="Logo" className="navbar-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between align-items-center" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Videos
              </a>
            </li>
          </ul>
          <div>
            <img src="/images/user.png" alt="Imagen 1" className="navbar-image" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;





