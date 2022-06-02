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
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

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
  BarElement,
  Title,
  Tooltip,
  Legend
);



export function PessoalCalc() {
  const { bla } = usePessoalCalc<Data[]>('go/itumbiara/BCD019DACFB74AB59C5FCEE48E43EC2A/PESSOAL_CALC');

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'PESSOAL_CALC',
      },
    },
  };

  const labels = bla?.map(item => item.vl7);

  const data = {
    labels,
    datasets: [
      {
        label: 'VL1',
        data: bla?.map(item => item.vl1),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'VL2',
        data: bla?.map(item => item.vl2),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'VL3',
        data: bla?.map(item => item.vl3),
        backgroundColor: 'rgba(53, 223, 235, 0.5)',
      },
    ],
  };

  return (
    <Container>
      <Bar
        data={data}
        options={options}
      />
    </Container>
  );
}