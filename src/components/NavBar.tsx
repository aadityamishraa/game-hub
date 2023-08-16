import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.svg'
const NavBar = () => {
  return (
    <HStack className='m-10'>
        <Image src={logo} boxSize="96px" />
    </HStack>
  )
}

export default NavBar
