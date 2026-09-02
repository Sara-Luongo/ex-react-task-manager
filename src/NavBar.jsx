import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (<>
        <nav>
            <NavLink to="/add-tasks">task</NavLink >
            <NavLink to="/add-list">tasklist</NavLink>
        </nav>
    </>)

};

export default NavBar;