import React, {useState} from 'react';
import styles from './Product.module.scss'
import {useWindowSize} from "../../../../App";
import Popup from "./Popup/Popup";

const Product = ({item}) => {
    const {id, name, description, price, image} = item
    const [open, setOpen] = useState(false);
    const [width] = useWindowSize();
    if (width > 640) {
        return (
            <div className={styles.content_wrapper}>
                <img src={image} alt='ooops' className={styles.product_image}></img>
                <div className={styles.product_title}>{name}</div>
                <div className={styles.product_description}>{description}</div>
                <div className={styles.product_buttons_wrapper}>
                    <div id={id} className={styles.product_button} onClick={() => addToCart(item)}><i className="fas fa-cart-plus"></i></div>
                    <div id={id} className={styles.product_button} onClick={() => {}}><i className="fas fa-file-alt"></i></div>
                    <div className={styles.product_price}>{price} руб.</div>
                </div>
                {open && (<div onClick={() => setOpen(false)} className={styles.popup}>
                    <Popup onClick={()=>setOpen(false)} id={id} item={item}/>
                </div>)}
            </div>
        );
    } else
        return (
            <div className={styles.content_wrapper}>
                <div className={styles.title_block}>
                    <div className={styles.product_title}>{name}</div>
                    <img src={image} alt='ooops' className={styles.product_image}></img>
                </div>
                <div className={styles.title_block}>
                    <div className={styles.product_description}>{description}</div>
                    <div className={styles.product_buttons_wrapper}>
                        <div id={id} className={styles.product_button} onClick={() => {}}><i
                            className="fas fa-cart-plus"></i></div>
                        <div id={id} className={styles.product_button}><i className="fas fa-file-alt"></i></div>
                        <div className={styles.product_price}>{price} руб.</div>
                    </div>
                </div>
                {open && (<div onClick={() => setOpen(false)} className={styles.popup}>
                    <Popup onClick={()=>setOpen(false)} id={id} item={item}/>
                </div>)}
            </div>
        );
};

function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('Cart'));
    if (cart.some(i => i.id === item.id)) {
        let itemInCart = cart.find(i => i.id === item.id);
        itemInCart.amount++;
    } else
        cart.push({
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            image: item.image,
            amount: 1
        })
    localStorage.setItem('Cart', JSON.stringify(cart))
}
export default Product;