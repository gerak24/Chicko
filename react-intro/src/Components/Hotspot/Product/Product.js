import React from 'react';
import styles from './Product.module.scss'

const Product = ({image,name,description,price}) => {
    return (
        <div className={styles.content_wrapper}>
            <img src={image} alt='ooops'></img>
            <div>{name}</div>
            <div>{description}</div>
            <div>{price}</div>
        </div>
    );
};

export default Product;