import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { market } from "../types";

export const ramzinexApi = createApi({
    reducerPath: "ramzinexApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://publicapi.ramzinex.com/exchange/api/v1.0"}),
    endpoints: (builder) => ({
        getMarketsList: builder.query<market[], void>({
            query: () => "/exchange/pairs",
            transformResponse: (response: {data: []}) => response.data
        }),
    }),

});

export const { useGetMarketsListQuery } = ramzinexApi

