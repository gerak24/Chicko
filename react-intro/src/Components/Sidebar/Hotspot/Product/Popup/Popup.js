import React from 'react';
import styles from './Popup.module.scss'

const Popup = ({item}) => {
    const {id, name, description, price, image} = item
    return (
        <div className={styles.popup}>

        </div>
    );
};

export default Popup;