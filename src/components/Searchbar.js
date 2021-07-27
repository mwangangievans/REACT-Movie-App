import React from 'react'
import { useState,useContext } from 'react'
//Context
import ShowContext from '../context/shows/showsContext';
//components
import Alert from './Alert'
const Searchbar = () => {
    const [searchTerm ,setSearchTerm] = useState ( " ")
    const {searchShows} = useContext(ShowContext);
    const onSearchHandler = (e) => {
        e.preventDefault();

       searchShows(searchTerm);
        }
    return (
        <div className="searchbar">
        <Alert message="Please enter something" type="danger"/>
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
