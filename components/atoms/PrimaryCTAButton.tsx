import styled from 'styled-components';

import { DefaultParagraph } from 'components/atoms/typography.styles';

interface PrimaryCTAButtonStyledProps {
  backgroundColor: string;
}

const PrimaryCTAButtonStyled = styled.button`
  background-color: ${(props: PrimaryCTAButtonStyledProps) => props.backgroundColor};
  width: 100%;
  height: 62px;
  padding: 0;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

interface PrimaryCTAButtonProps {
  text: string;
  color: string;
  backgroundColor: string;
}

const PrimaryCTAButton = ({ text, color, backgroundColor }: PrimaryCTAButtonProps) => (
  <PrimaryCTAButtonStyled backgroundColor={backgroundColor}>
    <DefaultParagraph color={color}>{text}</DefaultParagraph>
  </PrimaryCTAButtonStyled>
);

export default PrimaryCTAButton;
