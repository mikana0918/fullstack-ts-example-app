import axios from 'axios'
import aspida from '@aspida/axios'
import api from '$/api/$api'
import { AmplifyAuthModule } from '~/app/services/auth'

const instance = axios.create()

instance.interceptors.request.use(async (config) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const token = await AmplifyAuthModule.getCurrentToken()

  config.headers = { Authorization: `Bearer ${token}` }

  return config
})

export const apiClient = api(aspida(instance))
