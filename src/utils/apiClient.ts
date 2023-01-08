import axios from 'axios'
import aspida from '@aspida/axios'
import api from '$/api/$api'
import { Amplify } from 'aws-amplify'

const instance = axios.create()

instance.interceptors.request.use(async (config) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const token = await Amplify.Auth.currentSession().then((res: any) => {
    const accessToken = res.getAccessToken()
    const jwt = accessToken.getJwtToken()

    return jwt
  })

  config.headers = { Authorization: `Bearer ${token}` }

  return config
})

export const apiClient = api(aspida(instance))
