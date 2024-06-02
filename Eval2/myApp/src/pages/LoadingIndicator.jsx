import { Spinner,Heading, VStack } from "@chakra-ui/react"

export default function LoadingIndiactor(){
    return (
       
        <VStack>
             <Spinner color='red.500' />
             <Heading color='red.500'>Loading...</Heading>
        </VStack>

        
        
    )
}