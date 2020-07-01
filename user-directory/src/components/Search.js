import React from 'react';

function SearchSection(props){
    return(
        <form className = "container-fluid search-container" value={props.search}>
            <header className="col s12">
                <div className="row">
                    <div className="col s6">
                   <h3 className="right-allign headerText">Directory</h3> 
                   </div>

                   <div className="col s6">
                       <div className="input-group mb-3">
                        <input 
                        type="text" className="form-control inputBox" 
                        onChange={props.handleInputChange}
                        placeholder="User's name" 
                        aria-label="Recipient's username"
                        id="search"
                        name="search"
                        list="users"
                        aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button onClick={props.handleFormSubmit} className="searchButton" type="button">Search</button>
                         </div>
                        </div>
                   </div>
                </div>
            </header>
        </form>
    )
}
export default SearchSection