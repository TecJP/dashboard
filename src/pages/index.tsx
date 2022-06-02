import type { NextPage } from 'next'
import { Container, Flex } from '@chakra-ui/react';
import { PessoalCalc } from '@/components/PessoalCalc';
import { PessoalSex } from '@/components/PessoalSex';

const Home: NextPage = () => {

  return (
    <Container minW='100%' minH='100%'>
      <Flex alignItems='center' justifyContent='center'>
        <PessoalCalc />
        <PessoalSex />
      </Flex>
    </Container>
  )
}

export default Home
