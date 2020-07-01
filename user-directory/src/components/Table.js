import React from 'react'
import * as ReactBootStrap from "react-bootstrap"

function Table  (props) {
 return (
   
    
     <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Phone</th>
      <th>Email</th>
    </tr>
    
    
  </thead>
    </ReactBootStrap.Table>
    

  
   
 )
}

export default Table