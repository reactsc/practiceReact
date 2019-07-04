import React, { Component } from 'react';

import axios from 'axios';

export default class Posts extends Component {
  state = {
    students: [],
  }
  componentDidMount() {
    // axios.get('http://localhost:3000/students')
    axios.get('https://my-json-server.typicode.com/SChoolWab/fakeAPI/students')
    .then(responce => {
      this.setState({
        students: responce.data
      })
    })
    .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="container">
        <ul className="list-group">
          {
            this.state.students.map((students, index) =>
              (<li className="list-group-item" key={index}>{students.phone}</li>)
            )
          }
        </ul>
      </div>
    )
  }
}
