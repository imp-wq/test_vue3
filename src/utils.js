import axios from 'axios'
import Cookies from 'js-cookie'

const request = axios.create()
request.interceptors.request.use((config) => {
  config.headers['token'] = localStorage.getItem('token')
  //   config.headers.common['token'] = localStorage.getItem('token')
  return config
})

export default {
  getToken(TokenKey) {
    // 从cookie和本地存储中查找cookie
    return Cookies.get(TokenKey) || localStorage.getItem(TokenKey)
  },
  setToken(TokenKey, token) {
    Cookies.set(TokenKey, token)
    localStorage.setItem(TokenKey, token)
  },
  request
}
