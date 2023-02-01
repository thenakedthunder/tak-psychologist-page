import styled from "styled-components";
import Image from 'next/image';

import { Green100, Green010 } from "components/styling/colors";
import ProfileImage from "@/public/assets/about-me.png";

const GeometryContainer = styled.div`
  height: 325px;
  width: 100%;
  position: relative;
  margin-top: 30px;
`;

const LargeGreenSquare = styled.div`
  background-color: ${Green100};
  height: 250px;
  width: 250px;
  position: absolute;
  right: -40px;
`;

const SmallGreenSquare = styled.div`
  background-color: ${Green010};
  height: 150px;
  width: 150px;
  position: absolute;
  z-index: 1;
  right: -40px;
  bottom: 0;
`;

const ProfileImageContainer = styled.div`
    width: 240px;
    height: 156px;
    position: absolute;
    bottom: 5px;
    z-index: 2;
    left: -50px;
`;

const PictureOnShapes = () => (
  <GeometryContainer>
    <LargeGreenSquare>
      <ProfileImageContainer>
        <Image src={ProfileImage} width={240} height={156} />
      </ProfileImageContainer>
    </LargeGreenSquare>
    <SmallGreenSquare />
  </GeometryContainer>
)

export default PictureOnShapes;
