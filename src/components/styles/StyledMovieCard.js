import styled from 'styled-components';

export const StyledMovieCard = styled.div`
  background-position: center !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;

  .movieinfo-content {
    max-width: 1280px;
    margin: 0 auto;
    border-radius: 20px;
    position: relative;
  }

  .movieinfo-thumb {
    width: 300px;
    height: auto;

    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
  }

  .movieinfo-text {
    font-family: Arial, Helvetica, sans-serif;
    padding: 40px;
    overflow: hidden;

    h1 {
      font-family: 'Abel', sans-serif;
      font-size: 48px;
      margin: 0;

      @media screen and (max-width: 1000px) {
        font-size: 32px !important;
      }
    }

    h3, p, h4, Link, a {
      font-size: 16px;
      line-height: 0;
      text-decoration: none;
    }

    p {
      font-family: 'Abel', sans-serif;
      font-size: 18px;
      line-height: 26px;
    }
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

  @media  (min-width: 358px) {
    max-height: 500px;
    height: auto;
    margin: 0 auto;
  }

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;


export default StyledMovieCard;