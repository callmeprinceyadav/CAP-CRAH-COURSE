import { VStack, Container, Button, Input, Box, Heading, Center } from "@chakra-ui/react";
import { useState, useContext } from "react";
import axios from "axios";
import LoadingIndicator from "./LoadingIndicator";

import { AuthContext } from "../context/AuthContextprovider";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { Login } = useContext(AuthContext); // New state for storing token
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // New state for error handling

    async function fetchAndLogin() {
        setLoading(true);
        setError(null); // Reset error state before making the request
        try {
            const response = await axios.post("https://reqres.in/api/login", {
                email,
                password,
            });
            console.log(response?.data?.token)
            Login(response?.data?.token);
            setLoading(false);
            // Handle successful login, such as redirecting to a new page
        } catch (error) {
            console.error("Login failed:", error);
            setError("Invalid email or password"); // Set error message for display
            setLoading(false);
        }
    }

    return (
        <Container maxW={400} padding={5} textAlign="center">
            <Box padding={2} boxShadow="base" rounded="md" bg="white">

                <Heading as="h1" size="xl" padding="10"> Login Page</Heading>
                <VStack spacing={5}>
                    <Input
                        placeholder="Email Address"
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder="Password"
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && (
                        <Box color="red.500" textAlign="center">
                            {error}
                        </Box>
                    )}
                    <Button colorScheme="red" onClick={fetchAndLogin}>
                        {loading ? <LoadingIndicator /> : "Login"}
                    </Button>
                </VStack>
            </Box>
        </Container>
    );
}
