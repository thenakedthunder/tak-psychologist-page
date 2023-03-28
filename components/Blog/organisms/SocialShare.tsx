import styled from 'styled-components';

import { DefaultParagraph } from 'components/atoms/typography.styles';
import { Green050 } from 'components/styling/colors';
import SocialLinks from 'components/Blog/organisms/SocialLinks';

const Container = styled.div`
  padding-bottom: 30px;
  
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    padding-bottom: 63px;
  }
`;

const DefaultParagraphWithCustomPadding = styled(DefaultParagraph)`
  padding-bottom: 0px !important;

  @media screen and (min-width: 768px) {
    padding-top: 8px;
  }
`;

const SocialShare = () => (
  <Container>
    <DefaultParagraphWithCustomPadding className="bold" color={Green050}>
      Tetszik amit olvasol? Oszd meg!
    </DefaultParagraphWithCustomPadding>
    <SocialLinks />
  </Container>
);

export default SocialShare;
