import React from 'react';
import '../styles/StickyFooter.scss';

const StickyFooter: React.FC = () => (
  <footer className="footer cowculator-sticky-footer__footer">
    <div className="container cowculator-sticky-footer__container">
      <i className="bi bi-person-fill px-1 icon" data-toggle="tooltip" title="search" id="search-icon"></i>
      <i className="bi bi-people-fill px-1 icon" data-toggle="tooltip" title="search" id="search-icon"></i>
      <i className="bi bi-gear-fill px-1 icon" data-toggle="tooltip" title="search" id="search-icon"></i>
      <span className="px-1 cowculator-sticky-footer__copyright-text">Copyright © 2021 CowCulator</span>
    </div>
  </footer>
);

export default StickyFooter;
