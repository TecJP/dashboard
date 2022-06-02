import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.centi.com.br/rest/getdata/',
});