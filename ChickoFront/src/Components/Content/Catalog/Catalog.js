import React from 'react';
import {GetProduction} from "../../../App";
import Product from "./CatalogProduct/CatalogProduct";
import styles from './Catalog.module.scss'

const Catalog = () => {
    const products = GetProduction()
    return (
        <div className={styles.catalog}>
            {products.map(item => <Product key={item.id} item={item}/>)}
        </div>
    );
};

export default Catalog;