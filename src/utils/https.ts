import HttpClient from 'axios-mapper'
const APIHOST = "http://localhost:3300"
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
