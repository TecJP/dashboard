import { api_pes_sex } from '@/libs/pessoal_sex'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const response = api_pes_sex.get('GO/Itumbiara/9F9EB943822E4504B15E7F292DAEFF17/PESSOAL_SEX');

  console.log(response);

  return (
    <div>
      Hello World!
    </div>
  )
}

export default Home
