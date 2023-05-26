import React from 'react';
import styles from './CartInfo.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {sendOrder, checkCartStorage} from '../../../features/cart/cartSlice'

const CartInfo = () => {
    const cart = useSelector((state) => state.cart.value)
    const dispath = useDispatch();
    if (cart.length === 0 ) {
        console.log('Ну, оно видит, шо 0')
        if (JSON.parse(localStorage.getItem('Cart')).length !== 0)
        dispath(checkCartStorage());
    }
    let sum = getSum(cart);
    let count = getCount(cart);
    return (
        <div className={styles.cartInfo}>
            <div className={styles.cartInfo_title}>Товаров: {sum}</div>
            <div className={styles.cartInfo_title}>Сумма: {count}</div>
            <div className={styles.cartInfo_form}>
                <div className={styles.cartInfo_form_title}> Заполните контактные данные для отправки заказа</div>
                <input id={'name'} placeholder={'ФИО'} className={styles.cartInfo_input}/>
                <input id={'phone'} placeholder={'Способ связи'} className={styles.cartInfo_input}/>
                <textarea id={'comment'} placeholder={'Комментарий'} className={styles.cartInfo_input}/>
                <div className={styles.button} onClick={() => dispath(sendOrder())}>Отправить</div>
            </div>
        </div>
    );
};

function getSum(cart) {
    return cart.reduce((acc, item) => acc + item.price * item.amount, 0);
}

function getCount(cart) {
    return cart.reduce((acc, item) => acc + item.amount, 0);
}

export default CartInfo;