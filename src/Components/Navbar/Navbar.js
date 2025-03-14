import {NavLink} from "react-router-dom";
import "../../Styles/Navbar.css";

const Navbar = () => {
    return <>
        <div className="navbar">

            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact-me">Contact ME</NavLink>
            </div>
        </div>
    </>
}

export default Navbar