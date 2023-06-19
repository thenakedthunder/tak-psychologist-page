import styled from 'styled-components';

import {
  H2, H3, DefaultParagraph, LargeParagraph,
} from 'components/atoms/typography.styles';
import { Container } from 'components/WhatICanHelpYouWith/organisms/WhatICanHelpYouWith.styles';

export const SubPageContainer = styled(Container)`
  max-width: 840px;
  padding: 30px 40px;
  
  @media screen and (min-width: 768px) {
    padding: 60px 40px;
  }
`;
export const PageHeader = styled(H2)`
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
`;

export const PageSubHeader = styled(H3)`
  padding: 10px 0 30px;
`;

export const Text = styled(DefaultParagraph)`
  padding-bottom: 30px;
`;

export const Description = styled(LargeParagraph)`
  padding-bottom: 30px;
`;
