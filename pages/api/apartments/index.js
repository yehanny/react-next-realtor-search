import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiApartmentsSlice = createApi({
  reducerPath: "apiApartmentsSlice",
  baseQuery: fetchBaseQuery({
    // global configuration for the api
    keepUnusedDataFor: 60,
    // baseUrl: process.env.hostURL,
    baseUrl: "http://localhost:3001",
  }),
  tagTypes: ["Apartment"],
  endpoints: (builder) => ({
    getApartments: builder.query({
      // configuration for an individual endpoint, overriding the api setting
      keepUnusedDataFor: 60,
      query: (args) => {
        const { filters } = args;
        console.info("args", args);
        let newFilter = Object.keys(filters).reduce((ACC, filter) => {
          if (Boolean(filters?.[filter])) {
            ACC[filter] = filters[filter];
          }
          return ACC;
        }, {});
        return {
          url: `/apartments`,
          params: newFilter,
        };
      },
      providesTags: ["Apartment"],
    }),
    getApartmentById: builder.query({
      // Endpoint to get a single apartment by id
      query: (args) => {
        const { id } = args;
        return {
          url: `/apartments/${id}`,
        };
      },
      providesTags: ["Apartment"],
    }),
  }),
});

export const { useGetApartmentsQuery, useGetApartmentByIdQuery } = apiApartmentsSlice;
