import React from 'react';
import { Box, Heading, Text, Button } from "@chakra-ui/react";

export default function Box3(){
    return(
       <Box 
       bg="#66C6C9" 
       w="100%" 
       p={10} 
     
       >
       <Heading       
       as="h5" 
       size="md" 
       color="white" 
       letterSpacing="wide"
       >
       Why Us
       </Heading>       
       <Text 
       color="white"
       mt="5"       
       >      
       Tutorials by industry experts 
       Peer & espert code review.
       Coding exercises
       Access to our GitHub repos Community 
       forum Flashcard decks New videos every week 
       </Text>      
       </Box>
    )
}