import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;
  display: block;
  align-content: center;
  width: 100%;
  max-height: 300px;


  .header-content {
    align-items: center;
    padding: 0;
    margin: 0 auto;
    box-sizing: border-box;
   
      /* may use grid later

      .item-a{
        grid-area: logo;
      }
      .item-b{
        grid-area: tmdblogo;
      }
      .item-c{
        grid-area: navigation;
      }

    margin: 0 auto;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: 
      "logo tmdblogo"
      "navigation navigation";
*/
  }
`;

export const StyledRMDBLogo = styled.img`
  height: 90px;
  width: 90px;
  margin: 0 auto;
  display: block;
  padding-top: 10;
`;


export const StyledTMDBLogo = styled.img`
  width: 10%;
  margin: 0 auto;
  display: block;
  height: auto;
  padding-bottom: 10px;
`;
