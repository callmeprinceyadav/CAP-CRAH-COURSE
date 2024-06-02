import {
    Flex, Button, CardHeader, CardBody, Container, Stack, StackDivider, Text, Heading, Card,
    SimpleGrid, CardFooter, Select

}
    from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";



function TicketCard({ title, assignee, status, priority }) {
    const Navigate = useNavigate();

    function viewTicket() {
        Navigate('/Ticket/view')
    }


    return (
        <Card>
            <CardHeader>
                <Heading size='md'>{title}</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Container >
                        <Heading size='xs' textTransform='uppercase'>
                            Assignee
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {assignee}
                        </Text>
                    </Container >
                    <Container >
                        <Heading size='xs' textTransform='uppercase'>
                            Status
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {status}
                        </Text>
                    </Container >
                    <Container >
                        <Heading size='xs' textTransform='uppercase'>
                            Priority
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {priority}
                        </Text>
                    </Container >
                </Stack>
            </CardBody>
            <CardFooter>
                <Button variant='outline' colorScheme='red' onClick={viewTicket}>
                    View Ticket
                </Button>
            </CardFooter>
        </Card>
    )
}



export default function Tickets() {
    const Navigate = useNavigate()
    const [tickets, setTickets] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [orderValue, setOrderValue] = useState("")
    const [filterValue, setFilterValue] = useState("")

    async function fetchandupdate( orderValue ,filterValue ) {
        setLoading(true)
        try {
            let queryParam = {}
            if (filterValue) {
                queryParam.status = filterValue 
            }

            if (orderValue) {
                queryParam._sort = "priority"
                queryParam._order = orderValue
            }

            let response = await axios({
                method: "GET",
                url: "http://localhost:3000/tickets",
                params: queryParam,
            })

            let data = response?.data
            setTickets(data)
            setLoading(false)
            setError(false)
            console.log(data)

        } catch (error) {
            console.error(error)
            setError(true)
        }
    }

    useEffect(() => {
        fetchandupdate(orderValue,filterValue)
    }, [orderValue,filterValue]);

    if (loading) {
        return <LoadingIndicator />
    }

    if (error) {
        return <ErrorIndicator />
    }

    function createTicket() {
        Navigate('/Ticket/create')
    }



    return (

        <Container maxW={1000}>
            <Flex justify="flex-end" margin="auto" padding={5}>
                <Button variant='outline' colorScheme="red" onClick={createTicket}>Create Ticket</Button>
            </Flex>

            <Flex>
                <Select placeholder='Sort By Order' value={orderValue} onChange={ (e)=>{
                    setOrderValue(e.target.value)
                }}>
                    <option value='asc'>Low To High</option>
                    <option value='desc'>High To Low</option>
                    {/* <option value='option3'>Option 3</option> */}
                </Select>

                <Select placeholder='Sort By Status' value={filterValue}  onChange={ (e)=>{
                    setFilterValue(e.target.value)
                }}>
                    <option value='completed'>Completed</option>
                    <option value='progress'>Progress</option>
                    <option value='pending'>Pending</option>
                </Select>
            </Flex>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                {tickets?.map((ticket) => (
                    <TicketCard {...ticket} key={ticket.id} />
                ))}
            </SimpleGrid>



        </Container >

    )
}