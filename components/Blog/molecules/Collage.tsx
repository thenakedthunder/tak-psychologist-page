import styled from 'styled-components';

import { Green010, Green100 } from 'components/styling/colors';

const CollageElement = styled.div`
  padding: 10px 28px 0 0;
  position: relative;
  float: left;
`;

const LargerSquare = styled.div`
  height: 30px;
  width: 30px;
  background-color: ${Green100};
  border-radius: 50%;
  
  @media screen and (min-width: 768px) {
    height: 63px;
    width: 63px;
  }
`;

const SmallerSquare = styled.div`
  height: 24px;
  width: 24px;
  background-color: ${Green010};
  border-radius: 50%;
  position: absolute;
  top: 27px;
  left: 17px;

  @media screen and (min-width: 768px) {
    height: 46px;
    width: 46px;
    top: 50px;
    left: 38px;
  }
`;

const Collage = () => (
  <CollageElement>
    <LargerSquare />
    <SmallerSquare />
  </CollageElement>
);

export default Collage;
