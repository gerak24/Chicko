import React from 'react';
import styles from './Product.module.scss'

const Product = ({item}) => {
    const {id, name, description, price, image} = item
    return (
        <div className={styles.content_wrapper}>
            <img src={image} alt='ooops' className={styles.product_image}></img>
            <div className={styles.product_title}>{name}</div>
            <div className={styles.product_description}>{description}</div>
            <div className={styles.product_buttons_wrapper}>
                <div id={id} className={styles.product_button}><i className="fas fa-cart-plus"></i></div>
                <div id={id} className={styles.product_button}><i className="fas fa-file-alt"></i></div>
                <div className={styles.product_price}>{price} руб.</div></div>
        </div>
    );
};

export default Product;