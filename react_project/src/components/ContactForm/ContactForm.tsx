import {FC, memo} from "react";
import {IconButton, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import style from "./ContactForm.module.css";

const ContactForm: FC = () => {
    return (
        <div>
            <h2>
                Sign up for Top Secret Updates
            </h2>

            <p>
                Be first to receive early access to our latest collections, exclusive events and news
            </p>

            <div className={style.wrapperSendEmail}>
                <TextField fullWidth label="Enter your Email address" id="fullWidth" helperText="Required Field"/>
                <IconButton irea-lebel="Send"  size="large"><SendIcon/></IconButton>
            </div>
        </div>
    )
}

export default memo (ContactForm);
