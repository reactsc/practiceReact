import React, { Component } from 'react';
import './Navbar.css';
import Button from './Button';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <Button
          link="https://facebook.com/SChoolWab"
          icon="fa fa-steam-square"
          content="SChoolWab"
        />
        <Button
          link="https://facebook.com/SChoolWab"
          icon="fa fa-facebook-square"
        />
        <Button
          link="https://facebook.com/SChoolWab"
          icon="fa fa-youtube-square"
          content="Youtube"
        />
      </nav>
    )
  }
}
export default Navbar