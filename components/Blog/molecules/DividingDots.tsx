import styled from 'styled-components';

import { Green010 } from 'components/styling/colors';

const Divider = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 16px);
  column-gap: 20px;
  justify-content: center;
  padding-bottom: 30px;
`;

const DividerDot = styled.div`
  height: 16px;
  width: 16px;
  background-color: ${Green010};
  border-radius: 50%;
`;

const DividingDots = () => (
  <Divider>
    <DividerDot />
    <DividerDot />
    <DividerDot />
  </Divider>
);

export default DividingDots;
