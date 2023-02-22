import styled from 'styled-components';

import { DefaultParagraph } from 'components/atoms/typography.styles';
import PsychoLink from './PsychoLink';

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
  linkHref?: string;
}

const PrimaryCTAButton = ({
  text, color, backgroundColor, linkHref,
}: PrimaryCTAButtonProps) => (
  <PrimaryCTAButtonStyled backgroundColor={backgroundColor}>
    <DefaultParagraph color={color}>
      {linkHref && <PsychoLink href={linkHref}>{text}</PsychoLink>}
    </DefaultParagraph>
  </PrimaryCTAButtonStyled>
);

export default PrimaryCTAButton;
