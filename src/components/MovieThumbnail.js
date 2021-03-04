import React from 'react';
import { Link } from 'react-router-dom';


import { StyledMovieThumbnail } from './styles/StyledMovieThumbnail';


const MovieThumbnail = ({ image, title, movieId, clickable }) => (
<StyledMovieThumbnail>
    {
        clickable ? (
        <Link to={`/${movieId}`}>
             <img className="clickable" src={image} alt="moviethumbnail" /> 
        </Link> )
        :   (<img src={image} alt="moviethumbnail" />)
    }
    </StyledMovieThumbnail>
)

export default MovieThumbnail;