import React from 'react';
import styles from './CartInfo.module.scss'

const CartInfo = () => {
    return (
        <div className={styles.cartInfo}>
            <div className={styles.cartInfo_title}>Товаров: {getCount()}</div>
            <div className={styles.cartInfo_title}>Сумма: {getSum()}</div>
            <div className={styles.cartInfo_form}>
                <div className={styles.cartInfo_form_title}> Заполните контактные данные для отправки заказа</div>
                <input id={'name'} placeholder={'ФИО'} className={styles.cartInfo_input}/>
                <input id={'phone'} placeholder={'Способ связи'} className={styles.cartInfo_input}/>
                <textarea id={'comment'} placeholder={'Комментарий'} className={styles.cartInfo_input}/>
                <div className={styles.button} onClick={() => sendOrder()}>Отправить</div>
            </div>
        </div>
    );
};

function sendOrder() {
    let cart = JSON.parse(localStorage.getItem('Cart'));
    if (cart.length === 0) {
        alert('Корзина пуста')
    } else {
        let name = document.getElementById('name').value
        let phone = document.getElementById('phone').value
        let comment = document.getElementById('comment').value
        if (name === '' || phone === '') {
            alert('Где имя мудила?')
        } else {
            let order = {
                name: name,
                phone: phone,
                comment: comment,
                items: cart
            }
            console.log(order)
            localStorage.setItem('Cart', JSON.stringify([]));
            alert('Заказ отправлен. С вами свяжется менеджер.')
            window.location.reload();
        }
    }
}

function getSum() {
    let cart = JSON.parse(localStorage.getItem('Cart'));
    return cart.reduce((acc, item) => acc + item.price * item.amount, 0);
}

function getCount() {
    let cart = JSON.parse(localStorage.getItem('Cart'));
    return cart.reduce((acc, item) => acc + item.amount, 0);
}

export default CartInfo;