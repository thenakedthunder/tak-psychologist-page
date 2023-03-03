import styled from 'styled-components';
import Slider, { Settings as SlickSettings } from 'react-slick';
import Image from 'next/image';

import Loc1Image from '@/public/assets/location-1.png';
import Loc2Image from '@/public/assets/location-2.png';
import Loc3Image from '@/public/assets/location-3.png';
import Loc4Image from '@/public/assets/location-4.png';

const PsychoSlider = styled(Slider)`
  overflow-x: hidden;
  margin: 0 -40px;

  .slick-track {
    display: flex;
    justify-content: center;
  }
  
  @media screen and (min-width: 664px) {
    margin: 0;

    .slick-track {
      justify-content: start;
    }
`;

const ImageWrapper = styled.div`
  width: 142px !important;
  height: 93px;
  margin-right: 4px;
`;

const ImageSlider = () => {
  const settings: SlickSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 0,
    // So that items are displayed even when only part of it is visible
    variableWidth: true,
    focusOnSelect: true,
    responsive: [
      { breakpoint: 437, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // 0-437
      { breakpoint: 579, settings: { slidesToShow: 3, slidesToScroll: 1 } }, // 438-579
    ],
  };

  return (
    <PsychoSlider {...settings}>
      <ImageWrapper><Image src={Loc1Image} objectFit="contain" /></ImageWrapper>
      <ImageWrapper><Image src={Loc2Image} objectFit="contain" /></ImageWrapper>
      <ImageWrapper><Image src={Loc3Image} objectFit="contain" /></ImageWrapper>
      <ImageWrapper><Image src={Loc4Image} objectFit="contain" /></ImageWrapper>
    </PsychoSlider>
  );
};

export default ImageSlider;
