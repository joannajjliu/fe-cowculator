import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top mb-5 cowculator-header__container">
      <div className="container-fluid">
        <Link className="navbar-brand" aria-current="page" to="/">
          CowCulator
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/hospital">
                <i className="bi bi-bell-fill" data-toggle="tooltip" title="alerts" id="alerts-icon"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/hospital-room">
                <i className="bi bi-share-fill" data-toggle="tooltip" title="share" id="share-icon"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/hospital">
                <i className="bi bi-search" data-toggle="tooltip" title="search" id="search-icon"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
