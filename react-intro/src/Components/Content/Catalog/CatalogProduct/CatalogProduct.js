import React, {useState} from 'react';
import styles from './CatalogProduct.module.scss'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../../../features/cart/cartSlice'
import Popup from "./Popup/Popup";

const CatalogProduct = ({item}) => {
    const {id, name, description, price, image} = item
    const dispath = useDispatch();
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.content_wrapper}>
            <div className={styles.product_title}>{name}</div>
            <img src={image} alt='ooops' className={styles.product_image}></img>
            <div className={styles.product_description}>{description}</div>
            <div className={styles.product_buttons_wrapper}>
                <div id={id} className={styles.product_button} onClick={() => dispath(addToCart(item))}>
                    <i className="fas fa-cart-plus"></i>
                </div>
                <div id={id} className={styles.product_button} onClick={() => {
                }}>
                    <i className="fas fa-file-alt"></i>
                </div>
                <div className={styles.product_price}>{price} руб.</div>
            </div>
            {open && (<div onClick={() => setOpen(false)} className={styles.popup}>
                <Popup onClick={() => setOpen(false)} id={id} item={item}/>
            </div>)}
        </div>
    );
};
export default CatalogProduct;