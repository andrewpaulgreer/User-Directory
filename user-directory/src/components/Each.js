import React from "react";

function Each(props){
    return(
    <tr>
    <td>{`${props.Users.name.first}`}</td>  
    <td>{`${props.Users.name.last}`}</td> 
    <td>{`${props.Users.phone}`}</td> 
    <td>{`${props.Users.email}`}</td>     
    </tr>
    
    )
}

export default Each