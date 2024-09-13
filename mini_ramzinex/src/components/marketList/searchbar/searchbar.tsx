import style from "./searchbar.module.scss"
import search from "../../../assets/Icons/search.svg"

export default function Searchbar () {
    return (
        <div className={style.inputContainer}>
            <input
                className={style.inputbox}
                placeholder="جست و جوی بازار" 
                />
            <img alt="search" src={search} className={style.searchIcon} />
        </div>
    )
} 