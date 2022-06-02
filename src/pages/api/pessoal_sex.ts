// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'

type Data = {
  name: string
}

const url = 'https://api.centi.com.br/rest/getdata/go/itumbiara/9F9EB943822E4504B15E7F292DAEFF17/PESSOAL_SEX'

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
  res.json(data.PESSOAL_SEX);
}
