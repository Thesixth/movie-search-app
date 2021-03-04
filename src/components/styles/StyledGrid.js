import styled from 'styled-components';

export const StyledGrid = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    font-family: 'Abel', sans-serif;
    font-size: 42px;

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

export const StyledGridInfo = styled.div`
 background-color: #0cf5b4;
    p, h3, h4, .score, a {
      text-decoration: none;
      color: #000;
     
    } 

.score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 25px;
    margin: 0px 0 0 0;
  
  }
`
export default StyledGridInfo;


export const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  
  grid-gap: 40px;
  position: relative;

  .grid-element {
    animation: animateGrid 0.5s;
  }

  @keyframes animateGrid {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media screen and (min-width: 668px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(6, minmax(100px, 1fr));
  }
`;