// api.js
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// función de login
api.login = async ({ email, password }) => {
  const { data: { result } } = await api.post('/api/auth/login', { email, password })
  if (result?.token) localStorage.setItem('token', result.token)
  if (result?.user) localStorage.setItem('user', JSON.stringify(result.user))
  return result
}

// función de register
api.register = async ({ email, username, password }) => {
  const { data } = await api.post('/api/auth/register', { email, username, password })
  if (data.result?.token) localStorage.setItem('token', data.result.token)
  if (data.result?.user) localStorage.setItem('user', JSON.stringify(data.result.user))
  return data.result
}

export default api
