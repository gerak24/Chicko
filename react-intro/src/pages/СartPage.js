import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Layout from "../Components/Layout/Layout";
import Sidebar from "../Components/Sidebar/Sidebar";
import Logo from "../Components/Logo/Logo";
import Hotspot from "../Components/Hotspot/Hotspot";
import Content from "../Components/Content/Content";
import Main from "../Components/Main/Main";

const CatalogPage = () => {
    return (
        <Layout>
            <Header/>
            <Main>
                <Sidebar>
                    <Logo/>
                    <Hotspot/>
                </Sidebar>
                <Content>
                    А тут типа товары карточками накидать
                </Content>
            </Main>
            <Footer/>
        </Layout>
    );
};

export default CatalogPage;