import styled from 'styled-components';

import { DefaultParagraph } from 'components/atoms/typography.styles';
import { Grey010 } from 'components/styling/colors';

export const ItemContainer = styled.div`
  padding-bottom: 45px;

  @media screen and (min-width: 768px) {
    padding-bottom: 0px;
  }
`;

export const OuterIconContainer = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
`;

export const LightGreySquare = styled.div`
  height: 24px;
  width: 24px;
  background-color: ${Grey010};
  position: absolute;
  bottom: 0px;
  left: 0;
`;

export type PositionedContainer = {
  left?: string;
  bottom?: string;
};

export const IconContainer = styled.div<PositionedContainer>`
  position: absolute;
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
`;

export const TitleContainer = styled.div`
  padding: 16px 0;
`;

export const StyledDefaultParagraph = styled(DefaultParagraph)`
  padding-right: 15px;

  @media screen and (min-width: 768px) {
    padding-right: 0px;
  }
`;

export const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 4px;
  padding-top: 22px;
  width: 124px;
  position: relative;
`;

export const ArrowIconContainer = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
`;