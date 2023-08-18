import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { Color } from '../../types/productTypes';
import styled from '@emotion/styled';

const StyledColorsWrapper = styled(Flex)`
  margin-top: 0.25rem;
  padding-bottom: 1rem;
`;

type Props = {
  colors: Color[];
  selectedColor: Color;
  setSelectedColor: React.Dispatch<React.SetStateAction<Color>>;
  setShowSizeSelector: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductSelectors: React.FC<Props> = ({ colors, selectedColor, setShowSizeSelector, setSelectedColor }) => {
  const handleColorClick = (color: Color) => {
    setSelectedColor(color);
  };

  const handleMouseEnter = () => {
    setShowSizeSelector(true);
  };

  const handleMouseLeave = () => {
    setShowSizeSelector(false);
  };

  return (
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
  );
};

export default ProductSelectors;
