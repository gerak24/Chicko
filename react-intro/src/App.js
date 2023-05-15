import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import TestPage from "./pages/TestPage";


function App() {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/test"} element={<TestPage/>}/>
        </Routes>
    );
}

export default App;
