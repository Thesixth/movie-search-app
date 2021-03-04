import React, { useContext }from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';
import { Footer } from './Footer';
import StyledFavourites, {StyledMovieGrid}  from './styles/StyledFavourites';
import Header from './Header';


export const Favourites = () => {
    const {favourites} = useContext(GlobalContext);
    return (
        <>
        <Header />
        <StyledFavourites>
            <div className="container">
                <div className="header">
                    <h1>My Favourite Movies</h1>
                    <span className="count-pill">You have {favourites.length} </span>
                </div>
                {favourites.length > 0 ? (
                    <StyledMovieGrid>
                    {favourites.map( (movie) => (
                      <MovieCard movie={movie} type="favourites" />
                    ))}
                </StyledMovieGrid>
                ) : (<h2 className="no-movies">Add some Movies</h2>)}
                

            </div>
         
        </StyledFavourites>
        <Footer />  
        </>
    );
};

export default Favourites;