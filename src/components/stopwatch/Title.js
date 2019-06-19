import React, { Component } from 'react'

import './stopwatch.css'

export default class Title extends Component {

  constructor(props){
    super(props)

    this.state = {
      title: "This is a dummy text",
      isInput: false
    }
  }

  editTitle () {
    this.setState({
      ...this.state,
      isInput: true
    })
  }
  changeTitle (e) {
    this.setState({
      ...this.state,
      title: e.target.value
    })
  }

  render() {
    
    let output = null
    if ( this.state.isInput ) {
      output = (
      <input
        type="text"
        name="title"
        className="title-input"
        value={this.state.title}
        onChange={ e => this.changeTitle(e) }
        onBlur={ () => this.setState({ isInput:false }) }
        onKeyPress={
          e => e.key === 'Enter' 
            ? this.setState({ ...this.state, isInput: false })
            : this.setState({ ...this.state, isInput: true }) }
        placeholder="Enter a Title"
      />
      )
    } else {
      output = (
      <div className="title">
        <h1 className="display-4 text-center">
          {this.state.title}
        </h1>
        <span className="edit-icon" onClick={ ()=> this.editTitle() } >
          <i className="fa fa-pencil"></i>
        </span>
      </div>
      )
    }
    
    return output
  }
}
