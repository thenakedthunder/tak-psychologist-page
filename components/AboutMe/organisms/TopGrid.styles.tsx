import styled from 'styled-components';

export const GridContainer = styled.div`
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-areas: 
    "header header header ."
    "life . image image"
    "list . . .";
    
    grid-template-columns: 40% 120px 100px auto;
    grid-template-rows: auto; 
  }
`;

export const Life = styled.div`
  grid-area: life;
  padding-top: 30px;

  @media screen and (min-width: 1200px) {
    padding-top: 72px;
  }
`;

export const StyledList = styled.div`
  grid-area: list;
  padding-top: 60px;
`;
