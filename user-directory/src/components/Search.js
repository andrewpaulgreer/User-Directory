import React from 'react';

function SearchSection(){
    return(
        <div className = "container-fluid searchContainer">
            <header className="col s12">
                <div className="row">
                    <div className="col s6">
                   <h3 className="right-allign headerText">Directory</h3> 
                   </div>

                   <div className="col s6">
                       <div className="input-group mb-3">
                        <input 
                        type="text" class="form-control" 
                        placeholder="Username" 
                        aria-label="Recipient's username"
                        id="users"
                        name="search"
                        list="users"
                        className="inputBox" 
                        aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="searchButton" type="button">Search</button>
                         </div>
                        </div>
                   </div>
                </div>
            </header>
        </div>
    )
}
export default SearchSection