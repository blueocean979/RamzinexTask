import { useGetMarketsListQuery } from "../../api/apiSlice"
import Searchbar from "./searchbar/searchbar";
import dark_mode from "../../assets/Icons/dark_mode.svg"
import style from "./marketsList.module.scss"
import Sort from "../sort/sort";

interface market {
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
    else if (isSuccess) content = pairs.data.map((market: market) => <div key={market.id}>{market.name.fa}</div>)
    else if (isError) content = <p>Error</p>
    return (
        <div className={style.wrapper}>
            <div className={style.row}>
                <img src={dark_mode} alt="theme" className={style.themeImage} />
                <div className={style.searchbarWrapper}>
                    <Searchbar />
                </div>
            </div>
            <div className={style.sortRow}>
                <Sort />
            </div>
            {content}
        </div>
    )
} 