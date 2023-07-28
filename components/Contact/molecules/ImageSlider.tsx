import styled from 'styled-components';
import Slider, { Settings as SlickSettings } from 'react-slick';
import Image from 'next/legacy/image';
import { GroupField } from '@prismicio/client';

import { ContactPageDocumentDataPicsItem, Simplify } from 'prismicio-types';

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
  }
`;

const ImageWrapper = styled.div`
  width: 142px !important;
  height: 93px;
  margin-right: 4px;
`;

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

interface Props {
  images: GroupField<Simplify<ContactPageDocumentDataPicsItem>>;
}

const ImageSlider = ({ images }: Props) => (
  <PsychoSlider {...settings}>
    {(Object.values(images[0] ?? [])).map((image, index) => (
      <ImageWrapper>
        <Image
          key={index}
          src={image.url ?? ''}
          objectFit="contain"
          alt={image.alt ?? `location-${index}`}
          width={142}
          height={93}
        />
      </ImageWrapper>
    ))}
  </PsychoSlider>
);

export default ImageSlider;
