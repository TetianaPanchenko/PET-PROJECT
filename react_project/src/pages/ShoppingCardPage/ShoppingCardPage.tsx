import {FC, memo} from "react";

import Header from "../../components/Header/Header.tsx";
import style from "./shoppingCardPage.module.css"

const ShoppingCardPage: FC = () => {
    return(
        <div className={style.main}>
            <Header />
            <div></div>
        </div>
    )
};

export default memo (ShoppingCardPage);
