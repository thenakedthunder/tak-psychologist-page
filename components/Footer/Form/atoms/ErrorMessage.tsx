import { DefaultParagraph } from 'components/atoms/typography.styles';
import { ErrorRed } from 'components/styling/colors';
import styled from 'styled-components';

const StyledDefaultParagraph = styled(DefaultParagraph)`
  padding: 12px 0 0 20px;
`;

interface Props {
  error: string;
}

const ErrorMessage = ({ error }: Props) => (
  <StyledDefaultParagraph color={ErrorRed}>
    {error}
  </StyledDefaultParagraph>
);

export default ErrorMessage;
