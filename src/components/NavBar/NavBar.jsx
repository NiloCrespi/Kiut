import "./NavBar.css"
import CartWidget from "./CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to = {'/'}>
                            <h1>KIUT</h1>
                        </Link>
                    </li>
                    <li>
                        <NavLink to = {'category/Carteras'} className="linkNavBar">
                            carteras
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = {'category/Accesorios'} className="linkNavBar">
                            accesorios
                        </NavLink>
                    </li>
                </ul>
                <div className="cartContainer">
                    <CartWidget/>
                </div>    
            </nav>
        </header>
    );
}

export default NavBar;