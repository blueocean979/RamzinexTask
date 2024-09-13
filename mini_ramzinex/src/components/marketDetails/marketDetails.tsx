import { useLocation } from 'react-router-dom'
import style from './marketDetails.module.scss'
import costDelimiter from '../../utils/costDelimiter';
import { Link } from 'react-router-dom';

export default function MarketDetails() {
    const { state } = useLocation()
    console.log(state, 'state');

    return (
        <div className={style.wrapper}>
            <div className={style.col}>
                <img src={state?.marketInfo?.logo} alt="logo" />
                <p>{`${state?.marketInfo?.name?.fa} (${state?.marketInfo?.base_currency_symbol?.en.toUpperCase()})`}</p>
            </div>
            <div className={style.col}>
                <div className={style.row}>
                    <div className={style.box}>{state?.marketInfo?.name?.en}</div>
                    <div className={style.box}>نام انگلیسی</div>
                </div>
                <div className={style.row}>
                    <div className={style.box}>{`${costDelimiter(state?.marketInfo?.buy)}  ${state?.marketInfo?.quote_currency_symbol.en.toUpperCase()}`}</div>
                    <div className={style.box}>قیمت</div>
                </div>
                <div className={style.row}>
                    <div className={style.box}>{`${costDelimiter(state?.marketInfo?.financial?.last24h?.change_percent)}%`}</div>
                    <div className={style.box}>تغییرات ۲۴ ساعته</div></div>
                <div className={style.row}>
                    <div className={style.box}>{`${costDelimiter(state?.marketInfo?.financial?.last24h?.quote_volume)}  ${state?.marketInfo?.quote_currency_symbol.en.toUpperCase()}`}</div>
                    <div className={style.box}>حجم معاملاتی</div>
                </div>
                <Link to="/marketslist" className={style.backButton}>بازگشت</Link>
            </div>
        </div>
    )
}