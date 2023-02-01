import { Box } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <>
        <Box>{localStorage.getItem('id')}</Box>
        <Box>{localStorage.getItem('name')}</Box>
    </>
  )
}

export default Home