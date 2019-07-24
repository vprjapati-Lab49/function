import axios, { AxiosRequestConfig } from "axios";

export const restGet = (url: string, config?: AxiosRequestConfig) => {
  return restRequest(url, { method: 'GET' })
}

export const restPost = (url: string, data, config?: AxiosRequestConfig) => {
  return restRequest(url, { ...config, data, method: 'POST' })
}
export const restPut = (url: string, data, config?: AxiosRequestConfig) => {
  return restRequest(url, { ...config, data, method: 'PUT' })
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

  return axios.request(config);
}