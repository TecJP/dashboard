// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'

type Data = {
  name: string
}

const url = 'https://api.centi.com.br/rest/getdata/go/itumbiara/BCD019DACFB74AB59C5FCEE48E43EC2A/PESSOAL_CALC'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  })
  const { data } = await axios.get(url);
  res.json(data.PESSOAL_CALC);
}
