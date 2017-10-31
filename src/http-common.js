import axios from 'axios'

const BASE_URL = 'http://symfony-api/'

export const HTTP = axios.create({
  baseURL: `${BASE_URL}`
})
