import { productsList } from '../mockProducts';
import { Grid, Box, Flex, Text } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import styled from '@emotion/styled';

const PageTitleWrapper = styled(Flex)`
  > h1 {
    padding: 10px 8px 9px 0;
  }
`;

const Home = () => {
  return (
    <Box px={{ base: '3' }} mt={4} mb={4}>
      <Flex justifyContent={{ base: 'center', md: 'space-between' }} width='100%'>
        <PageTitleWrapper align='baseline'>
          <Text as='h1' size='h1' variant='dark'>
            Pullover & Strickjacken für Herren
          </Text>

          <Text size='body1' variant='grey'>
            46 Produkte
          </Text>
        </PageTitleWrapper>
      </Flex>

      <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={4}>
        {productsList.map((product) => (
          <Box key={product.productId}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
