import { Link } from "react-router-dom"
import '../../css/navBar.css';
import CartWidget from "../../componentes/CardWidget/CardWidget";

const NavBar = () => {


    return(
    <>
        <nav className="navigatorBar">
            <ul className="barra">
                <li>
                    <a href="/">
                    <p className="titulo">New Luxury</p>
                    </a>
                </li>
                <Link to={'/Relojes'} ><li>RELOJES</li></Link>
                <Link to={'/Joyas'}><li>JOYAS</li></Link>
                <Link to={'/Tecno'}><li>TECHNOLOGY</li></Link>
                <CartWidget />
            </ul>
        </nav>
    </>)
    
}


export default NavBar