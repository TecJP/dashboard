import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';

import { usePessoalCalc } from "@/hooks/usePessoalCalc";
import { FormatCurrency } from "@/utils/FormatCurrency";

type Data = {
  cp1: string;
  cp2: string;
  cp3: string;
  vl1: string;
  vl2: string;
  vl3: string;
  vl4: string;
  vl5: string;
  vl6: string;
  vl7: string;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export function PessoalCalc() {
  const { pessoalCalc } = usePessoalCalc<Data[]>('/api/pessoal_calc');
  const date = new Date();
  const pessoalCalcFiltered = pessoalCalc?.filter(item => {
    if (item.vl5 === (date.getMonth() + 2).toString()) {
      return item;
    }
  });
  const pessoalCalcFilteredByBackMonth = pessoalCalc?.filter(item => {
    if (item.vl5 === (date.getMonth() + 1).toString()) {
      return item;
    }
  });
  const resultsBackMonth = pessoalCalcFilteredByBackMonth?.map(item => {
    return {
      proventos: item.vl1,
      descontos: item.vl2,
      liquido: item.vl3,
    }
  });

  // console.log(Number(resultsBackMonth[0]?.liquido).toFixed(2) < Number(pessoalCalcFiltered[0]?.vl3).toFixed(2));

  return (
    <Flex
      direction="column"
      align="center"
      bg="#fff"
      p="6"
      mr="1"
      w="240%"
      h="100%"
      rounded="15"
      shadow="md"
    >
      <Heading fontSize="35px" mt="2" mb="2"> Gastos em Julho </Heading>
      {pessoalCalcFiltered?.map(item => {
        return (
          <Flex w="100%" h="20%" direction="row">
            <Box
              key={item.cp1}
              w="100%"
              bg="#fff"
              boxShadow="md"
              rounded="15"
              overflow="hidden"
              mb="2"
              mr="2"
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
            >
              <Box
                bg="teal.300"
                w="0.5rem"
                m="0"
                p="0"
              >
              </Box>
              <Flex w="100%" mt="2" mb="2" direction="column">
                <Heading
                  pr="4"
                  pl="4"
                  fontSize="25px"
                  fontWeight="500"
                >
                  Valor dos Proventos
                </Heading>
                <Text
                  pr="4"
                  pl="4"
                  fontSize="30px"
                  fontWeight="500"
                >
                  {FormatCurrency(item.vl1)}
                </Text>
                <Text
                  pr="4"
                  pl="4"
                  fontSize="15px"
                  fontWeight="500"
                >
                  Mês anterior
                </Text>
                <Text
                  pr="4"
                  pl="4"
                  display="flex"
                  alignItems="center"
                >
                  {resultsBackMonth?.map(result => {
                    return (
                      FormatCurrency(result.proventos)
                    )
                  })}
                  {resultsBackMonth?.map(result => {
                    return (
                      Number(item.vl1).toFixed(2) < Number(result.proventos).toFixed(2) ?
                        <ArrowUpIcon w={5} h={5} m="0.5" p="0" color="green" />
                        :
                        <ArrowDownIcon w={5} h={5} m="0.5" p="0" color="red" />
                    )
                  })}
                </Text>
              </Flex>
            </Box>
            <Box
              key={item.cp2}
              w="100%"
              bg="#fff"
              boxShadow="md"
              rounded="15"
              overflow="hidden"
              mb="2"
              mr="2"
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
            >
              <Box
                bg="teal.300"
                w="0.5rem"
                m="0"
                p="0"
              >
              </Box>
              <Flex w="100%" mt="2" mb="2" direction="column">
                <Heading
                  pr="4"
                  pl="4"
                  fontSize="25px"
                  fontWeight="500"
                >
                  Valor dos Descontos
                </Heading>
                <Text
                  pr="4"
                  pl="4"
                  fontSize="30px"
                  fontWeight="500"
                >
                  {FormatCurrency(item.vl2)}
                </Text>
                <Text
                  pr="4"
                  pl="4"
                  fontSize="15px"
                  fontWeight="500"
                >
                  Mês anterior
                </Text>
                <Text
                  pr="4"
                  pl="4"
                  display="flex"
                  alignItems="center"
                >
                  {resultsBackMonth?.map(result => {
                    return (
                      FormatCurrency(result.descontos)
                    )
                  })}
                  {resultsBackMonth?.map(result => {
                    return (
                      Number(item.vl2).toFixed(2) < Number(result.descontos).toFixed(2) ?
                        <ArrowUpIcon w={5} h={5} m="0.5" p="0" color="green" />
                        :
                        <ArrowDownIcon w={5} h={5} m="0.5" p="0" color="red" />
                    )
                  })}
                </Text>
              </Flex>
            </Box>
            <Box
              key={item.cp3}
              w="100%"
              bg="#fff"
              boxShadow="md"
              rounded="15"
              overflow="hidden"
              mb="2"
              mr="2"
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
            >
              <Box
                bg="teal.300"
                w="0.5rem"
                m="0"
                p="0"
              >
              </Box>
              <Flex w="100%" mt="2" mb="2" direction="column">
                <Heading
                  pr="4"
                  pl="4"
                  fontSize="25px"
                  fontWeight="500"
                >
                  Valor Liquido
                </Heading>
                <Text
                  pr="4"
                  pl="4"
                  fontSize="30px"
                  fontWeight="500"
                >
                  {FormatCurrency(item.vl3)}
                </Text>
                <Text
                  pr="4"
                  pl="4"
                  fontSize="15px"
                  fontWeight="500"
                >
                  Mês anterior
                </Text>
                <Text
                  pr="4"
                  pl="4"
                  display="flex"
                  alignItems="center"
                >
                  {resultsBackMonth?.map(result => {
                    return (
                      FormatCurrency(result.liquido)
                    )
                  })}
                  {resultsBackMonth?.map(result => {
                    return (
                      Number(item.vl3).toFixed(2) < Number(result.liquido).toFixed(2) ?
                        <ArrowUpIcon w={5} h={5} m="0.5" p="0" color="green" />
                        :
                        <ArrowDownIcon w={5} h={5} m="0.5" p="0" color="red" />
                    )
                  })}
                </Text>
              </Flex>
            </Box>
          </Flex>
        )
      })}
    </Flex>
  );
}