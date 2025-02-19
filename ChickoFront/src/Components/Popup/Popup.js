import React from 'react';
import styles from './Popup.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {hidePopup} from "../../features/cart/productSlice";
import {addToCart} from "../../features/cart/cartSlice";

const Popup = () => {
    const item = useSelector((state) => state.product.value)
    const dispath = useDispatch();
    if (item.show === true) return (
        <div className={styles.popup}>
            <div className={styles.but_wrapper}>
                <div onClick={() => dispath(addToCart(item))} className={styles.but}>
                    <i className="fas fa-cart-plus"></i></div>
                <div onClick={() => dispath(hidePopup())} className={styles.but}>
                    <i className="far fa-times-circle"></i></div>
            </div>
            <img className={styles.img} src={item.image} alt={'error'}></img>
            <div className={styles.column}>
            <div className={styles.title}>{item.name}</div>
                <div className={styles.title}>Стоимость: {item.price} руб.</div>
                <div className={styles.description}>{item.description}</div>
            </div>
        </div>);
};

export default Popup;