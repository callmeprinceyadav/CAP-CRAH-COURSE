
import { useState, useRef, useEffect } from 'react';
import { Box, Input, Button, FormControl, FormLabel, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const emailRef = useRef();
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login', { email, password });
      login(response.data.token, email);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt={10}>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
          />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        {error && <Text color="blue.500">{error}</Text>}
        <Button type="submit" colorScheme="red" width="full">Login</Button>
      </form>
    </Box>
  );
};

export default LoginPage;
  