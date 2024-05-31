import { Flex, Button } from "@chakra-ui/react";
import TicketCreate from "./TicketCreate";
import { useNavigate } from "react-router-dom";


export default function Tickets(){
    const Navigate = useNavigate()

    function createTicket(){
        Navigate('/TicketCreate')
    }



    return(
        <Flex justify="flex-end" margin="auto" padding={5}>
            <Button variant='outline' colorScheme="red" onClick={createTicket}>Create Ticket</Button>
        </Flex>
    )
}