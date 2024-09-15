import style from "./sort.module.scss"
import sort from "../../../assets/Icons/sort.svg"
import { sortProps } from "../../../types"

export default function Sort({ applySort }: sortProps) {
    return (
        <div className={style.row}>
            <div className={style.col} onClick={() => applySort('name')}>
                نام
                <img className={style.icon} src={sort} alt="sortIcon" />
            </div>
            <div className={style.col} onClick={() => applySort('price')}>
                آخرین قیمت
                <img className={style.icon} src={sort} alt="sortIcon" />
            </div>
        </div>
    )
}