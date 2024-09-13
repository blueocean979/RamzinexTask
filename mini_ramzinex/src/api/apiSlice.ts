import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { market, marketsResponse } from "../types";

export const ramzinexApi = createApi({
    reducerPath: "ramzinexApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://publicapi.ramzinex.com/exchange/api/v1.0"}),
    endpoints: (builder) => ({
        getMarketsList: builder.query<marketsResponse<market>, void>({
            query: () => "/exchange/pairs"
        }),
    }),

});

export const { useGetMarketsListQuery } = ramzinexApi

