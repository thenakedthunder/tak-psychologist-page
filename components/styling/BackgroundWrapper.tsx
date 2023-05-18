import styled from 'styled-components';
import { Grey010 } from 'components/styling/colors';

const BackgroundWrapper = styled.div<{ backgroundColor?: string }>`
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor ?? Grey010};
`;

export default BackgroundWrapper;
