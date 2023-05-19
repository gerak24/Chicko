import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Layout from "../Components/Layout/Layout";
import Hotspot from "../Components/Hotspot/Hotspot";


const HomePage = () => {
    return (
        <Layout>
            <Header/>
            <Hotspot/>
            <Footer/>
        </Layout>
    );
};

export default HomePage;