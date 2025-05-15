import React from 'react';
import vk from '../../Data/VK.svg'
import tg from '../../Data/TG.svg'
import styles from './Footer.module.scss'
import {Navigate} from "react-router-dom";

const ManagerFooter = () => {
    let user = getUser()
    if (user === undefined || user === null) {return <Navigate to="/auth" />}
    else if ((new Date - new Date(user.date)) >= 3600000 ) {
        alert("Истекло время жизни токена доступа");
        return <Navigate to="/auth" />}
    console.log(new Date() - user.date);
    console.log(new Date());
    console.log(new Date(user.date));
    return (
        <div className={styles.footer}>
            <div className={styles.content_wrapper}>
                <div className={styles.workTime}>
                    ВРЕМЯ РАБОТЫ<br/>
                    Понедельник-Воскресенье<br/>
                    12.00 - 22.00<br/>
                </div>
                <div className={styles.login}>{user.name}</div>
                <div className={styles.workTime}>
                    Chicko - Вкус Кореи <br/>
                    +7 (863) 301-35-00<br/>
                    <div className={styles.socials_wrapper}>
                        <div title="Сообщество Вконтакте">
                            <a href="https://vk.com/chicko_russia" className={styles.social}>
                                <img src={vk} alt="website icon" className={styles.sociallink_svg}/>
                            </a>
                        </div>
                        <div title="Telegram">
                            <a href="https://t.me/+rSRmlAWAO3piMjJi"  className={styles.social}>
                                <img src={tg} alt="website icon" className={styles.sociallink_svg}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function getUser() {
    return JSON.parse(localStorage.getItem('User'));
}
export default ManagerFooter;