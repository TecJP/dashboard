import { Flex, Heading } from "@chakra-ui/react";

import { usePessoalCalc } from "@/hooks/usePessoalCalc";
import { Card } from "../Card";

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

  return (
    <Flex
      direction="column"
      align="center"
      bg="#fff"
      p="6"
      mr="1"
      w={{ md: "65%", lg: "65%", xl: "70%" }}
      h="100%"
      rounded="15"
      shadow="md"
    >
      <Heading fontSize="35px" mt="2" mb="2"> Gastos em Julho </Heading>
      {pessoalCalcFiltered?.map(item => {
        return (
          resultsBackMonth?.map(results => {
            return (
              <Flex w="100%" key={item.vl7} direction="row">
                <Card
                  key={item.cp1}
                  title="Valor dos Provendos"
                  amount={item.vl1}
                  description="Mês Anterior"
                  lastMonthAmount={results.proventos}
                />
                <Card
                  key={item.cp2}
                  title="Valor dos Descontos"
                  amount={item.vl2}
                  description="Mês Anterior"
                  lastMonthAmount={results.descontos}
                />
                <Card
                  key={item.cp3}
                  title="Valor Liquido"
                  amount={item.vl3}
                  description="Mês Anterior"
                  lastMonthAmount={results.liquido}
                />
              </Flex>
            )
          })
        )
      })}
    </Flex>
  );
}