import React, { Component } from 'react';
import './booklist.css';

class Book extends Component {

  state =  {
    isEditable: false
  }
  
  enterTextarea= (e) => {
    if(e.key === 'Enter') {
      this.setState({
        isEditable:false
      })
    }
  }
  save = () => {
    console.log(this.state)
    this.setState({isEditable: false})
    console.log(this.state)
  }
  render() {
    let output = this.state.isEditable ?
      <div className="d-flex">
        <input
          type="text"
          placeholder="Book Name"
          value={this.props.info.name}
          // onBlur={() => this.setState({ isEditable: false })}
          onKeyPress={this.enterTextarea}
          onChange={e => this.props.editName(e.target.value, this.props.info.id)}
        />
        
        <input
          type="text"
          placeholder="Author Name"
          value={this.props.info.author}
          // onBlur={() => this.setState({ isEditable: false })}
          onKeyPress={this.enterTextarea}
          onChange={e => this.props.editAuthor(e.target.value, this.props.info.id)}
        />

        <input
          type="number"
          placeholder="Book Price"
          value={this.props.info.price}
          // onBlur={() => this.setState({ isEditable: false })}
          onKeyPress={ this.enterTextarea }
          onChange={e => this.props.editPrice(e.target.value, this.props.info.id)}
        />


        <button 
          className="btn btn-success mx-1"
          onClick={ this.save }
          // onClick={ console.log(this.state)}
          >save</button>
        <button 
          className="btn btn-danger mx-1"
          onClick={() => this.props.delete(this.props.info.id)}
          >Delete</button>
      </div>
      : <div className="d-flex">
        <p>{this.props.info.name} by
          <a href="/" className="author-name"> {this.props.info.author} </a>
        </p>
        <span className="ml-auto"> ${this.props.info.price} </span>
      </div>

    return (
      <li
        className="list-group-item booklist"
        onClick={ () => this.setState({ isEditable: true }) } >
        {output}
        </li>
    )
  }
}
export default Book
