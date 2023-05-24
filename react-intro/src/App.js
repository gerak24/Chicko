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
