import Image from 'next/image';
import styled from 'styled-components';

import FaqImage from 'public/assets/gyik.png';
import { Green100, Grey010 } from 'components/styling/colors';

const CollageContainer = styled.div`
  margin: 30px 0 30px -40px;
`;

const LargerSquare = styled.div`
  height: 246px;
  width: 246px;
  background-color: ${Grey010};
`;

const SmallerSquare = styled.div`
  height: 148px;
  width: 148px;
  background-color: ${Green100};
  position: relative;
  top: 124px;
`;

const ImageContainer = styled.div`
  width: 272px;
  height: 160px;
  position: relative;
  left: 64px;
  bottom: 113px;

  /* width: 480px;
  height: 312px; */
`;

const Collage = () => (
  <CollageContainer>
    <LargerSquare>
      <SmallerSquare />
      <ImageContainer>
        <Image src={FaqImage} objectFit="contain" />
      </ImageContainer>
    </LargerSquare>
  </CollageContainer>
);

export default Collage;
