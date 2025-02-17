import React from 'react';
import styles from './Footer.module.scss'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Footer = () => {
    const cart = useSelector((state) => state.cart.value)
    let count = cart.reduce((acc, item) => acc + item.amount, 0);
    return (
        <div className={styles.footer}>
            <div className={styles.content_wrapper}>
                <div className={styles.workTime}>
                    ВРЕМЯ РАБОТЫ<br/>
                    Понедельник-пятница: с 8.00 до 17.00<br/>
                    Перерыв: с 12.00 до 13.00<br/>
                    Суббота, воскресенье: выходной<br/>
                </div>
                <NavLink to={'/cart'}  className={styles.cart}>
                    <div>{count}</div>
                    <i className="fas fa-shopping-cart"></i>
                </NavLink>
                <div className={styles.workTime}>
                    ООО «Антей»: запчасти для комбайнов, <br/>
                    ремонт комбайнов, дефектовка комбайнов,<br/>
                    ремонт и замена двигателя.<br/>
                    +7 (863) 303-04-41<br/>
                </div>
            </div>
        </div>
    )
        ;
};

export default Footer;