import {FC, memo} from "react";

import style from "./ContactInfo.module.css";

const ContactInfo: FC = () => {
    return (
        <div className={style.contactInfo}>
            <div className={style.main}>
                <div className={style.wrapper}>
                    <div className={style.wrapperContact}>
                        <h3>
                            Call Us
                        </h3>

                        <p className={style.margin}>
                            (+33) 805636699 from France
                        </p>

                        <p className={style.margin}>
                            (+44) 2080590800 from Germany
                        </p>

                        <p className={style.margin}>
                            (+44) 2080590800 from any other country
                        </p>

                        <p className={style.marginBottom}>
                            Monday to Saturday*
                        </p>

                        <p className={style.margin}>
                            07:00am-9:00pm
                        </p>
                    </div>

                    <div className={style.wrapperContact}>
                        <h3>
                            Message Us
                        </h3>

                        <p>
                            customerservices@topsecret.com
                        </p>

                        <p>
                            Our Live Chat is available 24/7*
                        </p>
                    </div>

                    <div className={style.wrapperContact}>
                        <h3>
                            Other Enquiries
                        </h3>

                        <p>
                            For press and media queries, please email pressinfo@topsecret.com
                        </p>

                        <p>
                            For careers at Top Secret, please refer to our Careers Section
                        </p>
                    </div>
                </div>

                <p className={style.text}>
                    (*Excluding Easter Sunday and Christmas Day)
                </p>
            </div>
        </div>
    )
};

export default memo (ContactInfo);
