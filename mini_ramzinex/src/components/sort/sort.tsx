import style from "./sort.module.scss"
import sort from "../../assets/Icons/Sort.svg"

export default function Sort() {
    return (
        <div className={style.row}>
            <div className={style.col}>
                نام
                <img className={style.icon} src={sort} alt="sortIcon" />
            </div>
            <div className={style.col}>
                آخرین قیمت
                <img className={style.icon} src={sort} alt="sortIcon" />
            </div>   
        </div>
    )
}