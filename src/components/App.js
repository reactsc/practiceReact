import React from 'react';
// import $ from 'jquery';
// import {findDOMNode} from 'react-dom';
import './App.css';

import techer from '../components/asam/assests/team-01.jpg'

import Nav from './Nav/Nav'
import BookList from './BookList/BookList'
import Cover from './asam/Cover'
import ItemCard from './asam/ItemCard'
import ListCard from './asam/ListCard'
import StopWatch from './stopwatch/StopWatch'
import Post from './Blogs/Posts'
import Client from './client/client'

function App() {
  return (
    <div>
      <header>
        <Nav />
        <BookList />
        < Post />
        <Cover />
        
      </header>
      <div className="container">
        <div className="row mx-auto">
          <ItemCard
            cardIcon="fa fa-4x fa-user"
            cardTitle="Form-Flap"
            cardSubtitle="JDC / DAKHIL / ALIM"
          />
          <ItemCard
            cardIcon="fa fa-4x fa-twitter"
            cardTitle="Form-Flap"
            cardSubtitle="JDC / DAKHIL / ALIM"
          />
          <ItemCard
            cardIcon="fa fa-4x fa-print"
            cardTitle="Form-Flap"
            cardSubtitle="JDC / DAKHIL / ALIM"
          />
          <ItemCard
            cardIcon="fa fa-4x fa-cut"
            cardTitle="Form-Flap"
            cardSubtitle="JDC / DAKHIL / ALIM"
          />
          <ItemCard
            cardIcon="fa fa-4x fa-pencil"
            cardTitle="Form-Flap"
            cardSubtitle="JDC / DAKHIL / ALIM"
          />
          <ItemCard
            cardIcon="fa fa-4x fa-flag"
            cardTitle="Form-Flap"
            cardSubtitle="JDC / DAKHIL / ALIM"
          />
        </div>
        {/* ./row */}
        <div className="row">
          <div className="col-sm-12">
            <ListCard
              serial= "1"
              image={techer}
              name= "H. Mostofa Kamal"
              title="Department of Arabic"
              mainCatagory="Teacher"
            />
            <ListCard
              serial="214"
              // image={techer}
              name="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              // title="Department of Arabic"
              date="30th June, 2020"
              mainCatagory="Notice"
            />
            <ListCard
              serial="115"
              image={techer}
              name="H. Mostofa Kamal"
              title="Department of Arabic"
              mainCatagory="Teacher"
            />
            <ListCard
              serial="40"
              image={techer}
              name="H. Mostofa Kamal"
              // title="Department of Arabic"
              mainCatagory="Student"
              address= "Pabna, Bangladesh-6601"
            />
          </div>
          
        </div>
        {/* ./row */ }
          <StopWatch />
          <Client />
          
      </div>
    </div> // ./main
  );
}

export default App;
