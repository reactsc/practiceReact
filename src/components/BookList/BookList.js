import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component {
  state = {
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

  

  render() {
    return (
      <div className="container">
        {this.state.books.map((book, index) => (
          <Book
            key = { index }
            info={ book }
            delete = { this.delete }
            editName = { this.editName }
            />
        ))}
      </div>
    )
  }
}
export default BookList