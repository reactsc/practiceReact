import React from 'react';
// import $ from 'jquery';
// import {findDOMNode} from 'react-dom';
import './App.css';

import Nav from './Nav/Nav';
import BookList from './BookList/BookList';

function App() {
  return (
    <div>
      <header>
        <Nav />
        <BookList />
      </header>
    </div>
  );
}

export default App;
