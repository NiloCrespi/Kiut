import "./NavBar.css"
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">
                        <h1>KIUT</h1>
                    </a>
                </li>
                <li>
                    <a href="/">carteras</a>
                </li>
                <li>
                    <a href="/">accesorios</a>
                </li>
            </ul>
            <div className="cartContainer">
                <CartWidget/>
            </div>    
        </nav>
    );
}

export default NavBar;