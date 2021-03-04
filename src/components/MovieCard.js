import React from 'react'
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL  } from '../config';
import StyledMovieCard from './styles/StyledMovieCard';


export const MovieCard = ({movie}) => {
    return (
        <StyledMovieCard>
            <div className=".movieinfo-thumb">
            {movie.poster_path ? (
                    <img src={`${IMAGE_BASE_URL}w200${movie.poster_path}`} 
                    alt={`${movie.title} Poster`}
                    />
                ): <div className="filler-poster">No poster</div>
            }
            </div>

        </StyledMovieCard>
    )
}
export default MovieCard;
