import { useGetMarketsListQuery } from "../api/apiSlice"
interface market{
    // [x: string]: unknown;
    id: string;
    name: {
        fa: string,
        en: string
    }
}
export default function MarketLists() {
    const {
        data: pairs,
        isLoading,
        isSuccess,
        isError,
    } = useGetMarketsListQuery()

    let content;
    if (isLoading) content = <div>Loading...</div>
    else if (isSuccess) { 
        console.log(pairs)
        content = pairs.data.map((market: market) => <div key={market.id}>{market.name.fa}</div>) 
    }
    else if (isError) content = <p>Error</p>
    return (
        <div>
            {/* {Array.isArray(content) ? content.map(market => market.name.fa) : content} */}
            {content}
        </div>
    )
} 