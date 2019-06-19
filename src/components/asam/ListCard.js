import React, { Component } from 'react'
import './asam.css'


export default class ListCard extends Component {
  render() {
    return (
      <li className="list-group-item list-item">
          <div className="d-flex">

            {/* Serial Number */}
            <span className="my-auto listSLnumber">
              {this.props.serial}.
            </span>

            {/* Student/ Techer's Photo or Null */}
            {
              this.props.image
              ? <span className="ml-3 my-auto">
                  <img style={{ width: '80px', height: '80px' }} src={this.props.image} alt="sfd" />
                </span>
              : null
            }

          {/* Student/ Techer's Name or Notice's Name */}
          <span className="mr-auto my-auto ml-3">
            <h4>{this.props.name}</h4>
            {
              this.props.mainCatagory === 'Notice'
                ? <p className="my-0">{this.props.date}</p>   //for Notice
                : null
            }
            {
              this.props.mainCatagory === 'Student'
                ? <p className="my-0">{this.props.address}</p>   // for Student
                : <p className="my-0">{this.props.title}</p>    //for Teacher
            }
              
            {/* List Actions */}
            </span>
            <span className="ml-auto my-auto">
              <div className="display-inline list-action">
              {
                this.props.mainCatagory === 'Student'   // only for Student
                ? <a className="mx-1" href="/">View Result</a>
                : null
              }
              {
                this.props.mainCatagory === 'Notice'    // only for Notice
                  ? <a className="mx-1" href="/">
                      <i className="fa fa-download"></i> Download
                    </a>
                    // Only for Teacher
                  : <span>
                      <a className="mx-1" href="/">Sent a Mail</a>
                      <a className="mx-1" href="/">Report This {this.props.mainCatagory}</a>
                    </span>
              }
              </div>
            </span>
          </div>
        </li>
    )
  }
}
