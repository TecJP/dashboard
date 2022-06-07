import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { usePessoalEscolaridade } from "@/hooks/usePessoalEscolaridade";
import { Box, Heading, HStack, ListItem, Text, UnorderedList } from '@chakra-ui/react';

type Data = {
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
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function PessoalEscolaridade() {
  const { pessoalEscolaridade } = usePessoalEscolaridade<Data[]>('/api/pessoal_escolaridade');

  // const options = {
  //   elements: {
  //     bar: {
  //       borderWidth: 2,
  //     },
  //   },
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top' as const,
  //     },
  //     title: {
  //       display: true,
  //       text: 'Nível de Escolaridade',
  //     },
  //   },
  // };

  // const labels = pessoalEscolaridade?.map(item => item.vl2);

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: `Quantidade`,
  //       data: pessoalEscolaridade?.map(item => item.vl3),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //       borderColor: 'rgba(53, 162, 235, 1)'
  //     },
  //   ],
  // };

  console.log(pessoalEscolaridade?.map(item => {
    return {
      'nível': item.vl2,
      'qtd': item.vl3
    }
  }));

  console.log(pessoalEscolaridade);

  return (
    <HStack spacing={8}>
      {/* {pessoalEscolaridade?.map(item => {
        return (
          <Box key={item.vl2}>
            <Heading size="md">{item.vl2}</Heading>
            <Text>{item.vl3}</Text>
          </Box>
        )
      })} */}
    </HStack>
  );
}