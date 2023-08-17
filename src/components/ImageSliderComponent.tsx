import React from 'react';
import { Image } from '@chakra-ui/react';
import { Images } from '../types/productTypes';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from '@emotion/styled';

const CarouselWrapper = styled.div`
  .carousel-status {
    display: none;
  }

  .carousel .thumbs-wrapper {
    margin: 0;
  }
`;

const ImageSliderComponent: React.FC<{ images: Images[] }> = ({ images }) => {
  const settings = {
    showArrows: false,
    showIndicators: false,
    infiniteLoop: true,
    // autoPlay: true,
    interval: 500,
  };

  return (
    <CarouselWrapper>
      <Carousel {...settings}>
        {images.map((image) => (
          <Image src={image.absURL} alt={image.alt} />
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

export default ImageSliderComponent;
