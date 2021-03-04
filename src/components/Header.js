import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

import TMDBLogo from './images/tmdb_logo.svg';
import RMDBLogo from './images/reactMovie_logo.png';



import {StyledHeader,
        StyledRMDBLogo,
        StyledTMDBLogo
    } from './styles/StyledHeader';


const Header = () => (
    <StyledHeader>
            <Link to="/">
            <StyledRMDBLogo className="item-a" img src={RMDBLogo} alt="RMDB-Logo" />
            </Link>
            <StyledTMDBLogo className="item-b" img src={TMDBLogo} alt="The Movie Database Logo" />
            <Navigation class="item-c" /> 
    </StyledHeader>
) 

export default Header;