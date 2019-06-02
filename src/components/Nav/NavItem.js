import React from 'react';
import './nav.css';

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={ props.url }>
        <i className={ props.icon }></i>
        { props.title }
      </a>
  </li>
  );
};

export default NavItem