import React, { useRef } from 'react';
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

const ImageSliderCarousel: React.FC<{ images: Images[] }> = ({ images }) => {
  const carouselRef = useRef<Carousel>(null);

  const settings = {
    showArrows: false,
    showIndicators: false,
    showThumbs: false,
  };

  const handleMouseEnter = () => {
    if (carouselRef.current) {
      carouselRef.current.increment();
    }
  };

  const handleMouseOut = () => {
    if (carouselRef.current) {
      carouselRef.current.decrement();
    }
  };

  if (images.length === 0) return null;

  return (
    <CarouselWrapper onMouseOver={handleMouseEnter} onMouseOut={handleMouseOut}>
      <Carousel {...settings} ref={carouselRef}>
        {images.map((image) => (
          <Image key={image.index} src={image.absURL} alt={image.alt} />
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

export default ImageSliderCarousel;
