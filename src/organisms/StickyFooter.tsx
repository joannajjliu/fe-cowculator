import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/StickyFooter.scss';

const StickyFooter: React.FC = () => (
  <footer className="footer cowculator-sticky-footer__footer">
    <div className="container cowculator-sticky-footer__container">
      <i className="bi bi-person-fill px-1 icon" data-toggle="tooltip" title="person" id="person-icon"></i>
      <i className="bi bi-people-fill px-1 icon" data-toggle="tooltip" title="people" id="people-icon"></i>
      <Link className="nav-link active cowculator-sticky-footer__icon-link" aria-current="page" to="/settings">
        <i className="bi bi-gear-fill px-1 icon" data-toggle="tooltip" title="gear" id="gear-icon"></i>
      </Link>
      <span className="px-1 cowculator-sticky-footer__copyright-text">Copyright © 2021 CowCulator</span>
    </div>
  </footer>
);

export default StickyFooter;
