import React, { Component } from 'react'
import './asam.css'
import bg1 from './assests/bg1.jpg'

export default class Cover extends Component {
  render() {
    return (
        <div className="bg-primary coverImage my-2">
          <img className="container-fluid" src={bg1} alt="ssff" />
          <span className="imageCaption">This is a demo Image</span>
        </div>
    )
  }
}
