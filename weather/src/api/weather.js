import axios from 'axios'


export const keyApi = 'iGCjNM7pGTHKCz04rDK2DCnfQMKIWtxo'


export const axiosInstance = axios.create({
    baseURL: 'http://dataservice.accuweather.com/',
    // headers: { 'X-Custom-Header': 'foobar' },
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
  });
