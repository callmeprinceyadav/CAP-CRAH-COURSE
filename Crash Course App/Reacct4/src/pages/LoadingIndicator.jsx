import { Box, CircularProgress, Container, Heading, VStack } from '@chakra-ui/react'

export default function LoadingIndicator() {
    return (
        <Container padding={10} alignContent="center">

            <VStack spacing={5}>

            <CircularProgress isIndeterminate color='green.300' />
            <Heading as='h1' size="xl">Loading ..</Heading>

            </VStack>

        </Container>
    )
}