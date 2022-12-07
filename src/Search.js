import React from "react";


const Search = ({searchChange}) =>
{ 
    return(
        <input 
            className="pa3 ba br4 bw2 b--gold bg-lightest-blue"
            type="search" 
            placeholder="Search Robots" 
            onChange={searchChange}/>
    )
}

export default Search;