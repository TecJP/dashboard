import type { NextPage } from 'next'
import { Container, Flex } from '@chakra-ui/react';
import { PessoalCalc } from '@/components/PessoalCalc';
import { PessoalSex } from '@/components/PessoalSex';

const Home: NextPage = () => {

  return (
    <Container minW='100vw' minH='100vh' p="0" bg="#dedede" overflow="hidden">
      <Flex
        maxW="2000px"
        flexDir="row"
        h="100vh"
        p="0"
      >
        <Flex
          w="20%"
          bg="#fff"
          m="4"
          rounded="15"
          shadow="md"
        >
        </Flex>
        <Flex
          w="80%"
          flexDir="column"
          m="4"
          ml="0"
          mt="0"
        >
          <Flex
            w="full"
            h="100%"
            flexDir="row"
            m="2"
            mt="4"
          >
            <PessoalSex />
          </Flex>
          <Flex
            w="full"
            h="100%"
            flexDir="column"
            m="2"
          >
            <PessoalCalc />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Home
