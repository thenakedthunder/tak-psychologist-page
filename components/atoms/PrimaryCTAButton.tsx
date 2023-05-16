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

  &:disabled {
    cursor: default;
    opacity: 0.7; 
  }
`;

interface PrimaryCTAButtonProps {
  text: string;
  color: string;
  backgroundColor: string;
  isDisabled?: boolean;
}

const PrimaryCTAButton = ({
  text, color, backgroundColor, isDisabled = false,
}: PrimaryCTAButtonProps) => (
  <PrimaryCTAButtonStyled backgroundColor={backgroundColor} disabled={isDisabled}>
    <DefaultParagraph color={color}>
      {text}
    </DefaultParagraph>
  </PrimaryCTAButtonStyled>
);

export default PrimaryCTAButton;
