import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { stringify } from 'querystring';
import { Container, Flex, Heading } from '@chakra-ui/react';
import { PessoalCalc } from '@/components/PessoalCalc';

const Home: NextPage = () => {
  return (
    <Container minW='100%' minH='100%'>
      <Flex>
        <PessoalCalc />
      </Flex>
    </Container>
  )
}

export default Home
