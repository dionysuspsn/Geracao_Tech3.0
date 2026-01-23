import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import { Link } from "react-router-dom";
const Header = () => {
    return ( 
    <>
    <h1>Finja que tem um header maneiro aqui</h1>
    <Link to={"/"}>Home</Link>
    <Link to={"/about"}>About</Link>
    <Link to={"/contact"}>Contact</Link>
    <br />
    </>
    );
}
 
export default Header;