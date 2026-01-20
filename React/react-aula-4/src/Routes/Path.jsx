import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Homes";
import Produtos from "../pages/Produtos";
import PageLayout from "../layouts/PageLayout";
import NotFound from '../pages/NotFound';
import Produto from "../pages/Produtos";
const Path = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/produtos" element={<Produtos/>}/>
                        <Route path="product/:id/:name" element={<Produto />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Path;