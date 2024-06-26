
import { useState, useRef, useEffect } from 'react';
import { Box, Input, Button, FormControl, FormLabel, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import LoadingIndiactor from './LoadingIndicator';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)

  const emailRef = useRef();
  const navigate = useNavigate();
  const { login } = useAuth();
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  async function handleSubmit() {
    setLoading(true)
    try {
        
      const response = await axios.post('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login', { email, password });
      login(response.data.token, email);
      navigate('/');
      setLoading(false)

    } catch (err) {
      setError('Invalid email or password');
    }
  };

  if(loading){
    return <LoadingIndiactor/>
  }

  return (
    <Box maxW="sm" mx="auto" mt={10}>
      <form onSubmit={handleSubmit}>
        
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
            placeholder="Email"
          />
        
        
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
      
        {error && <Text color="red.500">{error}</Text>}
        <Button type="submit" colorScheme="red" variant="outline" width="full">Login</Button>
      </form>
    </Box>
  );
};
export default LoginPage;