import style from "./searchbar.module.scss"
import search from "../../../assets/Icons/search.svg"
import {searchbarProps} from '../../../types'

export default function Searchbar ({setSearchKey}: searchbarProps) {
    return (
        <div className={style.inputContainer}>
            <input
                className={style.inputbox}
                placeholder="جست و جوی بازار" 
                onChange={(e) => setSearchKey(e.target.value)}
                />
            <img alt="search" src={search} className={style.searchIcon} />
        </div>
    )
} 