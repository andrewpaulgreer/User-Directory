import React from 'react'
import * as ReactBootStrap from "react-bootstrap"

function Table  () {

const users = [
    {name: "Dirty Harry", phone: "828-778-8588", email: "Worker@work.com", dob: "04/02/19" },
    {name: "Dirty Harry", phone: "828-778-8588", email: "Worker@work.com", dob: "04/02/19" },
    {name: "Dirty Harry", phone: "828-778-8588", email: "Worker@work.com", dob: "04/02/19" },
    {name: "Dirty Harry", phone: "828-778-8588", email: "Worker@work.com", dob: "04/02/19" },
    {name: "Dirty Harry", phone: "828-778-8588", email: "Worker@work.com", dob: "04/02/19" },
  ]
 const renderUser = (user, index)=> {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
      <td>{user.dob}</td>
    </tr>
  );
 }

 return (
   <div className="col s12 table">
     <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>DOB</th>
    </tr>
  </thead>
  <tbody className="">
  {users.map(renderUser)}
  </tbody>
</ReactBootStrap.Table>
   </div>
 )
}

export default Table