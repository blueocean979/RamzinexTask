import style from './loading.module.scss';
import spinner from "../../../assets/Icons/spinner.svg"

export default function Loading () {
    return (
        <div className={style.wrapper}>
            <img src={spinner} alt="Loading..." />
            <p>Loading...</p>
        </div>
    )
}