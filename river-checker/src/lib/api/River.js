import axios from 'axios'
export default class Reg {
  constructor () {
    this._http = axios
    this._apiUrl = 'https://api.openweathermap.org'
  }
  getData (city) {
    let route = `${this._apiUrl}/data/2.5/weather`
    return this._http.get(`${route}`, {
      params: {
        q: `${city}`,
        APPID: '5693a877417c5ac266455e0cdd3be1b9'
      }
    })
  }
}
