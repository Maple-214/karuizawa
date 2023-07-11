import HttpClient from 'axios-mapper'
const APIHOST = import.meta.env.MODE === 'production' ? 'http://www.oppenheim.co.jp' : "http://www.oppenheim.co.jp"
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
