import styled from 'styled-components';

import { LargeParagraph, H2 } from 'components/atoms/typography.styles';

export const TopDescription = styled(LargeParagraph)`
  padding-bottom: 50px;
  font-style: italic;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 120%;
    font-weight: 400;
    padding-bottom: 55px;
  }
`;

export const MainTitle = styled(H2)`
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 120%;
    padding-bottom: 40px;
  }
`;

export const BlogMainContentContainer = styled.div`
  padding: 30px 40px;
  max-width: 860px;
  margin: 0 auto;
  
  @media screen and (min-width: 768px) {
    padding: 60px 40px 0;
  }
`;

export const SocialShareOnlyOnDesktopWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const BottomSocialShareWrapper = styled.div`
  @media screen and (min-width: 768px) {
    padding-top: 15px;
  }
`;
