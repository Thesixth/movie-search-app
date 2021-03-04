import React from 'react';
import NoImage from './images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import MovieThumbnail from './MovieThumbnail';
import { StyledMovieInfo } from './styles/StyledMovieInfo';

const MovieInfo = ({ movie }) => (
    <StyledMovieInfo backdrop={movie.backdrop_path}>
        <div className="movieinfo-content">
            <div className="movieinfo-thumb">
                <MovieThumbnail 
                image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage}
                 clickable={false}
                />
            </div>
            <div className="Movieinfo-text">
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>
                    <div>
                        <h3>Movie Rating</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
            </div>
        </div>
    </StyledMovieInfo>
)

export default MovieInfo;