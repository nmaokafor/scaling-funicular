import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Color, Product } from '../types/productTypes';
import { extractLabels } from '../utils/utils';
import ProductImage from './ProductCard/ProductImage';
import styled from '@emotion/styled';
import ProductSelectors from './ProductCard/ProductSelectors';
import ProductLabels from './ProductCard/ProductLabels';
import ProductPriceInfo from './ProductPriceInfo';

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

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [currentProduct, setCurrentProduct] = useState<Product>(product);
  const [selectedColor, setSelectedColor] = useState<Color>(product.colors[0]);
  const [showSizeSelector, setShowSizeSelector] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setShowSizeSelector(true);
  };

  const handleMouseLeave = () => {
    setShowSizeSelector(false);
  };

  const { productName, colors } = currentProduct;
  const { price } = selectedColor;
  const listOfLabels = extractLabels(currentProduct);

  return (
    <Box overflow='hidden'>
      <ProductImage
        selectedColor={selectedColor}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
        showSizeSelector={showSizeSelector}
        handleShowSizeSelector={handleMouseEnter}
        handleHideSizeSelector={handleMouseLeave}
      />

      <ProductSelectors
        colors={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        setShowSizeSelector={setShowSizeSelector}
      />

      <TitleText mb={1}>{productName}</TitleText>

      <ProductLabels listOfLabels={listOfLabels} />

      <ProductPriceInfo price={price} />
    </Box>
  );
};

export default ProductCard;
