import React, { Component } from 'react';
import './Button.css';


class Button extends Component {
  render() {
    return (
      <a href={ this.props.link } >
        <span className={ this.props.icon }></span>
        <span>{ this.props.content }</span>
      </a>
    )
  }
}
export default Button