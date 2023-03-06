import styled from 'styled-components';

import { DefaultParagraph } from 'components/atoms/typography.styles';
import { Grey050 } from 'components/styling/colors';

export const QuestionHeader = styled.div`
  display: grid;
  grid-template-columns: auto 28px;
  column-gap: 28px;

  @media screen and (min-width: 1200px) {
    column-gap: 68px;
  }
`;

export const DividerLine = styled.div`
  height: 1px;
  background-color: ${Grey050};
  margin: 40px 0 30px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 40px;
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
