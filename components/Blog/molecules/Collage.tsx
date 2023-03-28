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

  @media screen and (min-width: 768px) {
    height: 63px;
    width: 63px;
  }
`;

const SmallerSquare = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${Green010};
  position: absolute;
  top: 30px;
  left: 20px;

  @media screen and (min-width: 768px) {
    height: 38px;
    width: 38px;
    top: 51px;
    left: 44px;
  }
`;

const Collage = () => (
  <CollageElement>
    <LargerSquare />
    <SmallerSquare />
  </CollageElement>
);

export default Collage;
