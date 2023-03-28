import styled from 'styled-components';

import { H2 } from 'components/atoms/typography.styles';

export const MainContainerWithBackGround = styled.div`
  @media screen and (min-width: 768px) {    
    background-image: url('/assets/box-more-articles.svg');
    background-repeat: no-repeat;
    background-size: 45%;
    background-position-x: 0px;
    background-position-y: 60%;

    @media screen and (min-width: 1200px) {
      background-size: 40%;
      background-position-x: 0px;
      background-position-y: 52%;
    }
  }

  padding-bottom: 300px;
`;

export const ContentContainer = styled.div`
  padding: 0 40px;

  @media screen and (min-width: 768px) {    
    padding-top: 30px;
    max-width: 860px;
    margin: 0 auto;
  }
`;

export const Header = styled(H2)`
  padding-bottom: 60px;
`;
