import React, {useState} from 'react';
import styles from './NomenclatureForm.module.scss'
import {useDispatch} from "react-redux";
import {addProduct, updProduct} from "../../../features/cart/productSlice";

const NomenclatureForm = () => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('');
    const dispath = useDispatch();
    return (
        <div className={styles.form_wrapper}>
            <div className={styles.form}>
                <div className={styles.form_title}> Заполните данные добавляемого/изменяемого продукта</div>
                <input id={'productId'} placeholder={'ID'} className={styles.form_input} readOnly={true} disabled={true}/>
                <input id={'name'} placeholder={'Название'} className={styles.form_input}/>
                <input id={'price'} placeholder={'Стоимость'} className={styles.form_input} type={'number'} content={'0'}/>
                <input id={'image'} placeholder={'Ссылка на изображение'} className={styles.form_input}/>
                <textarea id={'description'} placeholder={'Описание'} className={styles.form_input}/>
                <div className={styles.button}
                     onClick={() => {
                         
                         dispath(document.getElementById('ID').value === undefined ? addProduct(
                             {
                                 productId: crypto.randomUUID(),
                                 name: document.getElementById('name').value,
                                 price: document.getElementById('price').value,
                                 image: document.getElementById('image').value,
                                 description: document.getElementById('description').value
                             }) :
                             updProduct(
                                 {
                                     productId: document.getElementById('ID').value ,
                                     name: document.getElementById('name').value,
                                     price: document.getElementById('price').value,
                                     image: document.getElementById('image').value,
                                     description: document.getElementById('description').value
                                 }));
                         setOpen(true);
                     }}>
                    Создать
                </div>
            </div>
            {open && (<div onClick={() => setOpen(false)} className={styles.alert}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default NomenclatureForm;