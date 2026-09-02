import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (<>
        <nav>
            <NavLink to="/add-task">task</NavLink >
            <NavLink to="/add-list">tasklist</NavLink>
        </nav>
    </>)

};

export default NavBar;