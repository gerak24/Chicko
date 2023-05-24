import React from 'react';
import styles from './Hotspot.module.scss'
import Product from "./Product/Product";
import SimpSlider from "./Slider/SimpSlider";

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

function GetHotProduction() {
    return [{
        id: "a311c9af-f3ce-4caa-8d4b-a8ab7cab8935",
        name: "Сало",
        description: "Сало сальное красиво нарезанное.Разработать программу для автоматизации процесса контроля качества продукции и оптимизации производственных процессов. Программа должна иметь функциональность для мониторинга соответствия продукции требованиям качества, анализировать данные и выделять возможные несоответствия, сигнализировать о превышении лимитов по параметрам качества и помогать быстро выявлять причину недостатков. Программа также должна содержать модуль для управления базой данных, в которой хранятся данные о качестве продукции и результаты испытаний, и обеспечивать мгновенный доступ к релевантной информации. Кроме того, программа должна иметь возможность автоматизировать производственный процесс, предотвращая допущение ошибок и несоответствий на ранних стадиях производства, что поможет повысить эффективность работы и уменьшить вероятность отклонений в качестве продукции.",
        image: "https://ideireceptov.ru/wp-content/uploads/2021/11/2c05aa81578cdb949c038928649c4cc7.jpg",
        price: 100.00
    }, {
        id: "fe14d368-66dd-4e7d-b927-aa8f5279fb42",
        name: "Кот",
        description: "Животное, мохнатое",
        image: "https://mobimg.b-cdn.net/v3/fetch/37/37a4388d1f27bf3cb994125648f8ed81.jpeg",
        price: 1499.99
    }]
}

export default Hotspot;