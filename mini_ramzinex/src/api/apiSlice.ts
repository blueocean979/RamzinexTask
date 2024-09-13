import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ramzinexApi = createApi({
    reducerPath: "ramzinexApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://publicapi.ramzinex.com/exchange/api/v1.0"}),
    endpoints: (builder) => ({
        getMarketsList: builder.query({
            query: () => "pairs"
        }),
    }),

});

export const { useGetMarketsListQuery } = ramzinexApi

