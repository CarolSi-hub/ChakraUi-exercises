import React from 'react';
import {
  ChakraProvider, 
  Grid,
  GridItem,
  Box,
  theme,
} from '@chakra-ui/react';
import Box1 from './components/box1';
import Box2 from './components/box2';
import Box3 from './components/box3';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Box p={10}>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"         
      >
        <GridItem colSpan={4} ><Box1 /></GridItem>
         <GridItem colSpan={4} >
         <Box d="flex">
         <Box2 />
         <Box3 />
         </Box>
         </GridItem>       
      </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
