import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.content_wrapper}>
                <div className={styles.workTime}>
                    ВРЕМЯ РАБОТЫ<br/>
                    Понедельник-пятница: с 8.00 до 17.00<br/>
                    Перерыв: с 12.00 до 13.00<br/>
                    Суббота, воскресенье: выходной<br/>
                </div>
                <div className={styles.workTime}>
                    ООО «Антей»: запчасти для комбайнов, <br/>
                    ремонт комбайнов, дефектовка комбайнов,<br/>
                    ремонт и замена двигателя.<br/>
                    +7 (863) 303-04-41<br/>
                </div>
            </div>
        </div>
    );
};

export default Footer;