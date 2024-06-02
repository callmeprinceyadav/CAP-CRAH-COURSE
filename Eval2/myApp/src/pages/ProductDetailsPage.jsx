
import{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Text, useToast, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Spinner } from '@chakra-ui/react';
import axios from 'axios';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
       

        const response = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`);
        setProduct(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (err) {
        setError('Error fetching product details');
        setLoading(false);
      }
    };
    fetchProduct(id);
  }, [id]);

  const handleAddToCart = () => {
    setIsAlertOpen(false);
    toast({
      title: "Item added to cart",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Text color="red.500">{error}</Text>
      ) : (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Text fontWeight="bold" mb={2}>{product.title}</Text>
          <Text mb={2}>{product.category}</Text>
          <Text mb={4}>${product.price}</Text>
          <Text mb={4}>{product.description}</Text>
          <Button colorScheme="red" onClick={() => setIsAlertOpen(true)}>Add to Cart</Button>
        </Box>
      )}

      <AlertDialog isOpen={isAlertOpen} onClose={() => setIsAlertOpen(false)}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Confirm Add to Cart</AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to add this item to cart?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={() => setIsAlertOpen(false)}>Cancel</Button>
              <Button colorScheme="red" variant="outline" onClick={handleAddToCart} ml={3}>Confirm</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default ProductDetailsPage;
