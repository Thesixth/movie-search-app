import React from 'react';
import { StyledGrid, StyledGridContent, StyledGridInfo } from './styles/StyledGrid';

const Grid = ({ header, children}) => (
    <StyledGrid>
        <h1>{header}</h1>
        <StyledGridContent>{children}</StyledGridContent>
        <StyledGridInfo />
    </StyledGrid>
)

export default Grid;