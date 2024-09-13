export interface market {
    pair_id: string;
    logo: string;
    name: {
        fa: string,
        en: string
    };
    quote_currency_symbol: {
        fa: string,
        en: string
    };
    buy: number;
}
export interface marketsResponse<market>{
    data: market[],
    status: number
}