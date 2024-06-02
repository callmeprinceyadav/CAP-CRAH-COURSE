
import { Box, Button, Flex, Link, Spacer, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { authState, logout } = useAuth();

  return (
    <Box bg="teal.500" p={4}>
      <Flex>
        {authState.isAuthenticated ? (
          <>
            <Text color="white" mr={4}>{authState.email}</Text>
            <Spacer />
            <Link as={RouterLink} to="/" color="white" mr={4}>Home</Link>
            <Button colorScheme="teal" onClick={logout}>Logout</Button>
          </>
        ) : (
          <Link as={RouterLink} to="/login" color="white">Login</Link>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
