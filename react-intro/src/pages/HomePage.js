import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Layout from "../Components/Layout/Layout";
import Hotspot from "../Components/Hotspot/Hotspot";
import Main from "../Components/Main/Main";
import Sidebar from "../Components/Sidebar/Sidebar";
import Logo from "../Components/Logo/Logo";
import Content from "../Components/Content/Content";
import Home from "../Components/Content/Home/Home";


const HomePage = () => {
    return (
        <Layout>
            <Header/>
            <Main>
                <Sidebar>
                    <Logo/>
                    <Hotspot/>
                </Sidebar>
                <Content>
                   <Home/>
                </Content>
            </Main>
            <Footer/>
        </Layout>
    );
};

export default HomePage;