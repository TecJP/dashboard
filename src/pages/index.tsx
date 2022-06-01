import { api_pes_sex } from '@/libs/pessoal_sex'
import Chart from 'react-apexcharts'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [config, setConfig] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    async function LoadData() {
      try {
        const response = await api_pes_sex.get('go/itumbiara/BCD019DACFB74AB59C5FCEE48E43EC2A/PESSOAL_CALC');
        return setData(response.data.PESSOAL_CALC);
      } catch (error) {
        console.log(error);
      }
    }

    LoadData();
  }, [])

  console.log(data)

  return (
    <div>
      <h1>{data[0].vl7}</h1>
      <p>{data[0].vl1}</p>
      <p>{data[0].vl2}</p>
      <p>{data[0].vl3}</p>
      <p>{data[0].vl4}</p>
    </div>
  )
}

export default Home
