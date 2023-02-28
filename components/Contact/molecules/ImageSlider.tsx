import styled from 'styled-components';
import Slider, { Settings as SlickSettings } from 'react-slick';
import Image from 'next/image';

import Loc1Image from '@/public/assets/location-1.png';
import Loc2Image from '@/public/assets/location-2.png';
import Loc3Image from '@/public/assets/location-3.png';
import Loc4Image from '@/public/assets/location-4.png';

// interface Props {
//   children: React.ReactNode;
// }

const PsychoSlider = styled(Slider)`
  overflow-x: hidden;
  margin: 0 -40px;

  .slick-track {
    display: flex;
    justify-content: center;
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
    // Value of true causes glitching slide while variableWidth is true
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    // So that items are displayed even when only part of it is visible
    variableWidth: true,
    focusOnSelect: true,
    responsive: [
      { breakpoint: 700, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // 0-700
      { breakpoint: 900, settings: { slidesToShow: 2, slidesToScroll: 2 } }, // 700-900
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 3 } }, // 900-1200
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
