import React, { Component } from 'react'

import Digit from './Digit'

export default class CountDown extends Component {
  render() {
    return (
      <div className="d-flex">
        <Digit
          value={ this.props.time.min }
          name="min"
          color="green" />
        <Digit
          value={this.props.time.sec}
          name="sec"
          color="red" />
        <Digit
          value={this.props.time.ms}
          name="ms"
          color="pink" />
      </div>
    )
  }
}
