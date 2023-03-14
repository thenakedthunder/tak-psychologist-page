import styled from 'styled-components';

import { Green010, Green100 } from 'components/styling/colors';

const CollageElement = styled.div`
  padding: 10px 24px 0 0;
  position: relative;
  float: left;
`;

const LargerSquare = styled.div`
  height: 30px;
  width: 30px;
  background-color: ${Green100};
`;

const SmallerSquare = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${Green010};
  position: absolute;
  top: 30px;
  left: 20px;
`;

const Collage = () => (
  <CollageElement>
    <LargerSquare />
    <SmallerSquare />
  </CollageElement>
);

export default Collage;
