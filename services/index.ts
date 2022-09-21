
import axios from 'axios'
import { Game } from '~~/types'

const instance = axios.create({
  baseURL: 'http://demo4256490.mockable.io',
})

export const getGames = async (): Promise<Game[]> => {
  const configs = {
    url: '/games',
    method: 'GET',
  }
  const res = await instance(configs)
  return res.data
}