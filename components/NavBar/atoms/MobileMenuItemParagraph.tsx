import styled from 'styled-components';
import { DefaultParagraph } from 'components/atoms/typography.styles';

const MobileMenuItemParagraph = styled(DefaultParagraph)`
  font-size: 20px;

  @media screen and (min-width: 576px) {
    margin: auto;
  }
`;

export default MobileMenuItemParagraph;
