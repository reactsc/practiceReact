import React, { Component } from 'react'

import Title from './Title'
import CountDown from './CountDown'
import Controls from './Controls'
import Leps from './Leps'

export default class StopWatch extends Component {

  constructor(props) {
    super(props)

    this.state = {
      time: {
        min  : 0,
        sec  : 0,
        ms   : 0
      },
      laps: []
    }
  }
  getStart() {
    this.intervalID = setInterval(() =>{
      let min = this.state.time.min
      let sec = this.state.time.sec
      let ms = this.state.time.ms

      if (ms >= 10) {
        sec    = sec + 1
        ms     = 0 
      }

      if (sec >= 60) {
        min    = min + 1
        sec    = 0
      }

      this.setState({
        ...this.state,
        time : {
          min,
          sec,
          ms: ms + 1
        }
      })

    }, 100)
  }

  getPause() {
    clearInterval(this.intervalID)
  }

  getLaps() {
    let time = {
      ...this.state.time
    }
    this.setState({
      ...this.state,
      laps: [time, ...this.state.laps]
    })
    // console.log(this.state);
  }

  getReset() {
    this.setState({
      time: {
        min : 0,
        sec : 0,
        ms  : 0
      },
      laps: []
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 offset-md-2 my-5">
          <Title />
          <CountDown time={ this.state.time } />
          <Controls 
            start = { this.getStart.bind(this) }
            pause = { this.getPause.bind(this) }
            laps  = { this.getLaps.bind(this) }
            reset = { this.getReset.bind(this) }
          />
          <Leps lap= { this.state.laps } />
        </div>
      </div>
    )
  }
}