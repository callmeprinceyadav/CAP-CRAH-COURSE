
import { Box, Button, Heading, Text, Image } from '@chakra-ui/react';
import { Link as RouterRouterLink, useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {

  const Navigate = useNavigate()

  function ProductAdd(id){
    Navigate(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
  }

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Heading  sixe="l" as="h5">{product.title}</Heading>
      <Image src={product.image}  />
      <Text mb={2}>{product.category}</Text>
      <Text mb={4}>${product.price}</Text>
      <Button onClick={ProductAdd} colorScheme="red" variant="outline">
        Product Details
      </Button>
    </Box>
  );
};

export default ProductCard;
