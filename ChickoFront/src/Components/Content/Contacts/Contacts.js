import React from 'react';
import styles  from './Contacts.module.scss'

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.title}> Контакты</div>
            <div className={styles.description}>
                Мы находимся по адресу: 344065, Ростовская область, г. Ростов-на-Дону, ул. 50-летия Ростсельмаша, 8В<br/>
                Наш телелефон/факс: +7 (863) 303-04-41; +7 (863) 303-04-42<br/>
                Телефон нашей бухгалтерии: +7 (863) 303-04-42<br/>
                Наша эл.почта: antey72@mail.ru, info@oooantey.ru<br/>
                Наш skype: muzalev.sv<br/>
            </div>
            <div className={styles.map_wrapper}>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Afe361d21b741c133d4f13502679a495e9acdb81890f15942087cefde5159710d&amp;source=constructor"
                    width="100%" height="100%"></iframe>
            </div>
        </div>
    );
};

export default Contacts;