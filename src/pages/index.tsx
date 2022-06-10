import type { NextPage } from 'next'
import { Container, Flex } from '@chakra-ui/react';
import { PessoalCalc } from '@/components/PessoalCalc';
import { PessoalSex } from '@/components/PessoalSex';
import { PessoalEscolaridade } from '@/components/PessoalEscolaridade';

const Home: NextPage = () => {

  return (
    <Container minW='100vw' minH='100vh' p="0" bg="gray.50" >
      <Flex
        maxW="2000px"
        flexDir="row"
        h="100vh"
        p="2"
      >
        <Flex
          w="15%"
          h="100%"
          bg="#fff"
          rounded="15"
          shadow="md"
          mr="2"
        >
        </Flex>
        <Flex
          w="80%"
          flexDir="column"
          ml="0"
          mt="0"
        >
          <Flex
            w="100%"
            h="20%"
            flexDir="row"
            mb="2"
          >
            <PessoalSex />
          </Flex>
          <Flex
            w="100%"
            h="80%"
            flexDir="row"
          >
            <PessoalCalc />
            <PessoalEscolaridade />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Home
