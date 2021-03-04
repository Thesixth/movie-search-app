import styled from 'styled-components';

export const StyledFavourites = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    min-height: 90vh;
    width: 100%;

    h1, span {
        background-color: #000;
    }
    


`;
export default StyledFavourites;

export const StyledMovieGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    height: 100%;

    @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 668px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;