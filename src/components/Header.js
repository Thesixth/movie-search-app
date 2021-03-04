import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import RMDBLogo from './images/reactMovie_logo.png';



import {StyledHeader,
        StyledRMDBLogo,
    } from './styles/StyledHeader';


const Header = () => (
    <StyledHeader>
            <Link to="/">
            <StyledRMDBLogo className="item-a" img src={RMDBLogo} alt="RMDB-Logo" />
            </Link>
            <Navigation class="item-c" /> 
    </StyledHeader>
) 

export default Header;