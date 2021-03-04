import styled from 'styled-components';

export const StyledNavigation = styled.div`
  align-items: center;
  background: #1c1c1c;
  padding: 0;

  .navigation-content {
    font-family: 'Abel', sans-serif;
  color: #fff;
  background: #1c1c1c;
  padding: 5px;
  text-align: center;
  

    nav {
      display: flex;
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
    
  
     li {
       display: inline-block;
        text-decoration: none;
        list-style: none;
        padding: 10px;
        cursor: pointer;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;
