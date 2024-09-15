import { useGetMarketsListQuery } from "../../api/apiSlice"
import Searchbar from "./searchbar/searchbar";
import dark_mode from "../../assets/Icons/dark_mode.svg"
import style from "./marketsList.module.scss"
import Sort from "./sort/sort"
import MarketCard from "./marketCard/marketCard"
import { market, sortState } from "../../types"
import Loading from "./loading/loading";
import { useState } from "react";
import { useTheme } from "../../context/themeContext"; 


export default function MarketLists() {
    const [sortInfo, setSortInfo] = useState<sortState>({ key: '', type: 'desc' })
    const [searchKey, setSearchKey] = useState('')
    const {theme, toggleTheme} = useTheme()
    
    const {
        data: pairs,
        isLoading,
        isSuccess,
        isError,
    } = useGetMarketsListQuery(name, {
        pollingInterval: 200,
        skipPollingIfUnfocused: true,
    })
    function sortHandler(key: string) {
        setSortInfo(prev => ({ key, type: (prev.type === "desc" ? "asc" : "desc") }))
    }
    function searchKeyHandler(key: string) {
        setSearchKey(key)
    }
    function applySortFilter(arrayInput: market[]) {
        if (arrayInput?.length) {
            const array = [...arrayInput]
            if (sortInfo.key === 'price') {
                return array?.sort((a, b) => sortInfo.type === 'asc' ? a.buy - b.buy : b.buy - a.buy)
            } else if (sortInfo.key === 'name') {
                return array?.sort((a, b) => sortInfo.type === 'asc' ? a.name.fa.localeCompare(b.name.fa) : b.name.fa.localeCompare(a.name.fa))
            }
            else return array
        } else return arrayInput

    }
    function applySearch(array: market[]) {
        if (searchKey) {
            return array.filter((item) => item.name.fa.includes(searchKey)
                || item.name.en.toLowerCase().includes(searchKey.toLowerCase())
                || item?.base_currency_symbol?.en.toLowerCase().includes(searchKey.toLowerCase())
            )
        } else return array
    }
    let content;
    if (isLoading) content = <Loading />
    else if (isSuccess) content = applySortFilter(applySearch(pairs))?.map((market: market) => <div key={market.pair_id}><MarketCard marketInfo={market} /></div>)
    else if (isError) content = <p>Error</p>
    return (
        <div className={theme === 'dark' ? style.darkWrapper : style.wrapper}>
            <div className={style.row}>
                <div className={style.themeButton}  onClick={toggleTheme}>
                    <img src={dark_mode}
                        alt="theme"
                        className={style.themeImage}
                    />
                </div>
                <div className={style.searchbarWrapper}>
                    <Searchbar setSearchKey={searchKeyHandler} />
                </div>
            </div>
            <div className={style.sortRow}>
                <Sort applySort={sortHandler} />
            </div>
            <div className={style.listContainer}>
                {content}
            </div>
        </div>
    )
} 