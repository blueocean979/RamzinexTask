import style from "./marketCard.module.scss"
import { market } from "../../../types"
interface props {
    marketInfo: market
}
export default function MarketCard({ marketInfo }: props) {
    console.log(marketInfo)
    function numberSplitter(number: number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <div className={style.row}>
            <div className={style.box}>
                {numberSplitter(marketInfo?.buy)}
                <div>{marketInfo?.quote_currency_symbol?.en?.toUpperCase()}</div>
            </div>
            <div className={style.box}>
                {marketInfo.name.fa}
                <img src={marketInfo.logo} alt="logo" className={style.logo} />
            </div>
        </div>
    )
}