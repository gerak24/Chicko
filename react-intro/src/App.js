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
        name: "\"Солнечный\"",
        hotspot: true,
        description:
            "Проект двухэтажного просторного дома: \n - современный  \n - комфортныйь  \n - для всей семьи",
        image: "https://rostov.azbuka-doma.ru/upload/iblock/daa/daab4435d8c118a44d4ad870ee25b835.jpg",
        price: 962100
    }, {
        id: "fe14d368-66dd-4e7d-b927-aa8f5279fb42",
        name: "\"Восход\"",
        hotspot: true,
        description: "Для посещения доступен коттеджный дом «Восход 11,5 х 10,5»",
        image: "https://rostov.azbuka-doma.ru/upload/iblock/048/04845c7a825db5c77c37b0a5ecd11a20.jpg",
        price: 4087300
    }, {
        id: "9194fee5-11e8-46e9-a75e-38c3443fb01f",
        name: "\"Удача\"",
        hotspot: true,
        description: "Проект двухэтажного дома:- современный - комфортный - для всей семьи",
        image: "https://rostov.azbuka-doma.ru/upload/iblock/379/3799d82cb0e74dbdaa21da1ec43c9a14.jpg",
        price: 968900
    }, {
        id: "0e2853e5-a030-4662-a275-99ae327a9194",
        name: "\"Радужный\"",
        hotspot: false,
        description: "Проект коттеджного дома \"РАДУЖНЫЙ\" 7 х 8",
        image: "https://rostov.azbuka-doma.ru/upload/iblock/daa/daab4435d8c118a44d4ad870ee25b835.jpg",
        price: 1397800
    }, {
        id: "9194fee5-11e8-46e9-a75e-38c3443fb01f",
        name: "\"Дачник \"",
        hotspot: false,
        description: "Общая площадь дома\n" +
            "54 м2 (наружный размер)\n" +
            "Срок строительства\n" +
            "7-15 дней\n" +
            "Количество этажей\n" +
            "1\n" +
            "Количество комнат\n" +
            "2",
        image: "https://rostov.azbuka-doma.ru/upload/resize_cache/webp/ram.watermark/459/f93/94f/11654/a8170b18cdbaea74f28975239ec2648f.webp",
        price: 656900
    }, {
        id: "0e2853e5-a030-4662-a275-99ae327a9194",
        name: "\"Паттайя\"",
        hotspot: false,
        description: "Небольшой дачный дом: Размеры: 4x4 Площадь: 16 м² Комнаты: 2 Этажность: 1",
        image: "https://domoteka-rnd.ru/wp-content/uploads/2019/10/pattajya_new-1920x768.jpg",
        price: 286000
    }, {
        id: "0e2853e5-a030-4662-a275-99ae327a9194",
        name: "\"Ростов\"",
        hotspot: false,
        description: "Небольшой дачный дом: Размеры: 5x4 Площадь: 34 м² Комнаты: 3 Этажность: 2",
        image: "https://domoteka-rnd.ru/wp-content/uploads/2019/10/rostov_new-1920x768.jpg",
        price: 439000
    }, {
        id: "0e2853e5-a030-4662-a275-99ae327a9194",
        name: "\"Сан-Тропе\"",
        hotspot: false,
        description: "Изысканный, утонченный дачный домик в стиле курортов западного побережья Америки: Размеры: 5x11 Площадь: 43 м² Комнаты: 4 Этажность: 1",
        image: "https://domoteka-rnd.ru/wp-content/uploads/2019/10/san-trope_new-1920x768.jpg",
        price: 599000
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
