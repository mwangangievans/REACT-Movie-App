import React from 'react'
import { useState } from 'react'
const Searchbar = () => {
    const [searchTerm ,setSearchTerm] = useState ( " ")
    const onSearchHandler = (e) => {
        e.preventDefault();
        console.log("Searching for term " +searchTerm)
    }
    return (
        <div className="searchbar">
       <form className="searchbar__form">
       <input type ="text" placeholder="Search For Tv Show" value={searchTerm}
       onChange={(e)=>setSearchTerm(e.target.value)}
       />
       <button className="btn btn-block" onClick={onSearchHandler}>SEARCH</button>
      
       </form>
            
        </div>
    )
}

export default Searchbar
