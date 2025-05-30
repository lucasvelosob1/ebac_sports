import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProdutoType } from './cartSlice'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProdutoType[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetProductsQuery } = apiSlice