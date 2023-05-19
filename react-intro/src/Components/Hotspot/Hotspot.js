import React from 'react';
import styles from './Hotspot.module.scss'
import Product from "./Product/Product";

const Hotspot = () => {
    return (
        <div className={styles.hotspot}>
            <div className={styles.hotspot_title}>Спецпредложения</div>
            <div>slider</div>
            <div className={styles.product_content_wrapper}>
               <Product/>
            </div>
        </div>
    );
};

/*
function GetProductionHtml() {
    const results = [];
    let json = GetHotProduction();
    Object.keys(json).forEach(function (key) {
        results.push(json[key]);
    })
    return
}

function GetHotProduction() {
    return json([
        {
            "Name": "Сало",
            "Description": "Сало сальное красиво нарезанное",
            "Img": "Сало",
            "Price": 100.00
        },
        {
            "Name": "Кот",
            "Description": "Животное, мохнатое",
            "Img": "",
            "Price": 1499.99
        }])
}*/

export default Hotspot;