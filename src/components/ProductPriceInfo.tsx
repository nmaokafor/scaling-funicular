import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Price } from '../types/productTypes';
import styled from '@emotion/styled';

const PriceInfoWrapper = styled(Flex)`
  p {
    margin-right: 0.25rem;

    :not(.strikethrough) {
      font-weight: 700;
    }
  }
`;

const DiscountText = styled(Text)`
  border: 0.5px dashed #d32d1f;
  padding: 1px 2px;
`;

const ProductPriceInfo: React.FC<{ price: Price }> = ({ price }) => {
  return (
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
  );
};

export default ProductPriceInfo;
