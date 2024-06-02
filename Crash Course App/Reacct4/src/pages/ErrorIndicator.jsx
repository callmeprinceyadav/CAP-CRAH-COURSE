import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Container
} from '@chakra-ui/react'

export default function ErrorIndicator() {
    return (
        <Container padding={10}>

            <Alert status="error">
                <AlertIcon />
                <AlertTitle mr={2}>Something went wrong</AlertTitle>
                <AlertDescription>Please try again later</AlertDescription>
            </Alert>

        </Container>
    )
}