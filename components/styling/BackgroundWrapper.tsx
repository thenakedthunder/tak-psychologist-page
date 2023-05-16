import styled from 'styled-components';
import { Grey010 } from 'components/styling/colors';

const BackgroundWrapper = styled.div<{ bgColor?: string }>`
  width: 100%;
  background-color: ${({ bgColor }) => bgColor ?? Grey010};
`;

export default BackgroundWrapper;
