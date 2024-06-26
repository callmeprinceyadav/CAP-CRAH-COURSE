// src/components/ProductCard.js
import React from 'react';
import { Box, Button, Heading, Text, Image } from '@chakra-ui/react';
import { Link as RouterRouterLink, useNavigate } from 'react-router-dom';
const ProductCard = ({ product }) => {
  const Navigate = useNavigate()
  function ProductAdd(id){
    return <Navigate to="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}" />
  }
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Image   src={product.image} alt={product.title} />
        <Heading>{product.title}</Heading>
        <Text>{product.brand}</Text>      
        <Text>{product.category}</Text>      
        <Text>{product.price}</Text>      
      <Button onClick={ProductAdd} colorScheme="red" variant="outline">
        Product Details
      </Button>
    </Box>
  );
};
export default ProductCard;