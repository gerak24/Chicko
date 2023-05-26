import React from 'react';
import styles from './Hotspot.module.scss'
import Product from "../../Product/Product";
import SimpSlider from "./Slider/SimpSlider";
import {GetHotProduction} from "../../../App";

const Hotspot = () => {
    const products = GetHotProduction()
    return (<div className={styles.hotspot}>
        <div className={styles.hotspot_title}>Спецпредложения</div>
        <div className={styles.product_content_wrapper}>
            <SimpSlider>
                {products.map(item => <Product key={item.id} item={item}/>)}
            </SimpSlider>
        </div>
    </div>);
};

export default Hotspot;