import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ece4b7;  
    margin: 0 auto;
    padding: 5px;
    box-sizing: border-box;
    color: white;
    font-family: 'Abel', sans-serif;
    font-size: 20px;
    list-style: none;
    width: 100%;
    min-height: 100vh;

    a, li{
      color: #fff;
    }
  
  
      a:hover,
      a:focus,
      a:active{
          background-color: rgba(255, 255, 255, 0.612);
      }  

     
}
`;

