import HttpClient from 'axios-mapper'
const APIHOST = import.meta.env.MODE === 'production' ? 'https://www.oppenheim.co.jp' : "https://www.oppenheim.co.jp"
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
