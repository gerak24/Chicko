import React from 'react';
import logo from '../../Data/logo.svg'
import styles from './Logo.module.scss'

const Logo = () => {
    return (
        <div className={styles.logo_container}>
            <img src={logo}  alt="Missing Logo svg" className={styles.logo_img}/>
        </div>
    );
};

export default Logo;