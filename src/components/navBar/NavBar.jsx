import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <ul className="nav_bar">
            <li>
                <NavLink to="/">
                    {
                        ({isActive}) => isActive ? "active Main" : "Main Page"
                    }
                </NavLink>
            </li>
            <li>
                <NavLink to="/contacts">Contacts</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
        </ul>
    );
}

export default NavBar;