import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Layout from "../Components/Layout/Layout";
import Sidebar from "../Components/Sidebar/Sidebar";
import Hotspot from "../Components/Hotspot/Hotspot";
import Logo from "../Components/Logo/Logo";
import Main from "../Components/Main/Main";
import Content from "../Components/Content/Content";
import Contacts from "../Components/Content/Contacts/Contacts";
import {useWindowSize} from "../App";


const ContactPage = () => {
    const [width] = useWindowSize();
    if (width > 640) {
        return (
            <Layout>
                <Header/>
                <Main>
                    <Sidebar>
                        <Logo/>
                        <Hotspot/>
                    </Sidebar>
                    <Content>
                        <Contacts/>
                    </Content>
                </Main>
                <Footer/>
            </Layout>
        );
    } else
        return (
            <Layout>
                <Header/>
                <Main>
                    <Content>
                        <Sidebar>
                            <Hotspot/>
                        </Sidebar>
                        <Contacts/>
                    </Content>
                </Main>
                <Footer/>
            </Layout>);
};

export default ContactPage;