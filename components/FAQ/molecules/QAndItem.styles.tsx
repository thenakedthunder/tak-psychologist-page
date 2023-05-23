import styled from 'styled-components';

import { DefaultParagraph } from 'components/atoms/typography.styles';

export const QuestionHeader = styled.div`
  display: grid;
  grid-template-columns: auto 28px;
  column-gap: 28px;

  @media screen and (min-width: 1200px) {
    column-gap: 68px;
  }
`;

export const DefaultParagraphWithTopPadding = styled(DefaultParagraph)`
  padding-top: 20px;
  
  @media screen and (min-width: 1200px) {
    padding-top: 16px;
  }
`;

export const OpenToggle = styled.div`
  cursor: pointer;
`;
