import styled from 'styled-components';




export const StyledDisplay = styled.div`
img {
    width: 50%;
    max-height: 450px;
    /* max-height: 100px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;

    :hover {
      opacity: 0.8;
    }

     @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    .clickable {
      cursor: pointer;
      }
}`
