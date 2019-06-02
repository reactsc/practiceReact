import React, { Component } from 'react';
import './booklist.css';

class Book extends Component {

  state =  {
    isEditable: false,
  }
  
  

  render() {
    let input = this.state.isEditable ?
      <input
        type="text"
        placeholder="Enter Name"
        value={ this.props.info.name }
        onBlur={ () => this.setState({ isEditable: false }) }
        // onKeyPress= { (e) => key=enter ? this.state.isEditable: false }
        onChange={ (e) => this.props.editName(e.target.value, this.props.info.id) }      
        />
      : <p>{this.props.info.name}</p>

    return (
      <li className="list-group-item d-flex booklist">
          { input }
          <span className="ml-auto"> ${ this.props.info.price } </span>
          <div className="ml-2 action-group">
          <span 
            onClick={ () => this.setState({ isEditable: true }) }>
            <i className="fa fa-pencil text-primary action"></i>
          </span>
          <span 
            onClick={ () => this.props.delete(this.props.info.id) }>
            <i className="fa fa-trash text-danger action"></i>
          </span>
          </div>
      </li>
    )
  }
}
export default Book
