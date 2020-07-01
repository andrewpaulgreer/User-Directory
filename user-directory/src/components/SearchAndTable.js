import React, {Component} from "react";
import Each from "./Each";
import Users from "../lib/users.json";


export default class SeachAndTable extends Component {
    state= {
        result: [],
        current: [],
    }


componentDidMount(){
 this.setState({
     result: Users,
     current: Users
 })
} 


filterUsers = (key) => {
console.log(key)

let filterResponse = this.state.result.filter(user => user.firstName === key)
this.setState({
    result: filterResponse
})
}
handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

handleFormSubmit = event => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.filterUsers(value);

    this.setState({
      [name]: value
    });
    this.filterUsers(value)
    this.filterUsers(this.state.search)
}
render(){
    return(
        <>
        <input onChange={event => this.searchHandler(event.target.value)}/>
        <table className="table">
        <thread className="thread-dark">
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
        </thread>
        </table>
        </>
    )
}

}
