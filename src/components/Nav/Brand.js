import React from 'react';
import './nav.css';

const Brand = (props) => {
  return (
    <a
    className="navbar-brand"
    href= "/">
      <img
      className= "brand-logo"
      src= { props.logo }
      alt= { props.alt } />
    </a>
  );
};

export default Brand