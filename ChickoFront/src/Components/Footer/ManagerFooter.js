import React from 'react';
import vk from '../../Data/VK.svg'
import tg from '../../Data/TG.svg'
import styles from './Footer.module.scss'

const ManagerFooter = () => {
    let user = getUser()
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
    return JSON.parse(localStorage.getItem('User')) ?? {
        name: 'Не авторизован', date: '',
    }
}


function exit(){
    localStorage.setItem('User',
        JSON.stringify({
            name: '',
            date:  ''
        }));
}
export default ManagerFooter;