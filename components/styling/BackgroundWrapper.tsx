import styled from 'styled-components';
import { Grey010 } from 'components/styling/colors';

const BackgroundWrapper = styled.div`
  width: 100%;
  background-color: ${({ color }) => color ?? Grey010};
`;

export default BackgroundWrapper;
