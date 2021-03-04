import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';


//initial state
const initialState= {
    favourites: localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : []
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const Globalprovider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(state.favourites))
    }, [state]);


    //actions
    const addMovieToFavourites = movie => {
        dispatch({type: "ADD_MOVIE_TO_FAVOURITES", payload: movie})
    };

    const removeMovie = (id) => {
        dispatch({ type: "REMOVE_MOVIE", payload: id });
    }

    return (
        <GlobalContext.Provider value={{favourites: state.favourites,
             addMovieToFavourites,
             removeMovie,
        }}
        >
         {props.children}   
        </GlobalContext.Provider>
    )
};