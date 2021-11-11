import axios from 'axios'

const DOMAIN = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api'

const userRequest = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    headers: {
      'content-type': 'application/json',
      apikey: 'FcKdtJs202110',
      username: '5zo'
    },
    data
  })
    .then(res => res.data)
    .catch(res => console.log(res.response))
}

const adminRequest = (method, url, masterKey, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    headers: {
      'content-type': 'application/json',
      apikey: 'FcKdtJs202110',
      username: '5zo',
      masterKey: masterKey
    },
    data
  })
    .then(res => res.data)
    .catch(res => console.log(res.response))
}

export const admin = {
  login(email, password) {
    return userRequest('POST', '/auth/login', { email, password })
  },
  signup(email, password, displayName) {
    return userRequest('POST', '/auth/signup', { email, password, displayName })
  },
  showSellList() {
    return adminRequest('GET', '/products/transactions/all', true)
  }
}
