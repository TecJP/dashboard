import { Container, Flex } from "@chakra-ui/react";
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
import { Line } from 'react-chartjs-2';

import { usePessoalCalc } from "@/hooks/usePessoalCalc";

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
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export function PessoalCalc() {
  const { pessoalCalc } = usePessoalCalc<Data[]>('/api/pessoal_calc');

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Gasto com Pessoal',
      },
    },
  };

  const labels = pessoalCalc?.map(item => item.vl7.toLowerCase());

  const data = {
    labels,
    datasets: [
      {
        label: 'Liquido',
        data: pessoalCalc?.map(item => item.vl3),
        lineTension: 0.15,
        fill: true,
        radius: 0,
        backgroundColor: 'rgba(53, 223, 235, 0.5)',
        borderColor: 'rgba(53, 223, 235, 1)',
      },
      {
        label: 'Desconto',
        data: pessoalCalc?.map(item => item.vl2),
        lineTension: 0.15,
        fill: true,
        radius: 0,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgba(53, 162, 235, 1)',
      },
      {
        label: 'Proventos',
        data: pessoalCalc?.map(item => item.vl1),
        lineTension: 0.15,
        fill: true,
        radius: 0,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return (
    <Flex bg="#fff" p="6" mr="4" w="full" h="100%" rounded="15" shadow="md" >
      <Line
        data={data}
        options={options}
      />
    </Flex>
  );
}