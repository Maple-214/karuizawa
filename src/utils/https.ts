import HttpClient from 'axios-mapper'
const APIHOST = import.meta.env.MODE === 'production' ? 'http://20.27.24.103' : "http://localhost:3300"
const https = (hasToken: Boolean = true) => {
  const config = {
    baseURL: APIHOST,
    headers: {
      //   Authorization: 'Bearer ' + token
    }
  }
  return new HttpClient(config)
}

export default https
