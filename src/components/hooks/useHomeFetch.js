import {useState, useEffect } from 'react';
import { POPULAR_BASE_URL } from '../../config';

export const useHomeFetch = () => {
    const [state, setState] = useState({movies: []});
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

console.log(state)


const fetchMovies = async endpoint => {
    setError(false);
    setLoading(true);

    const isLoadmore = endpoint.search('page');

    try {

        const result = await (await fetch(endpoint)).json(); 
        
        setState(prev => ({
           ...prev,
        movies:
            isLoadmore !== -1 
        ?   [...prev.movies, ...result.results]
        :   [...result.results],
        currentPage: result.page,
        totalPages: result.total_pages  

        }));

    } catch (error) {
        setError(true);
    }
    setLoading(false)
}

    useEffect( () =>  {
        fetchMovies(POPULAR_BASE_URL);
    }, [] )

    return [{state, loading, error}, fetchMovies];
}