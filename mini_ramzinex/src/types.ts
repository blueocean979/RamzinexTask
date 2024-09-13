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
    base_currency_symbol: {
        en: string
    }
    financial:[
        last24h:{
            quote_volume: number
            change_percent: number
        }
    ]
}
export interface marketsResponse<market>{
    data: market[],
    status: number
}