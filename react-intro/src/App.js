import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/СartPage"
import {useLayoutEffect, useState} from "react";


function App() {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/contact"} element={<ContactPage/>}/>
            <Route path={"/catalog"} element={<CatalogPage/>}/>
            <Route path={"/cart"} element={<CartPage/>}/>
        </Routes>
    );
}

export function GetProduction() {
    return [{
        id: "a311c9af-f3ce-4caa-8d4b-a8ab7cab8935",
        name: "Сало",
        hotspot: true,
        description: "Сало сальное красиво нарезанное.Разработать программу для автоматизации процесса контроля качества продукции и оптимизации производственных процессов. Программа должна иметь функциональность для мониторинга соответствия продукции требованиям качества, анализировать данные и выделять возможные несоответствия, сигнализировать о превышении лимитов по параметрам качества и помогать быстро выявлять причину недостатков. Программа также должна содержать модуль для управления базой данных, в которой хранятся данные о качестве продукции и результаты испытаний, и обеспечивать мгновенный доступ к релевантной информации. Кроме того, программа должна иметь возможность автоматизировать производственный процесс, предотвращая допущение ошибок и несоответствий на ранних стадиях производства, что поможет повысить эффективность работы и уменьшить вероятность отклонений в качестве продукции.",
        image: "https://ideireceptov.ru/wp-content/uploads/2021/11/2c05aa81578cdb949c038928649c4cc7.jpg",
        price: 100.00
    }, {
        id: "fe14d368-66dd-4e7d-b927-aa8f5279fb42",
        name: "Кот",
        hotspot: true,
        description: "Животное, мохнатое",
        image: "https://mobimg.b-cdn.net/v3/fetch/37/37a4388d1f27bf3cb994125648f8ed81.jpeg",
        price: 1499.99
    },{
        id: "9194fee5-11e8-46e9-a75e-38c3443fb01f",
        name: "Собака",
        hotspot: true,
        description: "Животное, хвостатое",
        image: "https://zverek.org/wp-content/uploads/2022/10/Uhod-i-vospitanie-sobak-laek-scaled.jpg",
        price: 1209.99
    },{
        id: "0e2853e5-a030-4662-a275-99ae327a9194",
        name: "Гуталин",
        hotspot: true,
        description: "Банка со странной херней",
        image: "https://cheboksary.shoecareshop.ru/upload/resize_cache/iblock/76e/340_340_140cd750bba9870f18aada2478b24840a/76e0e8bae8389deb67027b31c9ed3736.jpg",
        price: 500
    }]
}


export function GetHotProduction() {
    return GetProduction().filter(x => x.hotspot === true)
}

export function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}
export default App;
