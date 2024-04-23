import {FC, memo} from "react";

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import {IconButton} from "@mui/material";
import style from './header.module.css'

const Header: FC = () => {
    return(
        <header className={style.header}>
            <div className={style.logo}>
                <h1 className={style.title}>
                    Top Secret
                </h1>
            </div>

            <ul className={style.menuShop}>
                <li className={style.menuShopItem}>
                    Home
                </li>

                <li className={style.menuShopItem}>
                    Women
                </li>

                <li className={style.menuShopItem}>
                    Man
                </li>

                <li className={style.menuShopItem}>
                    Shopping Bag
                </li>

                <li className={style.menuShopItem}>
                    Information
                </li>
            </ul>

            <ul className={style.menuIdentify}>
                <li className={style.menuIdentifyItem}>
                    <IconButton irea-lebel="Send"  size="large"><SearchIcon/></IconButton>
                </li>

                <li className={style.menuIdentifyItem}>
                    <IconButton irea-lebel="Send"  size="large"><FavoriteBorderIcon/></IconButton>
                </li>

                <li className={style.menuIdentifyItem}>
                    <IconButton irea-lebel="Send" size="large"><PersonOutlineIcon/></IconButton>
                </li>
            </ul>
        </header>
    )
};

export default memo (Header);
