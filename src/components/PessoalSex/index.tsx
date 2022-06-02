import { useEffect, useState } from "react";
import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

import { usePessoalSex } from "@/hooks/usePessoalSex";

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
  ArcElement,
  Tooltip,
  Legend
);

export function PessoalSex() {
  const { sexPessoal } = usePessoalSex<Data[]>('/api/pessoal_sex');

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'PESSOAL_SEX',
      },
    },
  };

  const labels = sexPessoal?.map(item => item.vl1);

  const data = {
    labels,
    datasets: [
      {
        label: 'VL1',
        data: sexPessoal?.map(item => item.vl2),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(53, 162, 235, 0.5)',
          'rgba(53, 223, 235, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(53, 162, 235, 1)',
          'rgba(53, 223, 235, 1)'
        ],
        borderWidth: 1
      },
    ],
  };

  return (
    <Container>
      <Doughnut
        data={data}
        options={options}
        width='50%'
        height='50%'
      />
    </Container>
  );
}