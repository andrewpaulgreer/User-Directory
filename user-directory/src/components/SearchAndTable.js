import React, { Component } from "react";
import User from "../lib/user.json";
import Card from "./Card.js";
export default class Table extends Component {
  state = {
    original: [],
    current: []
  };
  componentDidMount() {
    this.setState({
      original: User,
      current: User
    });
  }

  compareBy(key) {
    return function (a, b) {
      if (""+a[key]<(""+b[key])) return -1;
      if (""+a[key]>(""+b[key])) return 1;
      return 0;
    };}
    
    sortBy(key) {
    let arrayCopy = [...this.state.original];
    arrayCopy.sort(this.compareBy(key));
    //arrayCopy.reverse(); for descending
    this.setState({data: arrayCopy});
    } 
    
    //write this in th
    
  searchHandler = term => {
    const newList = this.state.original.filter(
      user =>
        user.name.first.toLowerCase().includes(term.toLowerCase()) ||
        user.name.last.toLowerCase().includes(term.toLowerCase())
       );
      this.setState({
          current: newList
      })
  };
  render() {
    //return is a callback
    return (
      <>
        <input 
         type="text" className="form-control" aria-label="Large"
        onChange={event => this.searchHandler(event.target.value)} />
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
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
