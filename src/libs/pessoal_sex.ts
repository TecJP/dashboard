import axios from 'axios'

export const api_pes_sex = axios.create({
  baseURL: 'https://api.centi.com.br/rest/getdata/',
});