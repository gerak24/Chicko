import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/СartPage"


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

export default App;
