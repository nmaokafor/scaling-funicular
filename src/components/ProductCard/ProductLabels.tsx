import React from 'react';
import { Flex, Tag } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Label } from '../../types/productTypes';

const StyledTag = styled(Tag)`
  border-radius: 0;
`;

const ProductLabels: React.FC<{ listOfLabels: Label[] }> = ({ listOfLabels }) => {
  return (
    <Flex>
      {listOfLabels.length > 0 &&
        listOfLabels.map((label) => {
          if (!label?.labelTitle) return null;

          return (
            <StyledTag
              key={label.id}
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
  );
};

export default ProductLabels;
