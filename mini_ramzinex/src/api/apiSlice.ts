import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface market{
    // [x: string]: unknown;
    id: string;
    name: {
        fa: string,
        en: string
    }
}
interface marketsResponse<market>{
    data: market[],
    status: number
}
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

