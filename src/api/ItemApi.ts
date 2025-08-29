import { createApi } from "@reduxjs/toolkit/query/react";
import type { IArtistCard } from "../types";
import { axiosBaseQuery } from "./axiosBaseQuery";

export const itemApi = createApi({
  reducerPath: "itemApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://6885cd35f52d34140f6a963d.mockapi.io",
  }),
  tagTypes: ["Item"],
  endpoints: (builder) => ({
    getAllItems: builder.query<IArtistCard[], string | void>({
      query: (search = "") => ({
        url: "/items",
        method: "GET",
        params: search ? { search } : undefined,
      }),
      providesTags: ["Item"],
    }),
  }),
});

export const { useGetAllItemsQuery } = itemApi;


