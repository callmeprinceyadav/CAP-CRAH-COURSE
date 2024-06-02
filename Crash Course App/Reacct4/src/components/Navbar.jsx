import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { Link as ChakraLink, Flex, Button } from '@chakra-ui/react';
import { AuthContext} from "../context/AuthContextprovider"
import { useContext } from 'react';

const links = [
    {
        to: '/',
        label: 'Home',
    },
    {
        to: '/about',
        label: 'About',
    },
    {
        to: '/contact',
        label: 'Contact',
    },
    {
        to: '/tickets',
        label: 'Tickets',
    },
    {
        to: '/login',
        label: "Login"
    },
];

export default function Navbar() {

    const {Logout} = useContext(AuthContext)
    
    

    return (
        <Flex
            align="center"
            justify="space-around"
            background="gray.200"
            padding={4}
        >
            {links.map((link) => (
                <ChakraLink
                    as={ReactRouterLink}
                    key={link.to}
                    to={link.to}
                    color="gray.900"
                >
                    {link.label}
                </ChakraLink>
            ))}
            <Button variant="outline" colorScheme='red' onClick={Logout}>
                Logout
            </Button>
        </Flex>
    );
}
