import Image, { StaticImageData } from 'next/image';
import { ComponentType } from 'react';
import Slider, { Settings as SlickSettings } from 'react-slick';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  aspect-ratio: 142 / 93;
  position: relative;
  width: 100%;
  margin-right: 4px;
`;

const ImageSlide: ComponentType<{
  image: StaticImageData;
}> = ({ image }) => (
  <ImageWrapper>
    <Image src={image} objectFit="contain" />
  </ImageWrapper>
);

const ImageSlider: ComponentType<{
  images: (StaticImageData)[];
}> = ({ images }) => {
  const settings: SlickSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.src}>
          <ImageSlide image={image} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
