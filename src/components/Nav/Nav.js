import React, { Component } from 'react';

import NavItem from './NavItem';
import Brand from './Brand';
import logo from '../../logo.png'
import './nav.css';

export default class Nav extends Component {
  state = {
      brand : {
        logo: logo,
        companyName: "Cilo"
      },
      manu: [
        {
          id: 1,
          title: "Home",
          url: "/",
          icon: "fa fa-home"
        },
        {
          id: 2,
          title: "Portfolio",
          url: "/portfolio",
          icon: "fa fa-book"
        },
        {
          id: 3,
          title: "Contact",
          url: "/contact",
          icon: "fa fa-phone"
        },
        {
          id: 4,
          title: "About",
          url: "/about",
          icon: "fa fa-info"
        }
      ]
    } //state

  render() {
    // Warring!!!!!!!   Please Dont touch in this area...
    return (
      <nav className="container-fluid navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Brand
          logo = { this.state.brand.logo }
          alt = { this.state.brand.companyName }
          />

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown">
            <ul className="navbar-nav">
              { this.state.manu.map(manu => (
                <NavItem
                  key   = { manu.id }
                  icon  = { manu.icon }
                  title = { manu.title }
                  url   = { manu.url } 
                />
              ))}
            </ul>
            <form className="form-inline ml-auto">
              <input className="form-control" type="search" placeholder="Search..." />
            </form>
          </div>
        </div>
      </nav>
    )
  }
}
