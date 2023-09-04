import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props{
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}:Props) => {
    //Games
    // Xbox games
    // Action games
    // Xbox Action games
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games `
  return (
    <Heading as='h1' marginY={5} >{heading}</Heading>
  )
}

export default GameHeading
