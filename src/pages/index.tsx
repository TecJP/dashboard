import { api_pes_sex } from '@/libs/pessoal_sex'
import Chart from 'react-apexcharts'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { stringify } from 'querystring';

// interface PessoalCalc {
//   vl1: string;
//   vl2: string;
//   vl3: string;
//   vl4: string;
//   vl6: string;
//   vl7: string;
// }

const Home: NextPage = () => {
  const [config, setConfig] = useState({});
  const [data, setData] = useState({
    vl1: '',
    vl2: '',
    vl3: '',
    vl4: '',
    vl5: '',
    vl6: '',
    vl7: '',
  });

  useEffect(() => {
    async function LoadData() {
      try {
        const response = await api_pes_sex.get('go/itumbiara/BCD019DACFB74AB59C5FCEE48E43EC2A/PESSOAL_CALC');
        return setData(response.data.PESSOAL_CALC[0]);
      } catch (error) {
        console.log(error);
      }
    }

    LoadData();
  }, [setData])

  return (
    <div>
      <h1>{data.vl7}</h1>
      <p>{data.vl1}</p>
      <p>{data.vl2}</p>
      <p>{data.vl3}</p>
      <p>{data.vl4}</p>
    </div>
  )
}

export default Home
