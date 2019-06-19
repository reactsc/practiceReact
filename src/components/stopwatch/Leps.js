import React, { Component } from 'react'

export default class Leps extends Component {
  render() {
    return (
      <ul className="list-group my-5 laps">
        {
          this.props.lap.map( (lap, index) => {
            return(
              <li key="index" className="list-group-item d-flex">
                {`${lap.min} min ${lap.sec} sec ${lap.ms} ms`}
              </li>
            )
          })
        }
      </ul>
    )
  }
}
