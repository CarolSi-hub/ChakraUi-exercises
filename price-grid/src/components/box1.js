import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Box1(){
    return(
       <Box 
       bg="white" 
       w="100%" 
       p={10}      
       >
       <Heading 
       as="h3" 
       size="lg" 
       color="#4BBEBB" 
       letterSpacing="wide"
       >
       Join our Community
       </Heading>
       <Heading 
       mt="5"
       as="h5" 
       size="md" 
       color="#C8E451" 
       letterSpacing="wide"
       >
       30-day, hassie-free money back guarantee
       </Heading>
       <Text 
       color="gray.500"
       mt="5"
       >
       Gain access to our full library of tutorials along with expert code reviews.
       Perfect for any developers who are serious about honing their skills.
       </Text>
       </Box>
    )
}