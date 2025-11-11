import React, {useState} from 'react';
import styles from './NomenclatureForm.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {addProduct, clearNomenc, updProduct} from "../../../features/cart/productSlice";

const NomenclatureForm = () => {
  const item = useSelector((state) => state.product.value)
  const [open, setOpen] = useState(false);
  const [content] = useState('');
  const dispatch = useDispatch();
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form}>
        <div className={styles.form_title}> Заполните данные добавляемого/изменяемого продукта</div>
        <input id={'productId'} placeholder={'ID'} className={styles.form_input} readOnly={true} disabled={true}
               value={item.id}/>
        <input id={'name'} placeholder={'Название'} className={styles.form_input} defaultValue={item.name}/>
        <input id={'price'} placeholder={'Стоимость'} className={styles.form_input} type={'number'} content={'0'}
               defaultValue={item.price}/>
        <input id={'image'} placeholder={'Ссылка на изображение'} className={styles.form_input}
               defaultValue={item.image}/>
        <textarea id={'description'} placeholder={'Описание'} className={styles.form_input}
                  defaultValue={item.description}/>
        <div className={styles.box_wrapper}>
          <input type="checkbox" id="isHotOffer" className={styles.box} defaultChecked={item.isHotOffer}/>
          <label className={styles.text}>Горячее предложение</label>
        </div>
        <div className={styles.box_wrapper}>
          <input type="checkbox" id="isDeleted" className={styles.box} defaultChecked={item.isDeleted}/>
          <label className={styles.text}>Удален</label>
        </div>
        <div className={styles.button}
             onClick={() => {
               dispatch(document.getElementById('ID').value === undefined ? addProduct(
                   {
                     productId: crypto.randomUUID(),
                     name: document.getElementById('name').value,
                     price: document.getElementById('price').value,
                     image: document.getElementById('image').value,
                     description: document.getElementById('description').value,
                     isHotOffer: document.getElementById('isHotOffer').value,
                     isDeleted: document.getElementById('isDeleted').value
                   }) :
                 updProduct(
                   {
                     productId: document.getElementById('ID').value,
                     name: document.getElementById('name').value,
                     price: document.getElementById('price').value,
                     image: document.getElementById('image').value,
                     description: document.getElementById('description').value,
                     isHotOffer: document.getElementById('isHotOffer').value,
                     isDeleted: document.getElementById('isDeleted').value
                   }));
               setOpen(true);
             }}>
          {item.id ? "Обновить" : "Создать"}
        </div>
        <div className={styles.clear}
             onClick={() => {
               dispatch(clearNomenc())
             }}>
          X
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