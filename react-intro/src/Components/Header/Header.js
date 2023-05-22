import React from 'react';
import styles from './Header.module.scss'
import image from '../../Data/teacup.png';
import HeaderButt from "./HeaderButt";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_content_wrapper}>
                <HeaderButt title={'Главная'} route={'/'}>
                    <img className={styles.header_image} src={image} alt={'Ooops'}></img>
                </HeaderButt>
                <HeaderButt title={'Контакты'} route={'/contact'}/>
                <HeaderButt title={'Каталог'} route={'/catalog'}/>
            </div>
        </div>
    );
};

export default Header;