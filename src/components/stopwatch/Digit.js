import React, { Component } from 'react'

import './stopwatch.css'

export default class Digit extends Component {
  render() {
    return (
      <div className="col-md-4 my-5">
        <div 
          className="digit"
          style={{
            color         : this.props.color,
            borderColor   : this.props.color 
            }}>
          <h1 className="display-2">
            {this.props.value < 10 
              ? `0${this.props.value}` 
              : this.props.value }
            </h1>
          <span>{this.props.name}</span>
        </div>
      </div>
    )
  }
}
