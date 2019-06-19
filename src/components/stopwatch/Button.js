import React, { Component } from 'react'

import './stopwatch.css'

export default class Button extends Component {
  render() {
    return (
      <button 
        className={this.props.className}
        style={{margin:'0 10px',padding:'10px 50px'}}
        onClick={this.props.onClick}
        >
        { this.props.value }
      </button>
    )
  }
}
