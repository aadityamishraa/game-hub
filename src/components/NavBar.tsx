import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.svg'
const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize="64px" />
    </HStack>
  )
}

export default NavBar