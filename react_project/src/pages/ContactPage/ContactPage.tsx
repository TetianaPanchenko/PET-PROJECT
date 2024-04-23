import {FC, memo} from "react";

import Header from "../../components/Header/Header.tsx";
import ContactInfo from "../../components/ContactInfo/ContactInfo.tsx";
import ContactForm from "../../components/ContactForm/ContactForm.tsx";
import style from "./ContactPage.module.css"


const ContactPage:FC = () => {
    return (
        <div className={style.main}>
            <Header />
            <ContactInfo />
            <ContactForm />
        </div>
    )
};

export default memo (ContactPage);
