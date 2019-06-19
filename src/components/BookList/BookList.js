import React, { Component } from 'react';
import Book from './Book';
import './booklist.css';

class BookList extends Component {
  state = {
    id: null,
    name: '',
    author: '',
    price: 0,
    books: [
      {
        id: 1,
        name: "JavaScript",
        author: "Sofiqul Islam",
        price: 15,
      },
      {
        id: 2,
        name: "JavaScript Basics",
        author: "Ahmad Sharif",
        price: 29,
      },
      {
        id: 3,
        name: "Python",
        author: "Zabed Alam",
        price: 13,
      },
      {
        id: 4,
        name: "HTML5",
        author: "Toms Barner",
        price: 17,
      },
    ]
  } //state

  delete = id => {
    let newBooks = this.state.books.filter((book) => book.id !== id)
    this.setState({
      books: newBooks,
    })
  } //delete

  editName = (name, id) => {
    let newBooks = this.state.books.map(book => {
      if(id === book.id) {
        return {
          ...book,
          name
        }
      }

      return book
    })

    this.setState({
      books: newBooks,
    })
  }

  editAuthor = (author, id) => {
    let newBooks = this.state.books.map(book => {
      if (id === book.id) {
        return {
          ...book,
          author
        }
      }

      return book
    })

    this.setState({
      books: newBooks,
    })
  }

  editPrice = (price, id) => {
    let newBooks = this.state.books.map(book => {
      if (id === book.id) {
        return {
          ...book,
          price
        }
      }

      return book
    })

    this.setState({
      books: newBooks,
    })
  }
  submitNewBook = event => {
    event.preventDefault()
    this.state.books.push({
      id: this.state.books.length + 1,
      name: event.target.name,
      author: event.target.author,
      price: event.target.price,
    })
    this.setState({
      books: this.state.books,
    })
    console.log(this.state);
  }
onchange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
  
}
  render() {
    let addNew = () => {
      return(
        <div>
          { 
            document.getElementById('addNew').style.display= "block"
          }
        </div>
      )
    }
    return (
      <div className="container">
        {this.state.books.map((book, index) => (
          <Book
            key = { index }
            info={ book }
            delete = { this.delete }
            editName = { this.editName }
            editAuthor={ this.editAuthor }
            editPrice={ this.editPrice }
            />
        ))}
        <li className="list-group-item bg-secondary">
          <div className="d-flex">
            <i className="fa fa-2x fa-plus text-light mx-auto"
              onClick={addNew}
              ></i>
          </div>
            <div id="addNew">
            <form onSubmit={this.submitNewBook}>
              <input
                type="text"
                name="name"
                placeholder="Book Name"
                value={this.state.name}
                onChange={this.onchange}
              />

              <input
                type="text"
                name="author"
                placeholder="Author Name"
                value={this.state.author}
                onChange= {this.onchange}
              />

              <input
                type="number"
                name="price"
                placeholder="Book Price"
                value={this.state.price}
                onChange={this.onchange}
              />


              <button
                className="btn btn-success mx-1"
                name="submit"
              // onClick={this.save}
              // onClick={ console.log(this.state)}
              >save</button>
              </form>
            </div>
        </li>
      </div>
    )
  }
}
export default BookList