import React, { useContext } from 'react';
import {useParams} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';


import MovieInfo from './MovieInfo';
import Spinner from './Spinner';
import { Footer } from './Footer';

import { useMovieFetch } from './hooks/useMovieFetch';
import { StyledIndividualMovie } from './styles/StyledIndividualMovie';
import Header from './Header';

const IndividualMovie = () => { 

    let { movieId } = useParams();

    const [movie, loading, error] = useMovieFetch(movieId);
    const { addMovieToFavourites, favourites } = useContext(GlobalContext);
    const { removeMovie } = useContext(GlobalContext);


    let storedMovie = favourites.find(o => o.id === movie.id);

    const favouritesDisabled = storedMovie ? true : false
    
    if (error) return <div>Error...</div>;
    if (loading) return <Spinner />;
    
    
    return (
        <div>
            <Header />
            <MovieInfo key={movie.id} movie={movie} />
            <StyledIndividualMovie>
                <button className="btn"
                disabled={favouritesDisabled}
                onClick={() => addMovieToFavourites(movie)}>
                Like
                </button>
                <button className="btn"
                onClick={() => removeMovie(movie.id)}>
                Dislike
                </button>
            </StyledIndividualMovie>
            <Footer />
        </div>
    )
 };


export default IndividualMovie;