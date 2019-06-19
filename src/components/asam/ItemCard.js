import React, { Component } from 'react'
import './asam.css'

export default class ItemCard extends Component {
  render() {
    return (
      
        <div className="col-sm-6 col-md-4">
        <a href="/">
          <div className="itemCard">
            <div className="cardIcon my-2 mx-auto">
              <i className={this.props.cardIcon}></i>
            </div>
            <h1>{this.props.cardTitle}</h1>
            <h5>{this.props.cardSubtitle}</h5>
          </div>
        </a>
        </div>
      
    )
  }
}