import React, {useState} from 'react';
import styles from './CartInfo.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {sendOrder, checkCartStorage} from '../../../features/cart/cartSlice'

const CartInfo = () => {
    const cart = useSelector((state) => state.cart.value)
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('');
    const dispath = useDispatch();
    if (cart.length === 0) {
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
                <div className={styles.button}
                     onClick={() => {
                         dispath(sendOrder(
                             {
                                 name: document.getElementById('name').value,
                                 phone: document.getElementById('phone').value,
                                 comment: document.getElementById('comment').value,
                                 items: cart
                             }));
                         setOpen(true);
                         setContent(checkOrder(cart));
                     }}>
                    Отправить
                </div>
            </div>
            {open && (<div onClick={() => setOpen(false)} className={styles.alert}>
                    {content}
                </div>
            )}
        </div>
    );
};

function checkOrder(cart) {
    let name = document.getElementById('name').value
    let phone = document.getElementById('phone').value
    if (name === '' || phone === '')
        return ('Укажите контактные данные')
    else if (cart.length === 0)
        return ('Корзина пуста')
    else
        return ('Заказ отправлен. С вами свяжется менеджер.')
}

function getSum(cart) {
    return cart.reduce((acc, item) => acc + item.price * item.amount, 0);
}

function getCount(cart) {
    return cart.reduce((acc, item) => acc + item.amount, 0);
}

export default CartInfo;