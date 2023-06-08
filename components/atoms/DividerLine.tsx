import styled from 'styled-components';
import { Green050 } from 'components/styling/colors';

const DividerLine = styled.div`
  height: 1px;
  background-color: ${Green050};
  margin: 40px 0 30px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 40px;
  }
`;

export default DividerLine;
