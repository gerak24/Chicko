import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Layout from "../Components/Layout/Layout";
import Main from "../Components/Main/Main";
import Sidebar from "../Components/Sidebar/Sidebar";
import Logo from "../Components/Logo/Logo";
import Hotspot from "../Components/Hotspot/Hotspot";
import Content from "../Components/Content/Content";

const CatalogPage = () => {
    return (
        <div>
            <Header/>
            <Main>
                <Sidebar>
                    <Logo/>
                    <Hotspot/>
                </Sidebar>
                <Content>
                    Тут типа должен быть каталогг
                </Content>
            </Main>
            <Footer/>
        </div>
    );
};

export default CatalogPage;