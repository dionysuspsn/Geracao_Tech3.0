import { lazy , Suspense } from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
const Home = lazy(() => import("../components/Home"));
const About = lazy(() => import("../components/About"));
const Contact = lazy(() => import("../components/Contact"))
const Header = lazy(() => import("../layout/Header"))
const Footer = lazy(() => import("../layout/Footer"))
const User = lazy(() => import("../components/User"))
import NotFound from "../components/NotFound";
const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>       
                <Suspense fallback={<h1>Carregando...</h1>}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/user/:id" element={<User/>}/>
                </Routes>
                </Suspense> 
                <Footer/>
            </BrowserRouter>        
        </>
    )
}
export default Paths;