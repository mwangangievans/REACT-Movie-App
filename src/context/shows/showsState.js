import { useReducer } from "react";
import axios from 'axios'
import {ShowsContext } from './showsContext';
import {ShowsReducer} from './showsReducer';


import { CLEAR_SINGLE_SHOW, SEARCH_SHOWS, SET_LOADING, SET_SINGLE_SHOW } from "../types";




const showsState = (props) => {
    const initialState = {
        shows:[],
        SingleShow:{},
        loading:false

    }
    const [state, dispatch] = useReducer (ShowsReducer ,initialState);
    const searchShows = async (searchTerm) =>{
        dispatch({type:SET_LOADING});
        //axios

        const {data } = await axios.get(` https://api.tvmaze.com/search/shows?q=${searchTerm}`);

        console.log(data);
        
        dispatch({
            type:SEARCH_SHOWS,
            payload:data
        })

    }
    return (
        <ShowsContext.Provider    value={{
             shows:state.show,
             SingleShow:state.SingleShow,
             loading:state.loading   
        }}>
         
        {props.children}
        </ShowsContext.Provider>
    )
}

export default showsState


