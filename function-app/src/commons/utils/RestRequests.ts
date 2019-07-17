import axios, { AxiosRequestConfig } from "axios";

export const restGet = (url: string, config?: AxiosRequestConfig) => {
 return restRequest(url, { method: 'GET' })
}

export const restRequest = (url, requestOptions) => {
  const config = {
    ...requestOptions,
    url: url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...requestOptions.headers
    }
  }

  console.info(JSON.stringify(config))
  return axios.request(config);
}