import React from 'react';
import styles from './CartInfo.module.scss'

const CartInfo = () => {
    return (
        <div className={styles.cartInfo}>
            <div className={styles.cartInfo_title}>Товаров: {getCount()}</div>
            <div className={styles.cartInfo_title}>Сумма: {getSum()}</div>
        </div>
    );
};

function getSum() {
    let cart = JSON.parse(localStorage.getItem('Cart'));
    return cart.reduce((acc, item) => acc + item.price * item.amount, 0);
}
function getCount() {
    let cart = JSON.parse(localStorage.getItem('Cart'));
    return cart.reduce((acc, item) => acc + item.amount, 0);
}
export default CartInfo;