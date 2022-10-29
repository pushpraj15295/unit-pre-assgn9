import React from 'react'
import Icon from '@chakra-ui/icon'
import { SiHtml5, } from 'react-icons/si'
import { Stack, Circle, Flex, Box, Text ,SimpleGrid,Heading} from '@chakra-ui/layout';
import {GoHome} from 'react-icons/go'
import {GiTechnoHeart} from 'react-icons/gi'
// import { IconButton } from "@chakra-ui/button";
import { Button } from "@chakra-ui/button";
const Navbar = () => {
  return (
    <Box width="100%" position="fixed" backgroundColor="rgb(31,53,80)" height="60px" >
        <SimpleGrid width="80%" columns={[6]} rows={1} margin="auto" marginTop="10px">
          <Box>
          <Icon as={GiTechnoHeart} boxSize="50" />
         
          </Box>
          <Box>
          <Button> <Heading
           size="md" fontWeight='semibold' color="cyan.400"> <Flex > <GoHome/> &nbsp; &nbsp; <b>  Home </b></Flex> </Heading></Button>
          </Box>
          <Box>
          <Button> <Heading
           size="md" fontWeight='semibold' color="cyan.400"><b>About </b></Heading></Button>
          </Box>
          <Box>
          <Button> <Heading
           size="md" fontWeight='semibold' color="cyan.400"><b>Skills </b></Heading></Button>
          </Box>
         <Box>
         <Button> <Heading
           size="md" fontWeight='semibold' color="cyan.400"><b>Projects</b></Heading></Button>
         </Box>
          <Box>
          <Button> <Heading
          size="md" fontWeight='semibold' color="cyan.400"><b> Contact Detail </b></Heading></Button>
          </Box>
          
     
        </SimpleGrid>

    </Box>
  )
}

export default Navbar