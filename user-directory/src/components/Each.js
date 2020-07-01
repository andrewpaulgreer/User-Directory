import React from "react";

function Each(props){
    return(
    <tr>
    <th scope="row"><img alt={props.firstName} src ={props.picture} /></th>
    <td>{props.firstName}</td>  
    <td>{props.lastName}</td> 
    <td>{props.phone}</td> 
    <td>{props.email}</td>     
    </tr> 
    )
}