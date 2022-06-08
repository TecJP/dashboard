import { Box, Flex, Heading, Progress, Spacer, Stack, Text } from "@chakra-ui/react";


import { usePessoalSex } from "@/hooks/usePessoalSex";
import { useEffect, useState } from "react";

type Data = {
  vl1: string;
  vl2: string;
  vl3: string;
  vl4: string;
  vl5: string;
  vl6: string;
  vl7: string;
  Nome_Grafico: string;
}

export function PessoalSex() {
  const [total, setTotal] = useState(Number());
  const { sexPessoal } = usePessoalSex<Data[]>('/api/pessoal_sex');

  useEffect(() => {
    sexPessoal?.map(item => {
      let total = 0
      for (let i = 0; i < sexPessoal.length; i++) {
        total += Number(sexPessoal[i].vl2);
      }
      setTotal(total);
    });
  }, [sexPessoal]);

  return (
    <Flex w="100%" h="100%" flexDir="row" justify="start">
      {sexPessoal?.map(item => {
        return (
          <Box
            key={item.vl2}
            w="full"
            h="100%"
            bg="#fff"
            boxShadow="md"
            rounded="15"
            overflow="hidden"
            p="4"
            mb="4"
            mr="4"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Heading
              fontSize={"18px"}
              fontWeight="500"
            >
              {item.vl1}
            </Heading>
            <Text
              fontWeight="400"
              fontSize={"14px"}
            >
              {item.vl2}
            </Text>
            <Progress
              size="sm"
              colorScheme="gray"
              hasStripe
              isAnimated
              value={Number(((Number(item.vl2) / total) * 100).toFixed(2))}
            />
          </Box>
        )
      })}
      <Box
        w="full"
        h="100%"
        bg="#fff"
        boxShadow="xl"
        rounded="15"
        overflow="hidden"
        p="4"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        <Heading
          fontSize={"18px"}
          fontWeight="500"
        >
          Total
        </Heading>
        <Text
          fontWeight="400"
          fontSize={"14px"}
        >
          {total}
        </Text>
        <Progress size="sm" colorScheme="gray" hasStripe isAnimated value={100} />
      </Box>
    </Flex>
  );
}