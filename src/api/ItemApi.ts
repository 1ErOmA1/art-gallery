import type { IAuthor, ILocation, IPainting } from '../types';
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';

export const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://test-front.framework.team',
  }),
  tagTypes: ['Painting', 'Author', 'Location'],
  endpoints: builder => ({
    getPaintings: builder.query<
      { data: IPainting[], meta: { totalCount: number } },
      { q?: string, _page?: number, _limit?: number }
    >({
      keepUnusedDataFor: 60,
      query: ({ q, _page, _limit } = {}) => ({
        url: '/paintings',
        method: 'GET',
        params: { q, _page, _limit },
      }),
      transformResponse: (response: IPainting[], meta) => {
        const axiosMeta = meta as import('axios').AxiosResponse;
        const totalCount = Number(
          axiosMeta.headers['x-total-count'] ?? response.length,
        );
        return {
          data: response,
          meta: { totalCount },
        };
      },
      providesTags: ['Painting'],
    }),

    getAuthors: builder.query<IAuthor[], void>({
      query: () => ({
        url: '/authors',
        method: 'GET',
      }),
      providesTags: ['Author'],
    }),

    getLocations: builder.query<ILocation[], void>({
      query: () => ({
        url: '/locations',
        method: 'GET',
      }),
      providesTags: ['Location'],
    }),
  }),
});

export const {
  useGetPaintingsQuery,
  useGetAuthorsQuery,
  useGetLocationsQuery,
} = itemApi;
