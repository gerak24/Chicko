import React from 'react';
import styles from './NomenclatureForm.module.scss'

const NomenclatureForm = () => {
    return (
        <div className={styles.form_wrapper}>
            <div className={styles.form}>
                <div className={styles.form_title}> Заполните данные добавляемого/изменяемого продукта</div>
                <input id={'productId'} placeholder={'ID'} className={styles.form_input} readOnly={true} disabled={true}/>
                <input id={'name'} placeholder={'Название'} className={styles.form_input}/>
                <input id={'name'} placeholder={'Стоимость'} className={styles.form_input} type={'number'} content={'0'}/>
                <input id={'phone'} placeholder={'Ссылка на изображение'} className={styles.form_input}/>
                <textarea id={'comment'} placeholder={'Описание'} className={styles.form_input}/>
                <div className={styles.button}
                     onClick={() => {
                         /*dispath(sendOrder(
                             {
                                 name: document.getElementById('name').value,
                                 phone: document.getElementById('phone').value,
                                 comment: document.getElementById('comment').value,
                                 items: cart
                             }));
                         setOpen(true);
                         setContent(checkOrder(cart));*/
                     }}>
                    Создать
                </div>
            </div>
        </div>
    );
};

export default NomenclatureForm;