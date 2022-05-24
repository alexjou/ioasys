import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const API = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1",
})

API.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@Token')

  if (config?.headers && token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

API.interceptors.response.use(
  (response) => {
    return response
  },

  async (error) => {
    const token = await AsyncStorage.getItem('@Token')

    if (error.response.status === 401 && token) {
      const response = await new Promise(async (resolve, reject) => {
        try {
          const refreshTokenStorage = await AsyncStorage.getItem('@RefreshToken')
          API
            .post('/auth/refresh-token', {
              refreshToken: refreshTokenStorage,
            })
            .then((response) => {
              const token = response.headers.authorization
              const refreshToken = response.headers['refresh-token']

              AsyncStorage.setItem('@Token', token)
              AsyncStorage.setItem('@RefreshToken', refreshToken)
              API.defaults.headers.common.Authorization = `Bearer ${token}`

              return resolve(response)
            })
            .catch(() => {
              reject(error)
            })
        } catch (err) {
          return reject(err)
        }
      })
      return response
    }

    return Promise.reject(error)
  }
)
