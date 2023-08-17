import React, { useState } from 'react';
import { Box, Flex, Link, Text, useToast, CloseButton, Button, Tag } from '@chakra-ui/react';
import { Color, Product } from '../types/productTypes';
import ImageSliderComponent from './ImageSliderComponent';
import { ReactComponent as HeartIcon } from '../assets/icons/heart.svg';
import { ReactComponent as FilledHeartIcon } from '../assets/icons/filledHeart.svg';

import styled from '@emotion/styled';
import { extractLabels } from '../utils/utils';

const StyledColorsWrapper = styled(Flex)`
  margin-top: 0.25rem;
  padding-bottom: 16px;
`;

const TitleText = styled(Text)`
  text-align: left;
  font-weight: 500;
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const PriceInfoWrapper = styled(Flex)`
  p {
    margin-right: 4px;

    :not(.strikethrough) {
      font-weight: 700;
    }
  }
`;

const StyledTag = styled(Tag)`
  border-radius: 0;
`;

const DiscountText = styled(Text)`
  border: 0.5px dashed #d32d1f;
  padding: 1px 2px;
`;

const SizingWrapper = styled(Box)`
  .available {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .unavailable {
    color: #d3d3d3;
  }
`;

const SizeText = styled(Text)`
  min-width: 2rem;
  margin: 0 0.5rem 0.5rem 0;
`;

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const toast = useToast();
  const [selectedColor, setSelectedColor] = useState<Color>(product.colors[0]);
  const [showSizeSelector, setShowSizeSelector] = useState<boolean>(false);

  const handleColorClick = (color: Color) => {
    setSelectedColor(color);
  };

  const handleMouseEnter = () => {
    setShowSizeSelector(true);
  };

  const handleMouseLeave = () => {
    setShowSizeSelector(false);
  };

  const { productName, colors } = product;
  const { images, price, sizeSelector, isFavorite } = selectedColor;
  const listOfLabels = extractLabels(product);

  return (
    <Box overflow='hidden'>
      <Flex position='relative'>
        <Button height='52px' width='52px' zIndex=' 100' display='flex' position='absolute' right='0' padding='1rem'>
          {isFavorite ? <FilledHeartIcon /> : <HeartIcon />}
        </Button>
        <ImageSliderComponent images={images} />

        {showSizeSelector && (
          <SizingWrapper
            className='transition'
            position='absolute'
            left='0'
            right='0'
            bottom='37px'
            padding='0.5rem'
            bg='brand.primaryLight'
            fontSize='9'
            width='100%'
            zIndex={10}
            display='flex'
            textAlign='left'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {sizeSelector.map((size, index) => (
              <SizeText key={index} className={size.available ? 'available' : 'strikethrough unavailable'}>
                {size.value}
              </SizeText>
            ))}
          </SizingWrapper>
        )}
      </Flex>
      <Flex pr={4}>
        <StyledColorsWrapper>
          {colors.map((color, index) => {
            const { colorUrl } = color;

            return (
              <Box
                key={index}
                as='button'
                height='18px'
                width='18px'
                borderRadius='50%'
                marginRight='8px'
                borderWidth={selectedColor === color ? '2px' : ''}
                borderColor='black'
                onClick={() => handleColorClick(color)}
                backgroundImage={`url(${colorUrl})`}
                backgroundSize='cover'
                backgroundPosition='center'
              />
            );
          })}
        </StyledColorsWrapper>

        <Link ml='auto' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Text variant='body2'>Größen</Text>
        </Link>
      </Flex>
      <TitleText mb={1}>{productName}</TitleText>

      <Flex>
        {listOfLabels.length > 0 &&
          listOfLabels.map((label) => {
            if (!label?.labelTitle) return null;

            return (
              <StyledTag
                size='sm'
                fontSize='brand.xs'
                variant='solid'
                colorScheme={label?.color}
                alignSelf='left'
                mr={1}>
                {label?.labelText?.toUpperCase()}
              </StyledTag>
            );
          })}
      </Flex>

      <PriceInfoWrapper align='left'>
        {price.discount ? (
          <>
            <Text className='strikethrough' size='body1'>
              {price.originalPrice}
            </Text>
            <Text size='body1' variant='red'>
              {price.originalPrice}
            </Text>
            <DiscountText size='body3' variant='red'>
              -{price.discount}%
            </DiscountText>
          </>
        ) : (
          <Text size='body1'>{price.originalPrice}</Text>
        )}
      </PriceInfoWrapper>
    </Box>
  );
};

export default ProductCard;
