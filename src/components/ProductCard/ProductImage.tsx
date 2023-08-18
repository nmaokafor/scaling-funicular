import React, { Dispatch, SetStateAction, useRef } from 'react';
import { Box, Flex, Text, useToast, CloseButton, Button, ToastId } from '@chakra-ui/react';
import { Color, Product } from '../../types/productTypes';
import ImageSliderCarousel from '../ImageSliderCarousel';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as FilledHeartIcon } from '../../assets/icons/filledHeart.svg';
import styled from '@emotion/styled';

const ToastBox = styled(Flex)`
  width: 300px;
  top: 5.5rem;
  padding: 1.5rem 0.5rem 1.5rem 2rem;
  border-bottom: 2px solid #50af62;
  box-shadow: 0px 0.5rem 1rem rgba(0, 0, 0, 0.2);
  background: #ffffff;
  z-index: 2000;

  > button {
    padding: 1.25rem 1.25rem 1.25rem 0.5rem;
    background: transparent;
  }
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

type Props = {
  selectedColor: Color;
  currentProduct: Product;
  setCurrentProduct: Dispatch<SetStateAction<Product>>;
  showSizeSelector: boolean;
  handleShowSizeSelector: () => void;
  handleHideSizeSelector: () => void;
};

const ProductImage: React.FC<Props> = ({
  selectedColor,
  currentProduct,
  setCurrentProduct,
  showSizeSelector,
  handleShowSizeSelector,
  handleHideSizeSelector,
}) => {
  const toast = useToast();
  const toastIdRef = useRef<ToastId>();

  const handleIconClick = () => {
    const updatedProduct = { ...currentProduct };
    const colorToUpdate = updatedProduct.colors.find((color) => color.colorId === selectedColor.colorId);

    if (colorToUpdate) {
      const currentFavoriteValue = selectedColor.isFavorite;
      colorToUpdate.isFavorite = !currentFavoriteValue;

      if (currentFavoriteValue) {
        showToastMessage('Der Artikel wurde zur Wunschliste hinzugefügt');
      } else {
        showToastMessage('Der Artikel wurde von deiner Wunschliste entfernt');
      }
    }

    setCurrentProduct(updatedProduct);
  };

  const handleToastClose = () => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  };

  const showToastMessage = (description: string) => {
    toastIdRef.current = toast({
      description,
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top-right',

      render: () => (
        <ToastBox>
          <Text>{description}</Text>
          <CloseButton position='relative' bottom='45%' right='0' size='sm' onClick={handleToastClose} />
        </ToastBox>
      ),
    });
  };

  const { images, sizeSelector, isFavorite } = selectedColor;

  return (
    <Flex position='relative'>
      <Button
        height='52px'
        width='52px'
        zIndex=' 100'
        display='flex'
        position='absolute'
        right='0'
        padding='1rem'
        background='transparent'
        onClick={handleIconClick}>
        {isFavorite ? <FilledHeartIcon /> : <HeartIcon />}
      </Button>
      <ImageSliderCarousel images={images} />

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
          onMouseEnter={handleShowSizeSelector}
          onMouseLeave={handleHideSizeSelector}>
          {sizeSelector.map((size, index) => (
            <SizeText key={index} className={size.available ? 'available' : 'strikethrough unavailable'}>
              {size.value}
            </SizeText>
          ))}
        </SizingWrapper>
      )}
    </Flex>
  );
};

export default ProductImage;
