import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Layout from "../Components/Layout/Layout";
import Main from "../Components/Main/Main";
import Content from "../Components/Content/Content";

const CatalogPage = () => {
    return (
        <Layout>
            <Header/>
            <Main>
                <Content>
                    Тут типа должен быть каталогг
                </Content>
            </Main>
            <Footer/>
        </Layout>
    );
};

export default CatalogPage;