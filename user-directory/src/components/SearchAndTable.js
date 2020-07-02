import React, { Component } from "react";
import User from "../lib/user.json";
import Card from "./Card.js";
export default class Table extends Component {
  state = {
    original: [],
    current: [],
  };
  componentDidMount() {
    this.setState({
      original: User,
      current: User
    });
  }

// do sorting here

    
  
    
  searchHandler = term => {
    const newList = this.state.original.filter(
      user =>
        user.name.first.toLowerCase().includes(term.toLowerCase()) ||
        user.name.last.toLowerCase().includes(term.toLowerCase())
       );
      this.setState({
          current: newList
      })
      console.log(newList)
  };
  render() {
    //return is a callback
    return (
      <>
      <div>
        <h1 className="title"><strong>User Directory</strong></h1>
      </div>
        <input 
         type="text" className="form-control search" aria-label="Large"
         placeholder="Search"
        onChange={event => this.searchHandler(event.target.value)} />
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col"><button type="button" onClick={(event) => this.sortBy(event.target.value)}>Number</button></th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Cell Phone</th>
            </tr>
          </thead>
          <tbody>
            {/* that is a component below */}
            {this.state.current.map((user, index) => (
              <Card User={user} index={index} key={user.id.value} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
