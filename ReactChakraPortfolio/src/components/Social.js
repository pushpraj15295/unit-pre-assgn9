import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify, FaNodeJs } from 'react-icons/fa'
import {SiChakraui, SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiReact} from 'react-icons/si'
function Social() {
    return (
        <HStack spacing="24">
            <Icon as={SiHtml5} boxSize="50" />
            <Icon as={SiCss3} boxSize="50" />
            <Icon as={SiJavascript} boxSize="50" />
            <Icon as={SiChakraui} boxSize="50" />
            <Icon as={SiMongodb} boxSize="50" />
            <Icon as={SiExpress} boxSize="50" />
            <Icon as={SiReact} boxSize="50" />
            <Icon as={FaNodeJs} boxSize="50" />
        </HStack>
    )
}

export default Social
