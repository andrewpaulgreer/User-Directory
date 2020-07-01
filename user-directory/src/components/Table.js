import React from 'react'
import * as ReactBootStrap from "react-bootstrap"

function Table  (props) {
 return (
   <table className="col s12 table">
    {props.results.map((result) => (
     <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>first name</th>
      <th>last name</th>
      <th>Phone</th>
      <th>Email</th>
    </tr>
  </thead>
    </ReactBootStrap.Table>
    ))}
   </table>
   
 )
}

export default Table