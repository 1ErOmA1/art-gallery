import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

export function axiosBaseQuery({ baseUrl }: { baseUrl: string }): BaseQueryFn<
  {
    url: string
    method: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
  },
  unknown,
  { status?: number, data?: unknown }
> {
  return async ({ url, method, data, params }) => {
    try {
      const result: AxiosResponse = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      return {
        data: result.data,
        meta: result,
      };
    }
    catch (error) {
      const axiosError = error as AxiosError;
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data,
        },
      };
    }
  };
}
