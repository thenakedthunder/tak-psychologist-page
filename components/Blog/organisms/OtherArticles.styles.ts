import styled from 'styled-components';

import { H2 } from 'components/atoms/typography.styles';

export const OtherArticlesContainer = styled.div`
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {    
    background-image: url('/assets/box-more-articles.svg');
    background-repeat: no-repeat;
    background-size: 45%;
    background-position-x: 0px;
    background-position-y: 60%;
    padding-bottom: 300px;
  }

  @media screen and (min-width: 1200px) {
    background-size: 43%;
    background-position-x: 0px;
    background-position-y: 48%;
  }
`;

export const ContentContainer = styled.div`
  padding: 0 40px;
  max-width: 860px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {    
    padding-top: 30px;
  }
`;

export const Header = styled(H2)`
  padding-bottom: 30px;

  @media screen and (min-width: 768px) {    
    padding-bottom: 60px;
  }
`;
