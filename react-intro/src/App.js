import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import CatalogPage from "./pages/CatalogPage";


function App() {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/contact"} element={<ContactPage/>}/>
            <Route path={"/catalog"} element={<CatalogPage/>}/>
        </Routes>
    );
}

export default App;
