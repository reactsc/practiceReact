import React, { Component } from 'react'

import Button from './Button'

export default class Controls extends Component {

  constructor(props) {
    super(props)

    this.state = {
      start : true,
      pause : false,
      lap   : false,
      reset : false
    }
  }

  start() {
    this.setState({
      ...this.state,
      start : false,
      pause : true,
      lap   : true,
    })
    this.props.start()
  }
  pause() {
    this.setState({
      ...this.state,
      start :true,
      reset : true,
      lap   : false
    })
    this.props.pause()
  }
  lap() {
    this.props.laps()
  }
  reset() {
    this.setState({
      ...this.state,
      start : true,
      pause : false,
      lap   : false,
      reset : false
    })
    this.props.reset()
  }

  getControlers() {
    let output = null
    if (this.state.start && !this.state.reset) {
      output = (
        <div className="text-center">
          <Button
            className="btn btn-success"
            value="Start"
            onClick={e => this.start()}
            // onClick = {  }
          />
        </div>
      )
    } else if (this.state.pause && this.state.lap) {
      output = (
        <div className="text-center">
          <Button
            className="btn btn-primary"
            value="Pause"
            onClick={e => this.pause()}
          />
          <Button
            className="btn btn-secondary"
            value="Lap"
            onClick={e => this.lap()}
          />
        </div>
      )
    } else if (this.state.start && this.state.reset && !this.state.lap) {
      output =(
        <div className="text-center">
          <Button
            className="btn btn-success"
            value="Start"
            onClick={e => this.start()}
          />
          <Button
            className="btn btn-danger"
            value="Reset"
            onClick={e => this.reset()}
          />
        </div>
      )
    }
    return output
  }

  render() {
    return this.getControlers()
  }
}
