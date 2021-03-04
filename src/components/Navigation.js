import React from 'react';
import { Link } from 'react-router-dom';

import { StyledNavigation } from './styles/StyledNavigation';



const Navigation = () => (
    <StyledNavigation>
        <nav className="navigation-content">
            <ul>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/favourites">
                <li>Favourite Movies</li>
            </Link>
            <Link to="/about">
                <li>About</li>
            </Link>
            </ul>
        </nav>
    </StyledNavigation>
)

export default Navigation;