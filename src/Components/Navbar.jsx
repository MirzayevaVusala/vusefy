import "./NavbarStyles.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Vusefy</h1>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}

                </ul>
            </nav>

        )
    }

}
export default Navbar;