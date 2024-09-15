import style from "./marketCard.module.scss"
import { market } from "../../../types"
import { Link } from "react-router-dom"
import costDelimiter from "../../../utils/costDelimiter"

interface props {
    marketInfo: market
}
export default function MarketCard({ marketInfo }: props) {
    return (
        <Link
            className={style.row}
            to={`/marketDetails/${marketInfo?.pair_id}`}
            state={{ marketInfo }}
        >
            <div className={style.box}>
                {costDelimiter(marketInfo?.buy)}
                <div>{marketInfo?.quote_currency_symbol?.en?.toUpperCase()}</div>
            </div>
            <div className={style.box}>
                <p>{`(${marketInfo?.base_currency_symbol?.en.toUpperCase()}) ${marketInfo.name.fa}`}</p>
                <img src={marketInfo.logo} alt="logo" className={style.logo} />
            </div>
        </Link>
    )
}