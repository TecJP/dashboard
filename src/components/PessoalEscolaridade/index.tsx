import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
} from '@chakra-ui/react';

import { usePessoalEscolaridade } from "@/hooks/usePessoalEscolaridade";

type ApiData = {
  Nome_Grafico: string;
  vl1: string;
  vl2: string;
  vl3: string;
  vl4: string;
  vl5: string;
  vl6: string;
  vl7: string;
}

export function PessoalEscolaridade() {
  const { pessoalEscolaridade } = usePessoalEscolaridade<ApiData[]>('/api/pessoal_escolaridade');
  const escolaridadeInst = pessoalEscolaridade?.filter(item => item.Nome_Grafico === "Servidores Escolaridade Inst");

  console.log(pessoalEscolaridade?.filter(item => item.Nome_Grafico === "Servidores Escolaridade Mas"));

  return (
    <Flex bg="#fff" p="4" ml="1" flexDir="row" w="100%" h="100%" rounded="15" shadow="md" >
      <TableContainer m="4">
        <Table size="sm" variant='striped' colorScheme='teal'>
          <TableCaption>Nível de Escolaridade Total</TableCaption>
          <Thead>
            <Tr>
              <Th>Nível</Th>
              <Th>QTD</Th>
            </Tr>
          </Thead>
          <Tbody>
            {escolaridadeInst?.map(item => {
              return (
                <Tr key={item.vl2}>
                  <Td>{item.vl2}</Td>
                  <Td>{item.vl3}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}