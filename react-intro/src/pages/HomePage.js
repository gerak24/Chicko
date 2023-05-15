import React from 'react';
import Header from "../Components/Header/Header";
import {Link} from "react-router-dom";


const HomePage = () => {
    return (
        <div className="App">
            <Header/>
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Link to={"/test"}>
                    go to test
                </Link>
            </header>
        </div>
    );
};

export default HomePage;