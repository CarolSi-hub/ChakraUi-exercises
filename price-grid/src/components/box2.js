import React from 'react';
import { Box, Heading, Text, Button } from "@chakra-ui/react";

export default function Box2(){
    return(
       <Box 
       bg="#4BBEBB" 
       w="100%" 
       p={10}
 
       >
       <Heading       
       as="h5" 
       size="md" 
       color="white" 
       letterSpacing="wide"
       >
       Monthly Subscription
       </Heading>
        <Box 
        d="flex" 
        alignItems="baseline" 
        mt={5}>
        <Text fontSize="3rem" >$29</Text>
        <Text fontSize="1.3rem" letterSpacing="wide" ml="5">per month</Text>       
       </Box>
       <Text 
       color="white"
       mt="5"       
       >      
       Full access for less than $1 a day
       </Text>
       <Button 
       color="white" 
       bg="#C8E451" 
       w="100%" 
       mt="5"
       >
       Sign Up
       </Button>
       </Box>
    )
}